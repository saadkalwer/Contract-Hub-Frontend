import React, { useState } from "react";
import { NavbarSection } from "./style";

import navlogo from "../../image/THE CONTRACTS.png";
import { useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react"; // Import the Hamburger component

function Navbar() {
  const navigate = useNavigate();

  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <NavbarSection>
      <nav className="navbar">
        <div className="container">
          <img className="nav-Logo" src={navlogo} alt="" />
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <div className="navLinks">
              <span
                className="NavLink"
                style={{ borderBottom: "2px solid #454545" }}
              >
                HOME
              </span>
              <span className="NavLink">SERVICES</span>
              <span className="NavLink">Pricing</span>
              <span className="NavLink">Security</span>
              <span className="NavLink-Cont">Contact Us</span>
              <span className="NavLink">Login </span>
            </div>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
        </div>
      </nav>
    </NavbarSection>
  );
}

export default Navbar;
