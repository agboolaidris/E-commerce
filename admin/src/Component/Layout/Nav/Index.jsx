import React from "react";
import { Link } from "react-router-dom";
import Guest from "./Guest";

function Nav() {
  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto">
        <span className="logo">IRIS SHOP</span>
        <div className="harmburger"></div>
        <>{<Guest />}</>
      </nav>
    </header>
  );
}

export default Nav;
