import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import {
  Colors,
  FontFamily,
  FontSize,
  FontWeight,
} from "../constants/GlobalStyles";
import ContainedButton from "./Buttons/ContainedButton";
import ResumePDF from "../assets/resume.pdf";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = ResumePDF;
    link.download = "Adarsh_Gadekar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Grid
      minHeight={"80vh"}
      width={"80%"}
      display={"flex"}
      flexDirection={"column"}
      gap={4}
      py={4}
      pl={4}
    >
      <Grid display={"flex"} height={"100%"} alignItems={"center"}>
        <Typography
          flex={2}
          sx={{
            fontSize: { lg: FontSize.lesserCrazy, xl: FontSize.crazyLarge },
            textTransform: "capitalize",
            fontWeight: FontWeight.regular,
            fontFamily: FontFamily.secondary,
            color: Colors.white,
          }}
        >
          Adarsh Gadekar
        </Typography>
        <Grid
          flex={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <ContainedButton onClick={handleDownload} title={"download resume"} />
        </Grid>
      </Grid>
      <Grid display={"flex"}>
        <Grid flex={1.5}>
          <Typography
            sx={{
              fontSize: FontSize.large,
              textTransform: "capitalize",
              fontWeight: FontWeight.large,
              fontFamily: FontFamily.secondary,
              color: Colors.white,
            }}
          >
            Let's Talk
          </Typography>
          <a
            style={{
              FontFamily: FontFamily.secondary,
              textDecoration: "none",
              color: Colors.yellow,
            }}
            href="mailto:adarshgadekar@gmail.com"
          >
            adarshgadekar@gmail.com
          </a>
        </Grid>
        <Grid flex={3.5} mr={6}>
          <Typography
            sx={{
              fontSize: FontSize.regular,
              textTransform: "capitalize",
              fontWeight: FontWeight.regular,
              fontFamily: FontFamily.secondary,
              color: Colors.white,
            }}
          >
            I'm a Detail-oriented Data Scientist and Python Developer with
            around 1.6 years experience and expertise in advanced Python
            concepts and machine learning techniques. Seeking opportunities to
            apply my skills in data analysis, predictive modelling, and software
            development to contribute to impactful projects.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero;
