import { Grid } from "@mui/material";
import React from "react";
import Title from "../utils/Title";
import BodyText from "../utils/BodyText";
import WorkDetails from "../constants/Data/Work.json";

const Work = () => {
  return (
    <Grid
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      width={"80%"}
      minHeight={"50vh"}
      justifyContent={"center"}
    >
      <Title title={"Work Experience"} />
      <BodyText content={WorkDetails.content} />
    </Grid>
  );
};

export default Work;
