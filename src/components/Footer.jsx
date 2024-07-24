import { Grid, Typography } from "@mui/material";
import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import {
  Colors,
  FontFamily,
  FontSize,
  FontWeight,
} from "../constants/GlobalStyles";

const Footer = () => {
  return (
    <Grid
      display={"flex"}
      sx={{ backgroundColor: Colors.white }}
      width={"100%"}
      px={12}
      py={4}
      gap={1}
    >
      <CopyrightIcon sx={{ color: Colors.grey }} />
      <Typography
        sx={{
          fontSize: FontSize.regular,
          textTransform: "capitalize",
          fontWeight: FontWeight.medium,
          fontFamily: FontFamily.primary,
          color: Colors.grey,
        }}
      >
        Adarsh Gadekar 2024
      </Typography>
    </Grid>
  );
};

export default Footer;
