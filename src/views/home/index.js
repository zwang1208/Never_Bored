import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {connect} from "react-redux"

import Menu from "../../component/menu";
import Recreational from "../recreational";
import Cooking from "../cooking";
import Settings from "../settings";
import Profile from "../profile";
import Login from "../login"
import PrivateRoute from "../../component/privateRoute/index"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          title: "Activities",
          key: "activities",
          data: [
            {
              title: "Recreational",
              key: "recreational",
              path: "/home/recreational"
            },
            {
              title: "Cooking",
              key: "cooking",
              path: "/home/cooking"
            }
          ]
        },
        {
          title: "Account",
          key: "account",
          data: [
            {
              title: "Profile",
              key: "profile",
              path: "/home/profile"
            },
            {
              title: "Settings",
              key: "settings",
              path: "/home/settings"
            }
          ]
        }
      ]
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Menu title="NEVER BORED" {...this.props} menu={this.state.menu} />
        <div className="content">
          <Switch>
            <Route
              path="/home/recreational"
              exact
              component={Recreational}
              {...this.props}
            />
            <Route
              path="/home/cooking"
              exact
              component={Cooking}
              {...this.props}
            />
            <PrivateRoute authed={this.props.auth.auth} path="/home/settings" component={Settings} />
            <Route path="/home/profile" exact component={Profile} />
            <Route path="/home/login" exact component={Login} />
            <Route render={() => <Redirect to="/home" />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default connect(
  state => state,
)(Home)
