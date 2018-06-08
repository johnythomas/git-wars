import React from "react";
import { shallow } from "enzyme";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
