import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/logout";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBurger: false
    };
    this.toggleBurger = this.toggleBurger.bind(this);
  }
  toggleBurger() {
    this.setState({ showBurger: !this.state.showBurger });
  }
  render() {
    const { auth, logout } = this.props;

    return (
      <div className="navbar">
        <div >
          {auth.isAuthenticated
            ? [
                <Link
                  key="logout"
                  to="/"
                  
                  onClick={() => logout()}
                  id="LnRButtons"
                >
                  <i className="fas fa-arrow-alt-circle-left" /> Logout
                </Link>
              ]
            : [
                <Link
                  key="login"
                  onClick={this.toggleBurger}
                  
                  to="/login"
                  id="LnRButtons"
                >
                  <i className="fas fa-sign-in-alt" /> Login
                </Link>,
                <Link
                  key="register"
                  onClick={this.toggleBurger}
                  
                  to="/register"
                  id="LnRButtons"
                >
                  <i className="fas fa-user-plus" /> Register
                </Link>
              ]}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutUser())
  };
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
