import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class PostComponent extends Component {
  render() {
    let {
      match: { url },
      item,
    } = this.props;
    return (
      <div>
        POST - {item.id} &nbsp;
        <Link to={`${url}/${item.id}`}>
          <button>Full-View</button>
        </Link>
        {/* <button onClick={() => selectThisPost(item.id)}>Full-View</button> */}
      </div>
    );
  }
}

export default withRouter(PostComponent);
