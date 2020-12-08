export class CommentService {
  commentUrl = "https://jsonplaceholder.typicode.com/comments";

  async getAllComments() {
    return await fetch(this.commentUrl)
      .then((value) => value.json())
      .then((value) => {
        return value;
      });
  }

  getCommentById(id) {
    return fetch(`${this.commentUrl}/${id}`)
      .then((value) => value.json())
      .then((value) => value);
  }
}

export default CommentService;
