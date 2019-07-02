import React, { Fragment } from "react";
import { connect } from "react-redux";

import { fetchTutorials } from "../actions/receive";
import Filter from "./Filter";
import Buttons from "./Buttons";
import { saveLocation} from '../actions/location'

class Tutorials extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchTutorials());
    this.props.dispatch(saveLocation({location: 'tutorial', url: '/tutorials'}))

  }
  render() {
    return (
      <Fragment>
        <Filter filter={false} />

        <p id="contribute">
          Know something we don't? &nbsp;
          <span className="advice">
            <a href="#/advice">
              <i className="fas fa-plus" />
              &nbsp;Grow the base!
            </a>
          </span>
        </p>

        <h2 >
          Tutorials
        </h2>

        <div id="cleanUp">

          {this.props.tutorials.map(tutorials => {
            return (
              <Fragment>
                <div id="adviceBox">
                <h3 >{tutorials.title}</h3>
                <embed width="420" height="315" src={tutorials.source_url} />
                <br />
                  {this.props.auth.isAuthenticated && (
                    <Buttons id={tutorials.id} />
                  )}
                </div>
                
              </Fragment>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    tutorials: state.tutorials,
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Tutorials);
