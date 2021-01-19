import React, {Component} from 'react';
import PostService from "../../Services/PostService";
import Post from "./Post";

class AllPosts extends Component {
    state={posts:[]};
    postService = new PostService();

    async componentDidMount() {
        let posts = await this.postService.getAllPosts();
        this.setState({posts});
    }


    render() {
let {posts} = this.state;
        return (
            <div>
                {
                    posts.map(value => <Post key={value.id} item={value}/>)
                }
            </div>
        );
    }
}

export default AllPosts;