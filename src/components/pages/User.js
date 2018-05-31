import React from "react";
import { Image, Card, Icon } from "semantic-ui-react";

const User = () => (
  <Card>
    <Image src="https://avatars3.githubusercontent.com/u/6956481?s=460&v=4" />
    <Card.Content>
      <Card.Header>Johny</Card.Header>
      <Card.Description>User Details</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        Follow
      </a>
    </Card.Content>
  </Card>
);

export default User;
