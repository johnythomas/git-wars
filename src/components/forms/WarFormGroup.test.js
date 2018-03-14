import React from "react";
import { shallow } from "enzyme";
import WarFormGroup from "./WarFormGroup";

describe("WarFormGroup", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<WarFormGroup />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should have 2 WarForms", () => {
    const wrapper = shallow(<WarFormGroup />);
    expect(wrapper.find("WarForm")).toHaveLength(2);
  });
});
