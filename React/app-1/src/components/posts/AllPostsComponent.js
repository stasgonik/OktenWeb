import React, { Component } from "react";
import PostComponent from "./PostComponent";
import FullPostComponent from "./FullPostComponent";

class AllPostsComponent extends Component {
  state = { posts: [], chosenPost: null };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((value) => value.json())
      .then((postsFromApi) => {
        this.setState({ posts: postsFromApi });
      });
  }

  selectThisPost = (id) => {
    let choose = this.state.posts.find((value) => value.id === id);
    this.setState({chosenPost : choose});
  };

  render() {
    let { posts, chosenPost } = this.state;
    return (
      <div>
        <h1>All Posts</h1>
        {posts.map((value) => {
			if (value.id < 25) { // я думаю нам все 100 постов не нужно отображать?
				return (
					<PostComponent
					  item={value}
					  key={value.id}
					  selectThisPost={this.selectThisPost}
					/>
				  );
			}
          
        })}
        <hr />
        {chosenPost && <FullPostComponent item={chosenPost}/>}  
        <hr />
      </div>
	//   Показывается полный пост(или нет если ничего не выбрано)
    );
  }
}

export default AllPostsComponent;
