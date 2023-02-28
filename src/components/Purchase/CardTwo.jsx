import React from "react";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Box, Stack, styled } from "@mui/material";

import { ButtonIconCart, ButtonLoginEntry } from "./Button";

export const CouponButton = styled(ButtonIconCart)({
  color: "#333",
});

export const CardTwo = () => {
  return (
    <Stack className="w-full max-w-xs">
      <Box className="border border-b-0 p-2 rounded">
        <CouponButton
          sx={{ justifyContent: "space-between", height: 50 }}
          variant="outlined"
          size="large"
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <ConfirmationNumberOutlinedIcon color="success" />
            <span className="font-semibold">Kupon</span>
          </Stack>
          <ArrowForwardIosRoundedIcon sx={{ fontSize: 20 }} />
        </CouponButton>
      </Box>
      <Box className="border p-2 px-3">
        <h2 className="font-bold mb-1">Belanja Saya</h2>
        <p>Total Belanja ({5} barang)</p>
        <table className="w-full">
          <tr>
            <td className="w-44">Total Harga:</td>
            <td className="text-right">Rp 1.800.000</td>
          </tr>
          <tr>
            <td className="w-44">Total Diskon:</td>
            <td className="text-right">Rp 900.000</td>
          </tr>
          <tr>
            <td className="w-44">Potongan:</td>
            <td className="text-right">Rp 150.000</td>
          </tr>
          <tr className="border-b-2">
            <td colspan="2" className="py-1"></td>
          </tr>
          <tr>
            <td className="w-44 py-2">Total:</td>
            <td className="text-right font-semibold text-xl text-[#219653]">
              Rp 750.000
            </td>
          </tr>
        </table>
        <ButtonLoginEntry variant="contained" size="large" disableElevation>
          Beli Sekarang
        </ButtonLoginEntry>
      </Box>
    </Stack>
  );
};
