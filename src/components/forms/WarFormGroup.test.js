import React from "react";
import { shallow } from "enzyme";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import WarFormGroup from "./WarFormGroup";

describe("WarFormGroup", () => {
  const id = "superman";
  const user = {
    name: "John Doe",
    avatar_url: "http://github.com/johnDoe",
    location: "US",
    followers: 100,
    following: 10
  };

  beforeEach(() => {
    const mockAdapter = new MockAdapter(axios);
    mockAdapter.onGet(`https://api.github.com/users/${id}`).reply(200, user);
  });

  it("should render correctly", () => {
    const wrapper = shallow(<WarFormGroup />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should have 2 WarForms", () => {
    const wrapper = shallow(<WarFormGroup />);
    expect(wrapper.find("WarForm")).toHaveLength(2);
  });

  it("should change the state when onSubmit is called", async () => {
    const wrapper = shallow(<WarFormGroup />);
    await wrapper.instance().onSubmit("user1")(id);
    expect(wrapper.state().user1).toEqual(user);
  });

  it("should update the UI after fetching the user details", async () => {
    const wrapper = shallow(<WarFormGroup />);
    await wrapper.instance().onSubmit("user1")(id);
    await wrapper.instance().onSubmit("user2")(id);
    wrapper.update();
    expect(wrapper.find("User")).toHaveLength(2);
  });
});
