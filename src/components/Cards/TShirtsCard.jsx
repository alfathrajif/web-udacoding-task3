import React from "react";
import { Link } from "react-router-dom";

export default function TShirtsCard(props) {
  return (
    <div
      className={`w-full max-w-xs overflow-hidden border-2 rounded-xl h-full relative max-h-[412px]`}
    >
      <div className="absolute bg-[#219653] text-white p-2 px-3 rounded-br-xl">
        {props.product.status}
      </div>
      <Link
        to="/"
        className="absolute bg-[#219653] text-white p-2 px-4 rounded-tl-xl right-0 leading-none bottom-0"
      >
        <ion-icon
          name="chevron-forward-outline"
          className="text-2xl"
        ></ion-icon>
      </Link>

      <img
        className="w-full h-48 rounded-b-xl object-cover"
        src={props.product.imageUrl}
        alt="Sunset in the mountains"
      />
      <div className="p-3">
        <div className="font-bold text-xl mb-1">{props.product.title}</div>
        <ul className="text-gray-400 text-sm">
          {(() => {
            if (props.product.stock === "Pre-Order") {
              return <li className="text-red-600 font-semibold">Pre-Order</li>;
            } else {
              return <li>Stok: {props.product.stock}</li>;
            }
          })()}
        </ul>
        <div className="my-3">
          <div className="text-sm font-medium">
            {props.product.discountAmount}
          </div>
          <del className="text-gray-400 text-lg">{props.product.price}</del>
          <div className="text-[#219653] text-lg font-medium">
            {props.product.discount}
          </div>
        </div>
        <div className="flex gap-1 mb-1">
          <div className="text-xs font-medium">
            <ion-icon
              name="star-sharp"
              style={{ color: "rgb(249 115 22)", fontSize: "16px" }}
            ></ion-icon>
            <ion-icon
              name="star-sharp"
              style={{ color: "rgb(249 115 22)", fontSize: "16px" }}
            ></ion-icon>
            <ion-icon
              name="star-sharp"
              style={{ color: "rgb(249 115 22)", fontSize: "16px" }}
            ></ion-icon>
            <ion-icon
              name="star-sharp"
              style={{ color: "rgb(249 115 22)", fontSize: "16px" }}
            ></ion-icon>
            <ion-icon
              name="star-sharp"
              style={{ color: "rgb(249 115 22)", fontSize: "16px" }}
            ></ion-icon>
          </div>
          <div className="text-xs font-bold">|</div>
          <div className="text-xs font-medium ml-0.5">
            {props.product.rating}
          </div>
        </div>
        <div className="flex gap-1">
          <div className="text-xs font-medium mb-0.5">
            Terjual : {props.product.soldOut}
          </div>
          <div className="text-xs font-bold">|</div>
          <div className="text-xs font-medium text-[#219653]">
            {props.user.point} Points
          </div>
        </div>
      </div>
    </div>
  );
}

TShirtsCard.defaultProps = {
  product: {
    title: "title",
    status: "status",
    imageUrl: "imageUrl",
    stock: 2,
    price: "Rp. 220.000",
    discountAmount: "Rp. 20.000",
    discount: "Rp. 200.000",
    soldOut: 90,
    rating: "5.0",
  },
  user: {
    point: 12,
  },
};
