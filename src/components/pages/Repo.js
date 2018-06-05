import React from "react";
import PropTypes from "prop-types";
import { Image, Card, Icon, Grid } from "semantic-ui-react";

const Repo = ({ repo }) => (
  <Card>
    <Image src={repo.owner.avatar_url} />
    <Card.Content>
      <Card.Header>{repo.name}</Card.Header>
      <Card.Description>{repo.language}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Grid>
        <Grid.Column computer={6}>
          <Icon name="star" />
          {repo.stargazers_count}
        </Grid.Column>
        <Grid.Column computer={6}>
          <Icon name="fork" />
          {repo.forks}
        </Grid.Column>
      </Grid>
    </Card.Content>
  </Card>
);

Repo.propTypes = {
  repo: PropTypes.shape({
    owner: PropTypes.shape({
      avatar_url: PropTypes.string
    }).isRequired,
    stargazers_count: PropTypes.number.isRequired,
    forks: PropTypes.number.isRequired
  }).isRequired
};

export default Repo;
