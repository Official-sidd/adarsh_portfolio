import { Grid, Typography } from "@mui/material";
import React from "react";
import {
  Colors,
  FontFamily,
  FontSize,
  FontWeight,
} from "../constants/GlobalStyles";

const Title = ({ title }) => {
  return (
    <Grid>
      <Typography
        sx={{
          fontSize: FontSize.xxlarge,
          textTransform: "capitalize",
          fontWeight: FontWeight.regular,
          fontFamily: FontFamily.primary,
          color: Colors.yellow,
        }}
      >
        {title}
      </Typography>
    </Grid>
  );
};

export default Title;
