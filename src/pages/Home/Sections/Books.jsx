import React from "react";
import SectionHeader from "../SectionHeader";
import BookCard from "../../../components/Cards/BookCard";
import DataProduct from "../../../data/product.json";

const Books = () => {
  return (
    <section className="w-full mb-5">
      <SectionHeader
        title="Books"
        paragraph="Materi tersusun dengan rapih dan memanjakan mata"
        link={{
          name: "All Books",
          url: "/books",
        }}
      />
      <div className="mt-4 columns-4 gap-8 min-h-[400px]">
        {DataProduct.books.map((book, index) => {
          if (index >= 4) {
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
    </section>
  );
};

export default Books;
