export class PostService {
  postUrl = "https://jsonplaceholder.typicode.com/posts";

  getAllPosts() {
    return fetch(this.postUrl)
      .then((value) => value.json())
      .then((value) => {
        return value;
      });
  }

  getPostById (id) {
     return fetch(`${this.postUrl}/${id}`).then(value => value.json()).then(value => value);
  }
}

export default PostService;
