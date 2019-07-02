import React , {Fragment} from 'react'
import {connect} from 'react-redux'
import Carousel from './Carousel'
import Postsbyuser from "./Postsbyuser";
//import {fetchSaved} from "../actions/receive"

class RegisteredUsersHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <Carousel />
        <h2 >
          Saved resources:
        </h2>
        <div id="cleanUp">
          <div >
            <Postsbyuser />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default RegisteredUsersHome;
