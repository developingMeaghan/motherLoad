import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./Header";
import MenuBar from "./MenuBar";
import Nav from "./Nav";
import Login from "./Login";
import Register from "./Register";
import PCParts from "./PCParts";
import Tutorials from "./Tutorials";
import Tips from "./Tips";
import Articles from "./Articles";
import AdviceForm from "./AdviceForm";
import RegisteredUsersHome from "./RegisteredUsersHome.jsx";
import NonRegisteredHome from "./NonRegisteredHome"
import Footer from "./Footer";
import FilterItem from "./FilterItem";

export function App({ auth }) {

  return (
    <Router>
      <div className="container">
        <Nav />
        <Header />
        <MenuBar />



        {!auth.isAuthenticated && (
          <Route exact path="/" component={NonRegisteredHome} />
        )}

        {auth.isAuthenticated && (
          <Route exact path="/" component={RegisteredUsersHome} />
        )}
        <br />

        <div className="">
          {auth.isAuthenticated && (
            <Route path="/advice" component={AdviceForm} />
          )}
          {!auth.isAuthenticated && <Route path="/advice" component={Login} />}

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/pcparts" component={PCParts} />
          <Route path="/tutorials" component={Tutorials} />
          <Route path="/tips" component={Tips} />
          <Route path="/articles" component={Articles} />
          <Route path="/filtered" component={FilterItem} />
        </div>
      </div>
      <Footer />
    </Router>
  );
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(App);
