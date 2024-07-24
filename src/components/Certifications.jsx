import { Grid } from "@mui/material";
import React from "react";
import Title from "../utils/Title";
import Certificates from "../constants/Data/Certifications.json";
import CertificationText from "../utils/CertificationText";

const Certifications = () => {
  return (
    <Grid
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      width={"80%"}
      minHeight={"50vh"}
      justifyContent={"center"}
    >
      <Title title={"Certifications"} />
      <CertificationText content={Certificates} />
    </Grid>
  );
};

export default Certifications;
