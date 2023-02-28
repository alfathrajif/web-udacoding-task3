import React from "react";
import EventCard from "../../components/Cards/EventCard";
import FilterSearch from "../../components/FilterSearch";
import { TabTitle } from "../../utils/GeneralFunctions";
import DataProducts from "../../data/product.json";

export default function Events() {
  TabTitle("All Events");
  return (
    <main className="min-h-[calc(100vh-70px)] py-8">
      <div className="w-10/12 mx-auto flex gap-8">
        <FilterSearch />
        <div className="w-full flex flex-wrap gap-8 h-full justify-between">
          {DataProducts.events.map((data, index) => {
            if (index >= 9) {
              return false;
            }

            return (
              <EventCard
                key={index}
                product={{
                  title: data.title,
                  status: data.status,
                  type: data.type,
                  imageUrl: data.imageUrl,
                  start: data.start,
                  end: data.end,
                  price: data.price,
                  discount: data.discount,
                  author: {
                    name: data.author.name,
                    imageUrl: data.author.imageUrl,
                  },
                  user: {
                    ticketCount: data.user.ticketCount,
                    point: data.author.point,
                  },
                }}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
