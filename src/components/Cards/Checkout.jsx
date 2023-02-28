import React from "react";
import { ButtonLoginEntry } from "../Purchase/Button";
import { IconButton, Stack, styled } from "@mui/material";
import { useLocation } from "react-router-dom";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

export const DiscountButton = styled(ButtonLoginEntry)({
  color: "#fff",
  width: "fit-content",
  fontWeight: "300",
});

export const Checkout = ({ data }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Stack direction="row" spacing={2} mb={2.5}>
      <img
        src={data.imageUrl}
        alt=""
        className="min-w-[4rem] max-w-[4rem] object-cover h-16 rounded-md"
      />
      <div className="w-full">
        <h3 className="mb-2 text-lg">{data.title}</h3>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <DiscountButton variant="contained" size="small" disableElevation>
              {50}%
            </DiscountButton>
            <del className="text-gray-400">{data.discount}</del>
            <span>{data.price}</span>
          </Stack>
          <Stack>
            {(() => {
              if (path === "/cart-check") {
                return (
                  <Stack direction="row" alignItems="center">
                    <div className="border h-8 rounded border-[#219653] flex items-center w-fit">
                      <button className="h-full p-2 text-[#219653] pt-1.5 hover:bg-[#21965457]">
                        <ion-icon name="remove-outline"></ion-icon>
                      </button>
                      <input
                        type="text"
                        className="w-12 outline-none text-center"
                        value={0}
                      />
                      <button className="h-full p-2 text-[#219653] pt-1.5 hover:bg-[#21965457]">
                        <ion-icon name="add-outline"></ion-icon>
                      </button>
                    </div>
                    <IconButton size="small" color="error">
                      <DeleteOutlineRoundedIcon />
                    </IconButton>
                  </Stack>
                );
              }
              if (path === "/data-check") {
                return data.soldOut;
              }
            })()}
          </Stack>
        </Stack>
      </div>
    </Stack>
  );
};

Checkout.defaultProps = {
  data: {
    title: "title",
    price: "Rp. 220.000",
    discount: "Rp. 200.000",
    imgUrl: "#",
    soldOut: "kosong",
  },
};
