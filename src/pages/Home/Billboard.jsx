import React from "react";

function Billboard() {
  return (
    <div className="w-full h-[500px] relative mb-5">
      <img
        src="./assets/img/unsplash_B2zWzmlyBuk.png"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 bg-black/50 text-center flex justify-center flex-col h-36 px-5 text-white">
        <h1 className="font-semibold mb-2 text-xl">Training Offline</h1>
        <p className="font-light">
          Offline training refers to the process of training a machine learning
          model using a fixed dataset that is already available. In offline
          training, the model is trained on a set of pre-collected data, rather
          than data that is generated in real-time.
        </p>
      </div>
    </div>
  );
}

export default Billboard;
