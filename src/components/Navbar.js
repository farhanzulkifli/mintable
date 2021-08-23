import React from "react";
import { Link } from "react-router-dom";
import {
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

const Navbar = () => {
  return (
    <>
      <div className = "nav">
        <div className = "navmenu">
          <Link to="/" className = "navlink">Home</Link>
          <Link to="/browse" className = "navlink">Browse</Link>
          <Link to="/discover" className = "navlink">Discover</Link>
          <Link to="/mint" className = "navlink">Mint an Item</Link>
          <Link to="/vote" className = "navlink">Vote/DAO</Link>
        </div>
        <NavBtn>
          <NavBtnLink to="/login">Log In</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/signup">Sign Up</NavBtnLink>
        </NavBtn>
      </div>
    </>
  );
};

export default Navbar;
