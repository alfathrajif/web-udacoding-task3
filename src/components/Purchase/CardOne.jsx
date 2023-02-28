import { Stack } from "@mui/material";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { ButtonIconCart, ButtonLoginEntry } from "./Button";

export default function CardOne() {
  return (
    <div className="w-full max-w-xs border rounded p-3 h-fit">
      <h5 className="font-medium mb-2">Jumlah Yang Diinginkan</h5>
      <div className="flex items-center gap-2">
        <div className="border rounded border-[#219653] flex items-center w-fit">
          <button className="h-full p-2 text-[#219653] pb-1 hover:bg-[#21965457]">
            <ion-icon name="remove-outline"></ion-icon>
          </button>
          <input
            type="text"
            className="w-12 outline-none text-center"
            value={0}
          />
          <button className="h-full p-2 text-[#219653] pb-1 hover:bg-[#21965457]">
            <ion-icon name="add-outline"></ion-icon>
          </button>
        </div>
        <span>Ticket: 123</span>
      </div>
      <div className="flex justify-end">
        <del className="text-gray-400">Rp300.000</del>
      </div>
      <div className="flex justify-between items-end mb-3">
        <span className="text-lg">Sub Total</span>
        <span className="text-2xl font-semibold">Rp150.000</span>
      </div>
      <Stack spacing={1}>
        <Link to="./">
          <ButtonLoginEntry
            variant="contained"
            size="large"
            disableElevation
            href="/event/detail"
          >
            Login to Participant!
          </ButtonLoginEntry>
        </Link>
        <Link to="./">
          <ButtonIconCart
            variant="outlined"
            size="large"
            disableElevation
            href="/event/detail"
            startIcon={<ShoppingCartOutlinedIcon />}
          >
            Masukan Keranjang
          </ButtonIconCart>
        </Link>
      </Stack>
    </div>
  );
}
