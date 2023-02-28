import { Rating, Stack, styled } from "@mui/material";
import React from "react";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#fb8500",
  },
});

export default function Comment() {
  return (
    <Stack direction="row" spacing={2}>
      <Stack direction="row" spacing={1} className="w-full max-w-fit">
        <img
          src="/assets/img/unsplash_B2zWzmlyBuk.png"
          alt=""
          className="w-16 object-cover h-16 rounded-md"
        />
        <Stack>
          <div className="font-medium">Wisnu Satria</div>
          <StyledRating
            name="customized-color"
            value={5}
            readOnly
            size="small"
          />
          <div className="text-gray-500 text-xs mt-1">1 hari lalu</div>
        </Stack>
      </Stack>
      <div className="w-full">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
        atque laboriosam eos cum autem ipsam provident consequuntur saepe
        mollitia aperiam, necessitatibus est odio sint maxime ea odit voluptas
        unde! Excepturi.
      </div>
    </Stack>
  );
}
