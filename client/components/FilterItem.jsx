import React, { Fragment } from "react";
import { connect } from "react-redux";
import Filter from './Filter'
import Buttons from "./Buttons"


class FilterItem extends React.Component {
  render() {
    return (
      <Fragment>
        <Filter filter='true' />
        <div className="container" id="cleanUp">
        {this.props.search.map(data => {
          console.log(data)
          return (
            <Fragment>
                <div id="adviceBox">
                  <h3 >{data.title}
                </h3>
                <p>
                {data.description}
                </p>
                <p>
                  {data.sourcec_url}
                </p>
                {this.props.auth.isAuthenticated && <Buttons id={data.posts_id} />}
                </div>
            </Fragment>
          );
        })}</div>
      </Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {
    search: state.search,
    auth: state.auth,
    
  };
}
export default connect(mapStateToProps)(FilterItem);