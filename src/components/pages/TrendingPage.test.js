import React from "react";
import { shallow } from "enzyme";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import TrendingPage from "./TrendingPage";

describe("TrendingPage", () => {
  const items = [
    {
      id: 1,
      name: "mockRepo",
      owner: {
        avatar_url: "mockImage.jpg"
      },
      stargazers_count: 200,
      forks: 12
    }
  ];

  beforeEach(() => {
    const mockAdapter = new MockAdapter(axios, { delayResponse: 0 });
    mockAdapter
      .onGet(
        "https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories"
      )
      .reply(200, {
        items
      });
  });

  it("should update the state after fetcheing trending repos from github API", async () => {
    const wrapper = shallow(<TrendingPage />);
    await wrapper.instance().componentDidMount();
    expect(wrapper.state().repos).toEqual(items);
  });
});
