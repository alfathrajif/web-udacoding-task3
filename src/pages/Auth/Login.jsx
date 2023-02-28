import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen flex w-full justify-center items-center bg-[#219653]">
      <div className="w-[400px] h-14 flex flex-col items-center justify-center">
        <img
          src="/assets/img/udacoding-logo.png"
          alt=""
          className="w-64 mb-4 drop-shadow-xl"
        />
        <div className="w-full shadow  bg-white rounded-md p-4">
          <div className="border rounded-sm flex items-center mb-2 p-2 px-3">
            <input
              type="text"
              className="w-full  outline-none placeholder:text-gray-700"
              placeholder="Email"
            />
            <ion-icon
              name="mail-outline"
              style={{ fontSize: "20px" }}
            ></ion-icon>
          </div>
          <div className="border rounded-sm flex items-center mb-2  p-2 px-3">
            <input
              type="password"
              className="w-full outline-none placeholder:text-gray-700"
              placeholder="Password"
            />
            <ion-icon
              name="lock-closed-outline"
              style={{ fontSize: "20px" }}
            ></ion-icon>
          </div>
          <div className="mb-3">
            <button className="bg-[#219653] w-full text-white rounded-sm font-semibold h-[41px]">
              Sign In
            </button>
          </div>
          <div>
            <p className="mb-1">
              Forgot Your Password?{" "}
              <Link to="/forgot-password" className="text-blue-500">
                Click Here
              </Link>
            </p>
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500">
                Sign Up Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
