import React, { Component } from "react";
import AllCommentsComponent from "./components/comments/AllCommentsComponent";
import AllPostsComponent from "./components/posts/AllPostsComponent";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link className="main_link" to={"/posts"}>All Posts</Link></li>
            <li><Link className="main_link" to={"/comments"}>All Comments</Link></li>
          </ul>
          
          

          <Switch>
            <Route path={"/posts"} component={AllPostsComponent}/>
            <Route path={"/comments"} component={AllCommentsComponent}/>
          </Switch>

          
        </div>
      </Router>
    );
  }
}

export default App;
