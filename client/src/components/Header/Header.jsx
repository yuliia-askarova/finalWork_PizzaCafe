import React from "react";
import "./Header.css";
import MenuItem from "./MenuItem/MenuItem";
import Logo from "../Logo/Logo";
import Basket from "../Basket/Basket";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Logo />
          <MenuItem />
          <Basket />
        </div>
      </div>
    </header>
  );
};

export default Header;
