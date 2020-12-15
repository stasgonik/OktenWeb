export class CommentService {
    commentUrl = "https://jsonplaceholder.typicode.com/comments";
  
  
    getCommentById(id) {
      return fetch(`${this.commentUrl}/${id}`)
        .then((value) => value.json())
        .then((value) => value);
    }
  }
  
  export default CommentService;