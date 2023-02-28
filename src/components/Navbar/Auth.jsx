import React, { useState } from "react";
import { Link } from "react-router-dom";

const Auth = ({ authentication }) => {
  const [myProfile, setMyProfile] = useState(false);

  if (authentication) {
    const Profile = () => {
      return (
        <div className={`absolute top-20 right-0 shadow-md w-96`}>
          <div className="bg-[#219653] p-5">
            <img
              src="/assets/img/profilePicture.webp"
              alt=""
              className="mx-auto w-32 rounded-full border-4 border-[#146437]"
            />
            <div className="mt-3 mx-auto text-center">
              <div className="font-medium">Alfath Rajif</div>
              <div className="font-light text-sm">Join since February 2023</div>
            </div>
          </div>
          <ul className="bg-white p-4 text-gray-900 flex flex-col gap-2">
            <li>
              <Link to="#" className="border p-2 px-3 font-medium w-full block">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="#" className="border p-2 px-3 font-medium w-full block">
                Certificate
              </Link>
            </li>
            <li>
              <Link to="#" className="border p-2 px-3 font-medium w-full block">
                Profile
              </Link>
            </li>
            <li>
              <Link to="#" className="border p-2 px-3 font-medium w-full block">
                History
              </Link>
            </li>
            <li>
              <Link to="#" className="border p-2 px-3 font-medium w-full block">
                Cart
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="border p-2 px-3 font-medium w-full block text-red-500"
              >
                Keluar
              </Link>
            </li>
          </ul>
        </div>
      );
    };

    return (
      <div className="relative">
        {myProfile ? <Profile /> : null}
        <button
          type="button"
          className="hover:bg-[#1E894C] p-1 px-3 rounded-sm"
          onClick={() => setMyProfile(!myProfile)}
        >
          <ul className="flex gap-2 items-center">
            <img
              src="/assets/img/profilePicture.webp"
              alt=""
              className="w-10 h-10 object-cover rounded-full"
            />
            <div className="flex items-start flex-col">
              <div>Alfath Rajif</div>
              <div className="font-light text-sm">
                Langganan | <span className="text-yellow-300">9999 Point</span>
              </div>
            </div>
          </ul>
        </button>
      </div>
    );
  } else {
    return (
      <ul className="font-ubuntu flex">
        <li>
          <Link to="login" className="p-2 px-2">
            Login
          </Link>
        </li>
        <span>|</span>
        <li>
          <Link to="register" className="p-2 px-2">
            Register
          </Link>
        </li>
      </ul>
    );
  }
};

export default Auth;
