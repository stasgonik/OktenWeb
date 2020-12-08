import React, { Component } from "react";
import CommentService from "../../services/CommentService";
import CommentComponent from "./CommentComponent";
import FullCommentComponent from "./FullCommentComponent";
import {
  Switch,
  Route,
} from "react-router-dom";

class AllCommentsComponent extends Component {
  state = { comments: [], chosenComment: null };
  CommentService = new CommentService();

  async componentDidMount() {
    let comments = await this.CommentService.getAllComments();
    this.setState({ comments: comments });
  }

  selectThisComment = (id) => {
    this.CommentService.getCommentById(id).then((value) =>
      this.setState({ chosenComment: value })
    );
  };

  render() {
    let { comments, chosenComment } = this.state;
    return (
      <div>
        <h1>All Comments</h1>
        {comments.map((value) => {
          if (value.id < 25) {
            // я думаю нам все 500 комментов не нужно отображать? Так что я ограничил количество.
            return (
              <CommentComponent
                item={value}
                key={value.id}
                // selectThisComment={this.selectThisComment}
              />
            );
          }
        })}
        <hr />
        <Switch>
          <Route path={'/comments/:id'} render={(props) => {
            let {id} = props.match.params;
            this.selectThisComment(id)
          }}  />
        </Switch>

        {chosenComment && <FullCommentComponent item={chosenComment}/>}
        <hr />
      </div>
      //   Показывается полный комментарий(или нет если ничего не выбрано)
    );
  }
}

export default AllCommentsComponent;
