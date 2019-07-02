import React from "react";
import { connect } from "react-redux";
import { registerUserRequest } from "../actions/register";
import { loginError } from "../actions/login";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      confirm_password: ""
    };
    this.updateDetails = this.updateDetails.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(loginError(""));
  }
  updateDetails(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  submit(e) {
    e.preventDefault();
    e.target.reset();
    let {
      user_name,
      email,
      password,
      confirm_password,
      first_name,
      last_name
    } = this.state;
    if (confirm_password != password)
      return this.props.dispatch(loginError("Passwords don't match"));
    this.props.dispatch(registerUserRequest(this.state));
    this.props.history.goBack();
  }
  render() {
    const { auth } = this.props;
    return (
      <form className="Register form box" onSubmit={this.submit} id="LnRForm">
        <h2 className="title is-2 has-text-white">Register</h2>
        <hr />
        {auth.errorMessage && (
          <span className="has-text-danger has-text-white is-large">
            {auth.errorMessage}
          </span>
        )}
        <div className="columns">
          <label >
            *Email
            <input
              required
              
              placeholder="Email"
              type="text"
              name="email"
              onChange={this.updateDetails}
            />
          </label>
          <label >
            *Username
            <input
              required
              
              placeholder="User Name"
              type="text"
              name="user_name"
              onChange={this.updateDetails}
            />
          </label>
        </div>

        <div className="columns">
          <label >
            *First Name
            <input
              required
              
              placeholder="First Name"
              type="text"
              name="first_name"
              onChange={this.updateDetails}
            />
          </label>
          <label >
            *Last Name
            <input
              required
              
              placeholder="Last Name"
              type="text"
              name="last_name"
              onChange={this.updateDetails}
            />
          </label>
        </div>
        <br />
        <div className="columns">
          <label >
            *Password
            <input
              required
              
              placeholder="Password"
              type="password"
              name="password"
              onChange={this.updateDetails}
            />
          </label>
          <label >
            *Confirm Password
            <input
              required
              
              placeholder="Confirm Password"
              type="password"
              name="confirm_password"
              onChange={this.updateDetails}
            />
          </label>
        </div>
        <br />
        <input
          id="button"
          
          value="Register"
          type="submit"
        />
      </form>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(Register);
