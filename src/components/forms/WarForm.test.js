import React from "react";
import { shallow } from "enzyme";
import WarForm from "./WarForm";

describe("WarForm", () => {
  it("should change the state on input field change", () => {
    const onSubmit = jest.fn();
    const wrapper = shallow(<WarForm onSubmit={onSubmit} />);
    wrapper.find("input").simulate("change", { target: { value: "mock" } });
    expect(wrapper.state().username).toBe("mock");
  });

  it("should call onSubmit method on form submit", () => {
    const onSubmit = jest.fn();
    const username = "mockValue";
    const wrapper = shallow(<WarForm onSubmit={onSubmit} />);
    wrapper.find("input").simulate("change", { target: { value: username } });
    wrapper.find("Button").simulate("click", { preventDefault: jest.fn() });
    expect(onSubmit).toHaveBeenCalledWith(username);
  });
});
