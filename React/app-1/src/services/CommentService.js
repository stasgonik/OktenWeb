export class CommentService {
    postComment = "https://jsonplaceholder.typicode.com/comments";
  
    getAllComments() {
      return fetch(this.postComment)
        .then((value) => value.json())
        .then((value) => {
          return value;
        });
    }
  
    getCommentById (id) {
       return fetch(`${this.postComment}/${id}`).then(value => value.json()).then(value => value);
    }
  }
  
  export default CommentService;