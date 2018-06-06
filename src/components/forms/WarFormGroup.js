import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import WarForm from "./WarForm";

class WarFormGroup extends Component {
  state = {
    user1: {},
    user2: {}
  };

  onSubmit = user => username => {
    console.log(`${user} value ${username}`);
  };

  render() {
    return (
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <WarForm onSubmit={this.onSubmit("user1")} />
          </Grid.Column>
          <Grid.Column>
            <WarForm onSubmit={this.onSubmit("user2")} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default WarFormGroup;
