import React, { Component } from "react";
import "./post.css";

class FullPostComponent extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="post_full">
        POST - {item.id} - by user - {item.userId}
        <h3>{item.title}</h3>
        <p className="post_text">{item.body}</p>
      </div>
    );
  }
}

export default FullPostComponent;
