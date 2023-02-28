import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { EventsCheckout } from "../../components/Cards/EventsCheckout";
import { Checkout } from "../../components/Cards/Checkout";
import { CardTwo } from "../../components/Purchase/CardTwo";
import DataProduct from "../../data/product.json";

export default function DataCheck() {
  return (
    <main className="min-h-[calc(100vh-70px)] py-8">
      <Stack className="w-10/12 mx-auto" direction="row" spacing={5}>
        <Stack className="w-full">
          <h5 className="text-lg font-bold mb-5">Checkout</h5>
          <Stack direction="row" justifyContent="space-between">
            <span className="text-lg font-semibold mb-2">
              Alamat Pengiriman
            </span>
            <Link
              onClick={() => alert("clicked")}
              className="font-bold text-[#219653]"
            >
              Pilih Alamat Pengiriman
            </Link>
          </Stack>
          <ul className="mb-5 text-lg">
            <li>Raeihan Alvaro (Raeihan@gmail.com)</li>
            <li>081313494465</li>
            <li>Perumahan Indonesia Raya Blok RI 45 Rt 17 Rw 45</li>
          </ul>
          <Stack spacing={3}>
            <Stack className="border-b-2">
              <h2 className="mb-3">Events</h2>
              {DataProduct.events.map((data, i) => {
                if (i >= 2) {
                  return false;
                }
                return (
                  <EventsCheckout
                    key={i}
                    dataCheckout={{
                      title: data.title,
                      price: data.price,
                      discount: data.discount,
                      imageUrl: data.imageUrl,
                      soldOut: `${2} Ticket`,
                    }}
                  />
                );
              })}
            </Stack>
            <Stack className="border-b-2">
              <h2 className="mb-3">Books</h2>
              {DataProduct.books.map((data, i) => {
                if (i >= 2) {
                  return false;
                }
                return (
                  <Checkout
                    key={i}
                    data={{
                      title: data.title,
                      price: data.price,
                      discount: data.discount,
                      imageUrl: data.imageUrl,
                      soldOut: `${2} Pcs`,
                    }}
                  />
                );
              })}
            </Stack>
            <Stack className="border-b-2">
              <h2 className="mb-3">T-Shirts</h2>
              {DataProduct.tshirts.map((data, i) => {
                if (i >= 2) {
                  return false;
                }
                return (
                  <Checkout
                    key={i}
                    data={{
                      title: data.title,
                      price: data.price,
                      discount: data.discount,
                      imageUrl: data.imageUrl,
                      soldOut: `${2} Pcs`,
                    }}
                  />
                );
              })}
            </Stack>
          </Stack>
        </Stack>
        <CardTwo />
      </Stack>
    </main>
  );
}
