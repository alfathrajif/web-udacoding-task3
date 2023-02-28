import { Button, Stack, styled } from "@mui/material";
import React from "react";
import { Checkout } from "./Checkout";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

const CheckButtton = styled(Button)(({ theme }) => ({
  width: "fit-content",
  textTransform: "none",
  color: "#333",
  fontFamily: "Poppins",
  borderColor: "rgb(206 212 218)",
  "&:hover": {
    borderColor: "rgb(206 212 218 / 50%)",
  },
}));

export const EventsCheckout = ({ dataCheckout }) => {
  return (
    <Stack mb={2.5}>
      <Checkout
        data={{
          title: dataCheckout.title,
          price: dataCheckout.price,
          discount: dataCheckout.discount,
          imageUrl: dataCheckout.imageUrl,
          soldOut: dataCheckout.soldOut,
        }}
      />
      <Stack direction="row" spacing={2}>
        <span className="font-medium">*Data Wajib Diisi</span>
        <Stack direction="row" spacing={1}>
          <CheckButtton
            variant="outlined"
            size="small"
            endIcon={<CheckRoundedIcon color="success" />}
          >
            Data 1
          </CheckButtton>
          <CheckButtton
            variant="outlined"
            size="small"
            endIcon={<WarningAmberRoundedIcon color="warning" />}
          >
            Data 2
          </CheckButtton>
        </Stack>
      </Stack>
    </Stack>
  );
};
