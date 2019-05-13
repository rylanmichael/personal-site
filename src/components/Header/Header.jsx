import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "gatsby";
import headerStyles from "./Header.module.css";

const Header = ({ pathname }) => {
  // eslint-disable-next-line react/destructuring-assignment
  const [activeItem] = useState(pathname);
  return (
    <Menu secondary pointing>
      <Menu.Item active={activeItem === "/"} as={Link} to="/">
        Home
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item active={activeItem === "/about"} as={Link} to="/about">
          About
        </Menu.Item>
        <Menu.Item active={activeItem === "/notes"} as={Link} to="/notes">
          Notes
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
