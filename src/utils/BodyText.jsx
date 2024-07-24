import { Grid, Typography } from "@mui/material";
import React from "react";
import {
  Colors,
  FontFamily,
  FontSize,
  FontWeight,
} from "../constants/GlobalStyles";

const BodyText = ({ content }) => {
  return (
    <Grid display={"flex"} flexDirection={"column"} gap={1}>
      <Typography
        sx={{
          fontSize: FontSize.regular,
          textTransform: "capitalize",
          fontWeight: FontWeight.regular,
          fontFamily: FontFamily.secondary,
          color: Colors.white,
        }}
      >
        {content}
      </Typography>
    </Grid>
  );
};

export default BodyText;
