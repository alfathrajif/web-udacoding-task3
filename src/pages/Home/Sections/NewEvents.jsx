import React from "react";
import EventCard from "../../../components/Cards/EventCard";
import SectionHeader from "../SectionHeader";
import DataProducts from "../../../data/product.json";

export default function NewEvents() {
  return (
    <div className="w-full mb-5">
      <SectionHeader
        title="New Events 🔥"
        paragraph="Di bimbing oleh mentor professional dalam bidangnya"
        link={{
          name: "All Events",
          url: "/events",
        }}
      />
      <div className="mt-4 columns-4 gap-8 min-h-[400px]">
        {DataProducts.events.map((data, index) => {
          if (index >= 4) {
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
  );
}
