import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="h-screen flex w-full justify-center items-center bg-[#219653]">
      <div className="w-[400px] h-14 flex flex-col items-center justify-center">
        <img
          src="/assets/img/udacoding-logo.png"
          alt=""
          className="w-64 mb-4 drop-shadow-xl"
        />
        <div className="w-full shadow  bg-white rounded-md p-4">
          <div className="mb-3 text-center font-medium">Forgot Password</div>
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
          <div className="mb-3">
            <button className="bg-[#219653] w-full text-white rounded-sm font-semibold h-[41px]">
              Send
            </button>
          </div>
          <div>
            <p>
              Have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Sign In Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
