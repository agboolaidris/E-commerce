import React from "react";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <label className="pt-2 text-center bg-gray-600  text-pink-600">
              <FontAwesomeIcon icon={faUser} />
            </label>
            <input
              required
              className=" border-none h-full focus:bg-gray-400 p-2 bg-transparent outline-none placeholder-gray-800"
              placeholder="Firstname"
              type="text"
            />
          </div>
          <div className="flex mt-4 bg-gray-500  h-10 rounded-full overflow-hidden item-center">
            <label className="pt-2 text-center bg-gray-600  text-pink-600">
              <FontAwesomeIcon icon={faUser} />
            </label>
            <input
              required
              className=" border-none h-full focus:bg-gray-400 p-2 bg-transparent outline-none placeholder-gray-800"
              placeholder="Lastname"
              type="text"
            />
          </div>

          <div className="flex mt-4 bg-gray-500  h-10 rounded-full overflow-hidden item-center">
            <label className="pt-2 text-center bg-gray-600 text-pink-600">
              <FontAwesomeIcon icon={faEnvelope} />
            </label>
            <input
              required
              className="w-3/4 border-none h-full focus:bg-gray-400 p-2 bg-transparent outline-none placeholder-gray-800"
              placeholder="Email"
              type="email"
            />
          </div>
          <div className="flex mt-4 bg-gray-500 h-10 rounded-full overflow-hidden item-center">
            <label className="pt-2 text-center bg-gray-600  text-pink-600">
              <FontAwesomeIcon icon={faLock} />
            </label>
            <input
              required
              className=" border-none h-full focus:bg-gray-400 p-2 bg-transparent outline-none placeholder-gray-800"
              placeholder="Password"
              type="password"
            />
          </div>
          <div className="flex mt-4 bg-gray-500 h-10 rounded-full overflow-hidden item-center">
            <label className="pt-2 text-center bg-gray-600  text-pink-600">
              <FontAwesomeIcon icon={faLock} />
            </label>
            <input
              required
              className=" border-none h-full focus:bg-gray-400 p-2 bg-transparent outline-none placeholder-gray-800"
              placeholder="confirm Password"
              type="password"
            />
          </div>
          <button className="block w-full py-2 text-white bg-pink-600 my-4 rounded-full hover:bg-pink-500">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
