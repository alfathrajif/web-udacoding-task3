import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex w-full justify-center items-center bg-[#219653]">
      <div className="w-[400px] h-14 flex flex-col items-center justify-center">
        <img
          src="/assets/img/udacoding-logo.png"
          alt=""
          className="w-64 mb-4 drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default Loading;
