import React from "react";
import { shallow } from "enzyme";
import TrendingPage from "./TrendingPage";

it("should render correctly", () => {
  const wrapper = shallow(<TrendingPage />);
  expect(wrapper).toMatchSnapshot();
});
