import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'


import { fetchPostsByUser, deletePostSavedToUser } from "../actions/usersposts";

class Postsbyuser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(event) {
    event.preventDefault();
    this.props.dispatch(
      deletePostSavedToUser(this.props.auth.user.user_name, event.target.name)
    );
    this.setState({redirect: true})
    alert("yup.. it's gone.");
  }
  componentDidMount() {
    this.props.dispatch(fetchPostsByUser(this.props.auth.user.user_name));
  }
  render() {
    return (
      <Fragment>
        <div>
          {this.props.postsbyuser.map(post => {
            console.log(post.type)
            return (
              <Fragment key={post.id}>
                <h3 >{post.title}</h3>
                <p>{post.description}</p>
                {post.type == "tutorial" && <embed width="420" height="315" src={post.source_url} />}
                <br />
                
                <button id="addButton" name={post.id} onClick={this.handleDelete}>
                  delete
                </button>
             {/* {this.state.redirect && <Redirect to="/" />} */}
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
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Postsbyuser);
