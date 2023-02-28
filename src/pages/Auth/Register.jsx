import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="h-screen flex w-full justify-center items-center bg-[#219653]">
      <div className="w-[400px] h-14 flex flex-col items-center justify-center">
        <img
          src="/assets/img/udacoding-logo.png"
          alt=""
          className="w-64 mb-4 drop-shadow-xl"
        />
        <div className="w-full shadow  bg-white rounded-md p-4">
          <div className="mb-3 flex flex-col">
            <label htmlFor="nama_lengkap" className="mb-1 font-medium">
              Nama Lengkap
            </label>
            <input
              type="text"
              className="w-full p-2 px-3 border rounded-sm  outline-none placeholder:text-gray-400"
              placeholder="Nama Lengkap"
              name="nama_lengkap"
              id="nama_lengkap"
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="phone_number" className="mb-1 font-medium">
              Phone Number
            </label>
            <input
              type="text"
              className="w-full p-2 px-3 border rounded-sm  outline-none placeholder:text-gray-400"
              placeholder="Phone Number"
              name="phone_number"
              id="phone_number"
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="nama_lengkap" className="mb-1 font-medium">
              Gender
            </label>
            <div className="flex gap-5">
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  name="gender"
                  id="laki-laki"
                  value="laki-laki"
                  className="accent-[#219653] w-5 h-5"
                />
                <label htmlFor="laki-laki">Laki - Laki</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  name="gender"
                  id="perempuan"
                  value="perempuan"
                  className="accent-[#219653] w-5 h-5"
                />
                <label htmlFor="perempuan">Perempuan</label>
              </div>
            </div>
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium">
              Email
            </label>
            <input
              type="text"
              className="w-full p-2 px-3 border rounded-sm  outline-none placeholder:text-gray-400"
              placeholder="Email"
              name="email"
              id="email"
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="password" className="mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 px-3 border rounded-sm  outline-none placeholder:text-gray-400"
              placeholder="Password"
              name="password"
              id="password"
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label htmlFor="password" className="mb-1 font-medium">
              Retype Password
            </label>
            <input
              type="password"
              className="w-full p-2 px-3 border rounded-sm  outline-none placeholder:text-gray-400"
              placeholder="Retype Password"
              name="password"
              id="password"
            />
          </div>
          <div className="mb-3">
            <button className="bg-[#219653] hover:bg-[#1c7f47] w-full text-white rounded-sm font-semibold h-[41px]">
              Sign Up
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

export default Register;
