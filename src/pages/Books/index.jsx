import React from "react";
import BookCard from "../../components/Cards/BookCard";
import FilterSearch from "../../components/FilterSearch";
import { TabTitle } from "../../utils/GeneralFunctions";
import DataProduct from "../../data/product.json";

const Books = () => {
  TabTitle("All Books");
  return (
    <main className="min-h-[calc(100vh-70px)] py-8">
      <div className="w-10/12 mx-auto flex gap-8">
        <FilterSearch />
        <div className="w-full flex flex-wrap gap-8 min-h-[400px] justify-between">
          {DataProduct.books.map((book, index) => {
            if (index >= 9) {
              return false;
            }
            return (
              <BookCard
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
    </main>
  );
};

export default Books;
