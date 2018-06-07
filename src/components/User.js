import React from "react";
import PropTypes from "prop-types";
import { Image, Grid } from "semantic-ui-react";

const User = ({ user }) => (
  <Grid centered>
    <Grid.Row>
      <Image
        src={user.avatar_url}
        style={{ borderRadius: 200, width: 200, height: 200 }}
      />
    </Grid.Row>
    <Grid.Row>{`Name: ${user.name}`}</Grid.Row>
    <Grid.Row>{`Location: ${user.location}`}</Grid.Row>
    <Grid.Row>{`Followers: ${user.followers}`}</Grid.Row>
    <Grid.Row>{`Following: ${user.following}`}</Grid.Row>
  </Grid>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  }).isRequired
};

export default User;
