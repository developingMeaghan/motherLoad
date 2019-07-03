import React, { Fragment } from "react";

class Comment extends React.Component {
  render() {
    return (
      <Fragment>
        <div  id="container">
          <button>Add Comment</button>
          <textarea placeholder="Add Comment"></textarea>
          <button>Submit!</button>
          {/* <input
                  id="button1"
                  className="button"
                  type="submit"
                  onSubmit={this.handleSubmit}
                /> */}
        </div>
      </Fragment>
    );
  };
}

export default Comment;
