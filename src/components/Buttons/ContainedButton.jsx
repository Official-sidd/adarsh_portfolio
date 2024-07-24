import { Button } from "@mui/material";
import React from "react";
import { Colors, FontFamily, FontWeight } from "../../constants/GlobalStyles";

const ContainedButton = ({ title, styles , onClick }) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: Colors.yellow,
        fontFamily: FontFamily.primary,
        textTransform: "capitalize",
        color: Colors.grey,
        "&:hover": {
          backgroundColor: Colors.white,
          color: Colors.yellow,
        },
        ...styles,
      }}
      onClick={onClick ?? onClick}
    >
      {title}
    </Button>
  );
};

export default ContainedButton;
