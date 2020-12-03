import React, { Component } from "react";
import CommentComponent from "./CommentComponent";
import FullCommentComponent from "./FullCommentComponent";

class AllCommentsComponent extends Component {
  state = { comments: [], chosenComment: null };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((value) => value.json())
      .then((commentsFromApi) => {
        this.setState({ comments: commentsFromApi });
      });
  }

  selectThisComment = (id) => {
    let choose = this.state.comments.find((value) => value.id === id);
    this.setState({chosenComment : choose});
  };

  render() {
    let { comments, chosenComment } = this.state;
    return (
      <div>
        <h1>All Comments</h1>
        {comments.map((value) => {
			if (value.id < 25) { // я думаю нам все 500 комментов не нужно отображать? Так что я ограничил количество.
				return (
					<CommentComponent
					  item={value}
					  key={value.id}
					  selectThisComment={this.selectThisComment}
					/>
				  );
			}
          
        })}
        <hr />
        {chosenComment && <FullCommentComponent item={chosenComment} />}  
        <hr />
      </div>
	//   Показывается полный комментарий(или нет если ничего не выбрано)
    );
  }
}

export default AllCommentsComponent;
