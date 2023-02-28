import React from "react";
import { Link } from "react-router-dom";

export default function EventCard({ product }) {
  const DisplayProductType = () => {
    if (product.type === "Umum") {
      return (
        <div className="absolute bg-blue-500 text-white p-1.5 w-40 text-center right-[-50px] top-3 rotate-45">
          {product.type}
        </div>
      );
    } else if (product.type === "Men") {
      return (
        <div className="absolute bg-orange-500 text-white p-1.5 w-40 text-center right-[-50px] top-3 rotate-45">
          {product.type}
        </div>
      );
    } else if (product.type === "Women") {
      return (
        <div className="absolute bg-red-500 text-white p-1.5 w-40 text-center right-[-50px] top-3 rotate-45">
          {product.type}
        </div>
      );
    }
  };

  return (
    <div className="w-full max-w-xs overflow-hidden border-2 rounded-xl h-full relative max-h-[512px]">
      <div className="absolute bg-[#219653] text-white p-2 px-3 rounded-br-xl">
        {product.status}
      </div>
      <DisplayProductType />
      <Link
        to="/event/detail"
        className="absolute bg-[#219653] text-white p-2 px-4 rounded-tl-xl right-0 leading-none bottom-0"
      >
        <ion-icon
          name="chevron-forward-outline"
          className="text-2xl"
        ></ion-icon>
      </Link>
      <img
        className="w-full h-48 rounded-b-xl object-cover"
        src={product.imageUrl}
        alt="Sunset in the mountains"
      />
      <div className="p-3">
        <div className="font-bold text-xl mb-1">{product.title}</div>
        <ul className="text-gray-400 text-xs">
          <li>{product.start} TO</li>
          <li>{product.end} PAGI</li>
        </ul>
        <div className="my-2 flex gap-2 items-center">
          <img
            src={product.author.imageUrl}
            alt=""
            className="w-7 h-7 object-cover rounded-full"
          />
          <div className="font-medium">{product.author.name}</div>
        </div>
        <div className="my-3">
          <div className="text-sm font-medium">Price</div>
          <del className="text-gray-400 text-lg">{product.price}</del>
          <div className="text-[#219653] text-lg font-medium">
            {product.discount}
          </div>
        </div>
        <div>
          <div className="text-xs font-medium mb-0.5">
            Tiket Tersisa : {product.user.ticketCount}
          </div>
          <div className="text-xs font-medium text-[#219653]">
            {product.user.point} Points
          </div>
        </div>
      </div>
    </div>
  );
}
