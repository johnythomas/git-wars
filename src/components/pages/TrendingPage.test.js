import React from "react";
import { mount } from "enzyme";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import TrendingPage from "./TrendingPage";

describe("TrendingPage", () => {
  beforeEach(() => {
    const mockAdapter = new MockAdapter(axios);
    mockAdapter
      .onGet(
        "https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories"
      )
      .reply(200, {
        items: []
      });
  });

  it("should render correctly", () => {
    const wrapper = mount(<TrendingPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
