import React from "react";
import mainPic from "../../assets/menu-main-pic.jpg";
import "./Menu.css";
import { Outlet, Link } from "react-router-dom";
import "../Header/Header.css";
import Footer from "../Footer/Footer";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <img src={mainPic} alt="" />
      </div>

      <div className="wrapper">
        <div className="container">
          <nav className="nav">
            <ul className="nav-list subnav">
              <li className="link">
                <Link to="pizzas" className="sublink">
                  Pizzas
                </Link>
              </li>
              <li className="link">
                <Link to="drinks" className="sublink">
                  Drinks
                </Link>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      </div>

      <Footer/>
      
    </>
  );
};

export default Menu;
