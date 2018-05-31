import React from "react";
import { Grid } from "semantic-ui-react";
import User from "./User";

const TrendingPage = () => (
  <Grid columns={4}>
    <Grid.Row>
      <Grid.Column>
        <User />
      </Grid.Column>
      <Grid.Column>
        <User />
      </Grid.Column>
      <Grid.Column>
        <User />
      </Grid.Column>
      <Grid.Column>
        <User />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <User />
      </Grid.Column>
      <Grid.Column>
        <User />
      </Grid.Column>
      <Grid.Column>
        <User />
      </Grid.Column>
      <Grid.Column>
        <User />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default TrendingPage;
