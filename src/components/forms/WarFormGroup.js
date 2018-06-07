import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import WarForm from "./WarForm";
import { getUser } from "../../utils/api";
import User from "../User";

class WarFormGroup extends Component {
  state = {
    user1: null,
    user2: null
  };

  onSubmit = user => username => {
    getUser(username).then(usr =>
      this.setState(() => ({
        [user]: usr
      }))
    );
  };

  render() {
    return (
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            {this.state.user1 ? (
              <User user={this.state.user1} />
            ) : (
              <WarForm onSubmit={this.onSubmit("user1")} />
            )}
          </Grid.Column>
          <Grid.Column>
            {this.state.user2 ? (
              <User user={this.state.user2} />
            ) : (
              <WarForm onSubmit={this.onSubmit("user2")} />
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default WarFormGroup;
