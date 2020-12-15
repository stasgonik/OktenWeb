import React, { Component } from 'react';
import CommentService from './services/CommentService';
import Comment from './components/Comment';



class App extends Component {
  
  commentService = new CommentService();

  myForm = React.createRef();

	state = {inputValue: '', searchComment: null};

	render() {
    let {searchComment} = this.state;
		return (
			<div>
				<form action={'/commentSearch'} onSubmit={this.send} ref={this.myForm}>
					<input type='number' onInput={this.commitState} value={this.state.inputValue}/><br/>
					<button>Search for comment</button>
				</form>
        <hr/>
          {searchComment && <Comment item={searchComment}/>}

			</div>
		);
	}

	send = (e) => {
    e.preventDefault();
    // let searchComment = this.commentService.getCommentById(this.myForm.current[0].value);
    this.commentService.getCommentById(this.myForm.current[0].value).then((value) =>
      this.setState({ searchComment: value })
    );
	};

	commitState = (e) => {
		this.setState({inputValue: e.target.value});

	};
}
 
export default App;

