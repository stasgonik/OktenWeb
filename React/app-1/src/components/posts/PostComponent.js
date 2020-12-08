import React, { Component } from 'react';

class PostComponent extends Component {
    render() {
        let {item, selectThisPost} = this.props;
		return (
			<div>
				POST - {item.id} &nbsp;
				<button onClick={() => selectThisPost(item.id)}>Full-View</button>
			</div>
		);
    }
}

export default PostComponent;
