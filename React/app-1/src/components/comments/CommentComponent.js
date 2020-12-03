import React, { Component } from 'react';

class CommentComponent extends Component {
    render() {
        let {item, selectThisComment} = this.props;
		return (
			<div>
				СOMMENT - {item.id} &nbsp;
				<button onClick={() => selectThisComment(item.id)}>Full-View</button>
			</div>
		);
    }
}

export default CommentComponent;
