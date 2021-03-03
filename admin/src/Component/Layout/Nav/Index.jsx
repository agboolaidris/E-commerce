import React, { useState } from "react";
import { Link } from "react-router-dom";
import Guest from "./Guest";

function Nav() {
  const [state, setstate] = useState(false);

  const handleClick = () => {
    if (state) {
      setstate(false);
    } else {
      setstate(true);
    }
  };
  return (
    <header className="bg-gray-800 sticky top-0 ">
      <nav className="container mx-auto flex justify-between py-3 items-center px-2 ">
        <div className="harmburger sm:hidden z-10" onClick={handleClick}>
          hello
        </div>
        <span className="logo text-white text-2xl">IRIS SHOP</span>
        <ul
          className={
            state
              ? "nav-item menu bg-gray-800"
              : "nav-item  sm:bg-transparent flex justify-center items-center"
          }
        >
          {<Guest />}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
