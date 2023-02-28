import { Checkbox, FormControlLabel, Stack } from "@mui/material";
import React from "react";
import { CardTwo } from "../../components/Purchase/CardTwo";
import DataProduct from "../../data/product.json";
import { Checkout } from "../../components/Cards/Checkout";
import { DeleteButton } from "../../components/Purchase/Button";

export default function CartCheck() {
  return (
    <main className="min-h-[calc(100vh-70px)] py-8">
      <Stack className="w-10/12 mx-auto" direction="row" spacing={5}>
        <Stack className="w-full">
          <h5 className="text-lg font-bold mb-1">Cart</h5>
          <Stack direction="row" justifyContent="space-between">
            <FormControlLabel
              control={<Checkbox color="success" />}
              label="Pilih Semua"
            />
            <DeleteButton variant="text" size="small" disableRipple>
              Hapus
            </DeleteButton>
          </Stack>
          <Stack spacing={3}>
            <Stack className="border-b-2">
              <h2 className="mb-3">
                <FormControlLabel
                  sx={{ display: "block", marginTop: "10px" }}
                  control={<Checkbox color="success" />}
                  label="Events"
                />
              </h2>
              {DataProduct.events.map((data, i) => {
                if (i >= 2) {
                  return false;
                }
                return (
                  <div>
                    <FormControlLabel
                      sx={{
                        display: "block",
                        marginTop: "10px",
                        float: "left",
                      }}
                      control={<Checkbox color="success" />}
                    />
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
                  </div>
                );
              })}
            </Stack>
            <Stack className="border-b-2">
              <h2 className="mb-3">
                <FormControlLabel
                  sx={{ display: "block", marginTop: "10px", float: "left" }}
                  control={<Checkbox color="success" />}
                  label="Books"
                />
              </h2>

              {DataProduct.books.map((data, i) => {
                if (i >= 2) {
                  return false;
                }
                return (
                  <div>
                    <FormControlLabel
                      sx={{
                        display: "block",
                        marginTop: "10px",
                        float: "left",
                      }}
                      control={<Checkbox color="success" />}
                    />
                    <Checkout
                      key={i}
                      data={{
                        title: data.title,
                        price: data.price,
                        discount: data.discount,
                        imageUrl: data.imageUrl,
                      }}
                    />
                  </div>
                );
              })}
            </Stack>
            <Stack className="border-b-2">
              <h2 className="mb-3">
                <FormControlLabel
                  sx={{ display: "block", marginTop: "10px" }}
                  control={<Checkbox color="success" />}
                  label="T-Shirts"
                />
              </h2>
              {DataProduct.tshirts.map((data, i) => {
                if (i >= 2) {
                  return false;
                }
                return (
                  <div>
                    <FormControlLabel
                      sx={{
                        display: "block",
                        marginTop: "10px",
                        float: "left",
                      }}
                      control={<Checkbox color="success" />}
                    />
                    <Checkout
                      key={i}
                      data={{
                        title: data.title,
                        price: data.price,
                        discount: data.discount,
                        imageUrl: data.imageUrl,
                      }}
                    />
                  </div>
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
