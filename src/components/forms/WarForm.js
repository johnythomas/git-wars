import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "semantic-ui-react";

class WarForm extends Component {
  state = {
    username: ""
  };

  handleOnChange = e => {
    const username = e.target.value;
    this.setState(() => ({
      username
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.username);
  };

  render() {
    return (
      <Form>
        <Form.Field>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            placeholder="Enter Username"
            value={this.state.username}
            onChange={this.handleOnChange}
          />
        </Form.Field>
        <Button type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

WarForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default WarForm;
