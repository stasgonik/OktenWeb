import React, { Component } from "react";
import "./comment.css";

class FullCommentComponent extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="comment_full">
        COMMENT - {item.id} - POST - {item.postId}
        <p>Name: {item.name}</p>
        <p>Email: {item.email}</p>
        <p className="comment_text">{item.body}</p>
      </div>
    );
  }
}

export default FullCommentComponent;
