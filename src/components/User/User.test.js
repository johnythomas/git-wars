import React from "react";
import { shallow } from "enzyme";
import User from "./User";

describe("User", () => {
  it("should render correctly", () => {
    const user = {
      name: "John Doe",
      avatar_url: "http://github.com/johnDoe",
      location: "US",
      followers: 100,
      following: 10
    };
    const wrapper = shallow(<User user={user} />);
    expect(wrapper).toMatchSnapshot();
  });
});
