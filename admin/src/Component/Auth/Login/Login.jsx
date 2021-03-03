import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center px-2">
      <div className="w-full sm:w-1/2 lg:w-1/3 bg-blue-600 p-4 rounded-xl">
        <div className="text-center">
          <h1 className="text-2xl">
            <span className="font-bold">REGISTER TO</span> YOUR ACCOUNT
          </h1>
          <p className="text-opacity-50 text-pink-800">
            get access to any kind of weird stuff
          </p>
        </div>
        <form>
          <div className="flex mt-4 bg-gray-400 h-10 rounded-full overflow-hidden item-center">
            <label className="pt-2 text-center bg-pink-500 w-1/4 ">EMAIL</label>
            <input
              required
              className="w-3/4 border-none h-full p-2 bg-transparent outline-none placeholder-blue-600"
              placeholder=" Admin Email"
            />
          </div>
          <div className="flex mt-4 bg-gray-400 h-10 rounded-full overflow-hidden item-center">
            <label className="pt-2 text-center bg-pink-500 w-1/4">
              Password
            </label>
            <input
              required
              className="w-3/4 border-none h-full p-2 bg-transparent outline-none placeholder-blue-600"
              placeholder=" Admin Password"
              type="password"
            />
          </div>
          <button className="block w-full py-2 text-white bg-pink-600 mt-4 rounded-full hover:bg-gray-500">
            Login
          </button>
        </form>
        <div className="w-full mt-3 text-center ">
          <Link
            to="/"
            className=" mx-auto block text-gray-400 font-bold hover:text-pink-600"
          >
            Forget Password
          </Link>
          <Link
            to="/"
            className="block text-gray-400 font-bold mt-2 hover:text-pink-600"
          >
            I don't have an account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
