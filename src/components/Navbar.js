import PropTypes from "prop-types";
import React, { useEffect } from "react";
import BurgerMenu from "./burger-menu/BurgerMenu";

import "../style/header.scss";
// import "@reach/dialog/styles.css";

const Header = ({ siteTitle }) => {
  useEffect(() => {}, []);

  return (
    <header>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="nav">
        <a href="/">
          <img
            className="logo"
            src={require("../svgs/selftaughtdev-logo-mini.svg").default}
            alt="logo"
          />
        </a>
        {/* <div className="nav-links">
          <a
            href="https://selftaught-dev.com/"
            target="_blank"
            className="login-text"
          >
            Project Archive
          </a>
        </div> */}
      </div>
      <BurgerMenu />
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
