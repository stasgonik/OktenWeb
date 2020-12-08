import React, { Component } from "react";
import PostService from "../../services/PostService";
import PostComponent from "./PostComponent";
import FullPostComponent from "./FullPostComponent";
import {
  Switch,
  Route,
} from "react-router-dom";

class AllPostsComponent extends Component {
  PostService = new PostService();
  state = { posts: [], chosenPost: null };

  async componentDidMount() {
    let posts = await this.PostService.getAllPosts();
    this.setState({ posts: posts });
  }

  selectThisPost = (id) => {
    this.PostService.getPostById(id).then((value) =>
      this.setState({ chosenPost: value })
    );
  };

  render() {
    let { posts, chosenPost } = this.state;
    return (
      <div>
        <h1>All Posts</h1>
        {posts.map((value) => {
          if (value.id < 25) {
            // я думаю нам все 100 постов не нужно отображать?
            return (
              <PostComponent
                item={value}
                key={value.id}
                // selectThisPost={this.selectThisPost}
              />
            );
          }
        })}
        <hr />
        <Switch>
          <Route path={'/posts/:id'} render={(props) => {
            let {id} = props.match.params;
            this.selectThisPost(id)
          }}  />
        </Switch>

        {chosenPost && <FullPostComponent item={chosenPost} />}
        <hr />
      </div>

      //   Показывается полный пост(или нет если ничего не выбрано)
    );
  }
}

export default AllPostsComponent;
