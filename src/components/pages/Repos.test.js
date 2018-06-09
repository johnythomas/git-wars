import React from "react";
import { shallow } from "enzyme";
import { Grid, Icon } from "semantic-ui-react";
import Repo from "./Repo";

describe("Repo", () => {
  it("should display the props passed to the component", () => {
    const repo = {
      id: 1,
      name: "mockRepo",
      owner: {
        avatar_url: "mockImage.jpg"
      },
      stargazers_count: 200,
      forks: 12
    };
    const wrapper = shallow(<Repo repo={repo} />);
    expect(wrapper.find("Image").props().src).toEqual(repo.owner.avatar_url);
    expect(wrapper.contains(repo.name)).toEqual(true);
    expect(
      wrapper.contains(
        <Grid.Column computer={6}>
          <Icon name="star" />
          {repo.stargazers_count}
        </Grid.Column>
      )
    ).toEqual(true);
    expect(
      wrapper.contains(
        <Grid.Column computer={6}>
          <Icon name="fork" />
          {repo.forks}
        </Grid.Column>
      )
    ).toEqual(true);
  });
});
