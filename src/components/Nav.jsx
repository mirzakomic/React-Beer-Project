import React from "react";
import bier from "../assets/bier.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img src={bier}/>
      </Link>
    </nav>
  );
};

export default Nav;
