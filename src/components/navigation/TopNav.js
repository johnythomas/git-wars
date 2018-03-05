import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink as Link } from "react-router-dom";

const TopNav = () => (
  <Menu pointing>
    <Menu.Item>GitWars</Menu.Item>
    <Menu.Item name="home" as={Link} exact to="/" color="red">
      WarZone
    </Menu.Item>
    <Menu.Item name="trending" as={Link} to="/trending" color="red">
      Trending
    </Menu.Item>
  </Menu>
);

export default TopNav;
