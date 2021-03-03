import React from "react";
import { Link } from "react-router-dom";
function Guest({ setstate }) {
  return (
    <>
      <li className="text-2lg sm:mx-4">
        <Link
          to="/"
          className="text-white hover:text-pink-600"
          onClick={() => setstate(false)}
        >
          Home{" "}
        </Link>
      </li>
      <li
        className="text-2lg bg-pink-600 px-3 py-1 sm:mx-4 hover:bg-pink-200"
        onClick={() => setstate(false)}
      >
        <Link to="/login" className="text-gray-800 hover:text-pink-600">
          Login
        </Link>
      </li>
      <li className="text-2lg sm:mx-4 border-pink-400  bg-gray-200 px-3 py-1">
        <Link
          to="/register"
          className="text-pink hover:text-pink-600"
          onClick={() => setstate(false)}
        >
          Register
        </Link>
      </li>
    </>
  );
}

export default Guest;
