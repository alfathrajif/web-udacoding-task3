import React from "react";
import SectionHeader from "../SectionHeader";
import TShirtsCard from "../../../components/Cards/TShirtsCard";
import DataProduct from "../../../data/product.json";

export default function TShirt() {
  return (
    <div className="w-full mb-5">
      <SectionHeader
        title="T-Shirts"
        paragraph="Memakai bahan yang lembut dan nyaman serta dengan design yang minimalis"
        link={{
          name: "All T-Shirts",
          url: "/tshirts",
        }}
      />
      <div className="mt-4 columns-4 gap-8 min-h-[400px]">
        {DataProduct.tshirts.map((book, index) => {
          if (index >= 4) {
            return false;
          }
          return (
            <TShirtsCard
              key={index}
              product={{
                title: book.title,
                stock: book.stock,
                status: book.status,
                imageUrl: book.imageUrl,
                price: book.price,
                discountAmount: book.discountAmount,
                discount: book.discount,
                rating: book.rating,
                soldOut: book.soldOut,
                user: {
                  point: book.user.point,
                },
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
