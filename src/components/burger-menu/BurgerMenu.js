import React from "react";
import { slide as Menu } from "react-burger-menu";

import "../burger-menu/burger-styles.scss";

const BurgerMenu = () => {
  return (
    <Menu right>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a
        href="https://youtube.com/playlist?list=PLIjhdtSXcP9Lpz0VJsb9QOFCrfSvl8K2I"
        target="_blank"
        rel="noReferrer"
        className="login-text"
      >
        HTML Tutorials
      </a>
      <a
        href="https://www.youtube.com/playlist?list=PLIjhdtSXcP9Lh-ZAgde1RwfCpWyxXeSI_"
        target="_blank"
        rel="noReferrer"
        className="login-text"
      >
        CSS Tutorials
      </a>
      <a
        href="https://selftaught-dev.com/"
        target="_blank"
        className="login-text"
      >
        Project Archive
      </a>
    </Menu>
  );
};

export default BurgerMenu;
