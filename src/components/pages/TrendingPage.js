import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Repo from "./Repo";
import { getTrendingRepos } from "../../utils/api";

class TrendingPage extends Component {
  state = {
    repos: []
  };

  componentDidMount() {
    return getTrendingRepos().then(repos => this.setState(() => ({ repos })));
  }

  render() {
    return (
      <Grid columns={4}>
        {this.state.repos.map(repo => (
          <Grid.Column key={repo.id} computer={3}>
            <Repo repo={repo} />
          </Grid.Column>
        ))}
      </Grid>
    );
  }
}

export default TrendingPage;
