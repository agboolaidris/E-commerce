import React from "react";

function Login() {
  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center px-2">
      <div className="w-full sm:w-1/2 lg:w-1/3 bg-blue-600 p-4 rounded-xl">
        <div className="text-center">
          <h1>
            <span className="font-bold">REGISTER TO</span> YOUR ACCOUNT
          </h1>
          <p className="text-opacity-50 text-gray-800">
            get access to any kind of weird stuff
          </p>
        </div>
        <form>
          <div className="flex mt-4 bg-gray-400 h-10 rounded-full overflow-hidden item-center">
            <lable className="pt-2 px-4 bg-blue-500">EMAIL</lable>
            <input
              required
              className="w-3/4 border-none h-full p-2 bg-transparent outline-none placeholder-blue-600"
              placeholder=" Admin Email"
            />
          </div>
          <div className="flex mt-4 bg-gray-400 h-10 rounded-full overflow-hidden item-center">
            <lable className="pt-2 px-4 bg-blue-500">EMAIL</lable>
            <input
              required
              className="w-3/4 border-none h-full p-2 bg-transparent outline-none placeholder-blue-600"
              placeholder=" Admin Password"
            />
          </div>
          <button className="block w-full py-3 text-white bg-gray-600 mt-4 rounded-full hover:bg-gray-500">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
