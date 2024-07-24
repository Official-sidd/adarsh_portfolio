import { Grid, Typography } from "@mui/material";
import React from "react";
import {
  Colors,
  FontFamily,
  FontSize,
  FontWeight,
} from "../constants/GlobalStyles";

const CertificationText = ({ content }) => {
  return (
    <Grid display={"flex"} flexDirection={"column"} gap={1}>
      {content.map((certification) => {
        return (
          <Typography
            sx={{
              fontSize: FontSize.regular,
              textTransform: "capitalize",
              fontWeight: FontWeight.regular,
              fontFamily: FontFamily.secondary,
              color: Colors.white,
            }}
          >
            {certification}
          </Typography>
        );
      })}
    </Grid>
  );
};

export default CertificationText;
