import { styled, Button } from "@mui/material";

export const ButtonIconCart = styled(Button)(({ theme }) => ({
  width: "100%",
  textTransform: "none",
  color: "#adb5bd",
  fontFamily: "Poppins",
  borderColor: "rgb(206 212 218)",
  "&:hover": {
    borderColor: "rgb(206 212 218 / 50%)",
  },
}));

export const ButtonLoginEntry = styled(Button)(({ theme }) => ({
  width: "100%",
  textTransform: "none",
  backgroundColor: "#219653",
  fontFamily: "Poppins",
  "&:hover": {
    backgroundColor: "#219653",
  },
}));

export const DeleteButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  color: theme.palette.error.main,
  fontFamily: "Poppins",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));
