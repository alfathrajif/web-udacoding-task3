import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const path = location.pathname;

  if (
    path === "/login" ||
    path === "/register" ||
    path === "/forgot-password"
  ) {
    return false;
  }

  return (
    <div className="mt-5">
      <div className="bg-[#219653] h-52 flex items-center justify-center">
        <div className="flex justify-center flex-col gap-2 items-center">
          <img src="/assets/img/udacoding-logo.png" alt="" className="w-48" />
          <div className="text-white mb-2">
            IT Training and Software Development
          </div>
          <div className="text-white text-2xl flex gap-3">
            <ion-icon name="logo-linkedin"></ion-icon>
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
          </div>
        </div>
      </div>
      <div className="bg-[#1E894C] h-12 flex items-center justify-center text-white/80 font-light text-sm">
        &copy; 2023 - 2024 Udacoding. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
