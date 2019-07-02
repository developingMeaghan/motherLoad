import React, { Fragment } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <div id="header">
          <div>
            <Link to="/" >
              <h1>
                MotherLoad
              </h1>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  };
}

export default Header;
