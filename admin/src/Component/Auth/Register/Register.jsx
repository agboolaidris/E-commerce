import React from "react";
import { Link } from "react-router-dom";
import icon from "../../../img/login.svg";
function Register() {
  return (
    <div className="auth-height flex justify-center items-center px-2">
      <div className="w-full sm:w-1/2 lg:w-1/3 bg-gray-900 p-4 rounded-xl">
        <div className="text-center">
          <img src={icon} className="w-3/4 block mx-auto h-20 mb-3" />

          <h1 className="text-2xl text-gray-400">
            <span className="font-bold">REGISTER TO</span> YOUR ACCOUNT
          </h1>
          <p className="text-opacity-50 text-pink-800">
            get access to any kind of weird stuff
          </p>
        </div>
        <form>
          <div className="flex mt-4 bg-gray-500  h-10 rounded-full overflow-hidden item-center">
            <label className="pt-2 text-center bg-pink-500 w-1/4 ">
              FirstName
            </label>
            <input
              required
              className="w-3/4 border-none h-full focus:bg-gray-400 p-2 bg-transparent outline-none placeholder-pink-400"
              placeholder=" Username"
              type="text"
            />
          </div>
          <div className="flex mt-4 bg-gray-500  h-10 rounded-full overflow-hidden item-center">
            <label className="pt-2 text-center bg-pink-500 w-1/4 ">
              LastName
            </label>
            <input
              required
              className="w-3/4 border-none h-full focus:bg-gray-400 p-2 bg-transparent outline-none placeholder-pink-400"
              placeholder=" First name"
              type="email"
            />
          </div>
          <div className="flex mt-4 bg-gray-500  h-10 rounded-full overflow-hidden item-center">
            <label className="pt-2 text-center bg-pink-500 w-1/4 ">EMAIL</label>
            <input
              required
              className="w-3/4 border-none h-full focus:bg-gray-400 p-2 bg-transparent outline-none placeholder-pink-400"
              placeholder=" Admin Email"
              type="email"
            />
          </div>
          <div className="flex mt-4 bg-gray-500 h-10 rounded-full overflow-hidden item-center">
            <label className="pt-2 text-center bg-pink-500 w-1/4">
              Password
            </label>
            <input
              required
              className="w-3/4 border-none h-full focus:bg-gray-400 p-2 bg-transparent outline-none placeholder-pink-400"
              placeholder=" Admin Password"
              type="password"
            />
          </div>
          <div className="flex mt-4 bg-gray-500 h-10 rounded-full overflow-hidden item-center">
            <label className="pt-2 text-center bg-pink-500 w-1/4">
              Password
            </label>
            <input
              required
              className="w-3/4 border-none h-full focus:bg-gray-400 p-2 bg-transparent outline-none placeholder-pink-400"
              placeholder=" confirm Password"
              type="password"
            />
          </div>
          <button className="block w-full py-2 text-white bg-pink-600 mt-4 rounded-full hover:bg-gray-500">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
