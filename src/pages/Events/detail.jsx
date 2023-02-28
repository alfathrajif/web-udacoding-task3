import { Stack } from "@mui/material";
import React from "react";
import LabTabs from "../../components/LabTabs";
import CardOne from "../../components/Purchase/CardOne";
import { TabTitle } from "../../utils/GeneralFunctions";
import TShirtsCard from "../../components/Cards/TShirtsCard";
import DataProduct from "../../data/product.json";

export default function detail() {
  TabTitle("Events Detail");
  return (
    <main className="min-h-[calc(100vh-70px)] py-8">
      <div className="w-10/12 mx-auto gap-5">
        <Stack
          direction="row"
          justifyContent="space-between"
          className="w-full"
          mb={6}
        >
          <div className="w-full flex gap-6">
            <img
              src="/assets/img/events/image (1).jpg"
              alt=""
              className="w-full h-72 object-cover rounded"
            />
            <div className="w-full">
              <h5 className="text-2xl font-bold mb-1 uppercase">
                Training Android Kotlin Basic
              </h5>
              <div className="text-gray-500 mb-2 text-sm">
                <p>17 NOVEMBER 2021 1:00 SAING TO</p>
                <p>26 NOVEMBER 2021 5:00 SORE</p>
              </div>
              <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                <img
                  src="/assets/img/events/image (1).jpg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold text-lg">Raihen Alvaro</span>
              </Stack>
              <ul className="text-xs mb-2 flex flex-col gap-1">
                <li>
                  <b className="text-[#219653]">Type</b> : Offline
                </li>
                <li>
                  <b className="text-[#219653]">Kelas</b> : Umum
                </li>
              </ul>
              <div className="text-4xl font-bold mb-3">Rp75.000</div>
              <div className="text-sm">
                <del className="text-gray-400">Rp.150.000</del> |{" "}
                <span className="text-[#219653] font-medium">Diskon 50%</span>
              </div>
              <div className="text-sm">
                <span className="text-[#219653] font-medium">Reward</span>
                <p className="font-medium">Mendapatkan 10 Point</p>
              </div>
            </div>
          </div>
          <CardOne />
        </Stack>
        <Stack justifyContent="center" direction="row" mb={6}>
          <LabTabs />
        </Stack>
        <Stack>
          <div className="text-center mb-4">
            <h3 className="font-bold text-4xl mb-1">OTHER RECOMMENDATION</h3>
            <p className="max-w-lg mx-auto">
              Consequat accumsan integer eget ipsum. Vitae in volutpat sed
              risus, sapien odio tellus. Dis risus integer elit.
            </p>
          </div>
          <Stack direction="row" mt={2} spacing={5}>
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
          </Stack>
        </Stack>
      </div>
    </main>
  );
}
