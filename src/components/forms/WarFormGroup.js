import React from "react";
import { Grid } from "semantic-ui-react";
import WarForm from "./WarForm";

const WarFormGroup = () => (
  <Grid columns={2} divided>
    <Grid.Row>
      <Grid.Column>
        <WarForm />
      </Grid.Column>
      <Grid.Column>
        <WarForm />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default WarFormGroup;
