import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class CommentComponent extends Component {
  render() {
    let {
      match: { url },
      item,
    } = this.props;
    return (
      <div>
        СOMMENT - {item.id} &nbsp;
        <Link to={`${url}/${item.id}`}>
          <button>Full-View</button>
        </Link>
        {/* <button onClick={() => selectThisComment(item.id)}>Full-View</button> */}
      </div>
    );
  }
}

export default withRouter(CommentComponent);
