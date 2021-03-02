import React from "react";

function Login() {
  return (
    <div className="flex justify-center align-center items-center h-screen p-6">
      <div className="w-screen md:w-1/2 lg:w-1/3 bg-gray-600 rounded p-6 ">
        <div className="text-center">
          <h2 className="text-white text-2xl">
            <span className="font-bold">LOGIN TO</span> YOUR ACCOUNT
          </h2>
          <p className="text-opacity-50 text-white">
            get access to any kind of weird stuff
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
