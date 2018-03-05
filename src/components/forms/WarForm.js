import React from "react";
import { Form, Button } from "semantic-ui-react";

const WarForm = () => (
  <Form>
    <Form.Field>
      <label htmlFor="username">Username</label>
      <input name="username" placeholder="Enter Username" />
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
);

export default WarForm;
