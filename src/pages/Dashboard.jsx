import { Button, Stack, styled } from "@mui/material";
import React from "react";
import { ButtonIconCart } from "../components/Purchase/Button";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import DataProducts from "../data/product.json";
import EventCard from "../components/Cards/EventCard";

const NewButton = styled(Button)({
  fontFamily: "Poppins",
  minWidth: "fit-content",
  width: "100%",
  padding: "10px 40px",
  fontSize: "20px",
  textTransform: "none",
});

export const KategoriButton = styled(ButtonIconCart)({
  color: "#333",
  width: "fit-content",
});

export default function Dashboard() {
  return (
    <main className="min-h-[calc(100vh-70px)] py-8">
      <div className="w-10/12 mx-auto">
        <Stack mb={3}>
          <h2 className="text-2xl font-semibold mb-2">Dashboard</h2>
          <Stack direction="row" spacing={3}>
            <NewButton variant="contained">
              <Stack>
                <span>{58}</span>
                <span>T-Shirt</span>
              </Stack>
            </NewButton>
            <NewButton variant="contained" color="secondary">
              <Stack>
                <span>{12}</span>
                <span>Books</span>
              </Stack>
            </NewButton>
            <NewButton variant="contained" color="warning">
              <Stack>
                <span>{12}</span>
                <span>Event Berlangsung</span>
              </Stack>
            </NewButton>
            <NewButton variant="contained" color="error">
              <Stack>
                <span>{5}</span>
                <span>Event Selesai</span>
              </Stack>
            </NewButton>
            <NewButton variant="contained" color="success">
              <Stack>
                <span>{1000}</span>
                <span>Point Saya</span>
              </Stack>
            </NewButton>
          </Stack>
        </Stack>
        <Stack mb={3}>
          <h3 className="text-xl font-semibold mb-2">Events</h3>
          <KategoriButton
            variant="outlined"
            endIcon={<KeyboardArrowDownRoundedIcon />}
          >
            Kategori - All
          </KategoriButton>
        </Stack>
        <Stack direction="row" spacing={5} mb={5}>
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
        </Stack>
      </div>
    </main>
  );
}
