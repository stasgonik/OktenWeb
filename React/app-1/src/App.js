import React, { Component } from 'react';
import AllCommentsComponent from './components/comments/AllCommentsComponent';
import AllPostsComponent from './components/posts/AllPostsComponent';

class App extends Component {
  

  render() { 
    

    return (<div>
      
      <AllCommentsComponent/>
      <AllPostsComponent/>


    </div>);
  }
}
 
export default App;

