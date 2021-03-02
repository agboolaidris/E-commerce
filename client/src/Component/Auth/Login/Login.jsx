import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import user from "../../../img/user.svg";
function Login() {
  return (
    <div className="flex justify-center align-center items-center h-screen p-6 ">
      <div className="w-screen sm:w-1/2  xl:w-1/3 bg-gray-600 rounded p-6 ">
        <div className="text-center ">
          <div className="w-full  h-20 text-center ">
            <img src={user} className="w-20 mx-auto block" />
          </div>
          <h2 className="text-white text-2xl">
            <span className="font-bold">LOGIN TO</span> YOUR ACCOUNT
          </h2>
          <p className="text-opacity-50 text-white">
            get access to any kind of weird stuff
          </p>
        </div>
        <form className="mt-6">
          <div className="bg-gray-300 flex rounded-full h-10 item-center overflow-hidden mt-4">
            <label className="pt-2 px-4  text-white text-opacity-4 bg-gray-400">
              <FontAwesomeIcon icon={faUser} />
            </label>
            <input
              className="bg-transparent w-4/5 border-none outline-none h-10 p-2 placeholder-white"
              placeholder="username"
            />
          </div>
          <div className="bg-gray-300 flex rounded-full h-10 item-center overflow-hidden mt-4">
            <label className="pt-2 px-4  text-white text-opacity-4 bg-gray-400">
              <FontAwesomeIcon icon={faLock} />
            </label>
            <input
              className="bg-transparent w-4/5 border-none outline-none h-10 p-2 placeholder-white"
              placeholder="password"
            />
          </div>
          <button className="block w-full mt-4  bg-blue-600 rounded-full h-10 border-none outline-none hover:bg-blue-400 text-white">
            Login
          </button>
        </form>
        <a className="block text-white text-lg mt-2 hover:text-blue-400 text-center">
          Forget password
        </a>
        <a className="block text-white text-lg mt-1 hover:text-blue-400 text-center">
          I don't have an account
        </a>
      </div>
    </div>
  );
}

export default Login;
