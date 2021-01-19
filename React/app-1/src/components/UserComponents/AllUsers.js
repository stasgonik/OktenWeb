import React, { Component } from "react";
import UserService from "../../Services/UserService";
import User from "./User";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import ChosenUser from "./ChosenUser";
import AllPosts from "../post-components/AllPosts";

class AllUsers extends Component {
  userService = new UserService();
  state = { users: [] };

  async componentDidMount() {
    let users = await this.userService.getAllUsers();
    this.setState({ users });
  }

  render() {
    let {
      match: { url },
    } = this.props;
    let { users } = this.state;
    console.log(url);
    return (
      <div className={"main-all-users-box"}>
        <div className={"all-users"}>
          {users.map((value) => (
            <User key={value.id} item={value} />
          ))}
        </div>

        <Switch>
          <Route
            path={url + "/:id" + "/details"}
            render={(props) => {
              let {
                match: {
                  params: { id },
                },
              } = props;

              return (
                <div className={"detailes"}>
                  <ChosenUser key={id} {...props} />
                </div>
              );
            }}
          />

          <Route
            path={url + "/:id" + "/posts"}
            render={(props) => {
              console.log(props);
              return <AllPosts key={Math.random()}/>
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(AllUsers);
