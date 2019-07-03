import React, { Fragment } from "react";
import { connect } from "react-redux";

import { fetchTips } from "../actions/receive";
import Buttons from "./Buttons";
import Filter from "../components/Filter";
import { saveLocation } from "../actions/location";
import Comment from "./Comment"

class Tips extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchTips());
    this.props.dispatch(saveLocation({location: 'tip', url: '/tips'}))
  }

  render() {
    return (
      <Fragment>
        <p id="contribute">
          Know something we don't? &nbsp;
          <span className="advice">
            <a href="#/advice">
              <i className="fas fa-plus" />
              &nbsp;Grow the base!
            </a>
          </span>
        </p>
        <Filter filter={false} />
        <h2 >Tips</h2>

        <div  id="cleanUp">
          {this.props.tips.map(tips => {
            return (
              <Fragment key={tips.id}>
                <div id="adviceBox">
                  <h3 >{tips.title}</h3>
                  <p>{tips.description}</p>

                  {this.props.auth.isAuthenticated && <Buttons id={tips.id}/> 
                }
                {this.props.auth.isAuthenticated && <Comment /> 
                }
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
    postsbyuser: state.postsbyuser,
    tips: state.tips,
    auth: state.auth,
    location: state.location
  };
}

export default connect(mapStateToProps)(Tips);
