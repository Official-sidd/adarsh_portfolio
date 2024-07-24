import { Grid, Typography } from "@mui/material";
import React from "react";
import Title from "../utils/Title";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Colors,
  FontFamily,
  FontSize,
  FontWeight,
} from "../constants/GlobalStyles";

const Contact = () => {
  return (
    <Grid
      width={"80%"}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      minHeight={"30vh"}
      justifyContent={"center"}
    >
      <Title title={"Contact Me"} />
      <Grid display={"flex"} flexDirection={"column"} gap={2}>
        <Grid display={"flex"} gap={1}>
          <EmailIcon sx={{ color: Colors.white }} />
          <Typography
            sx={{
              fontSize: FontSize.regular,
              fontWeight: FontWeight.medium,
              fontFamily: FontFamily.secondary,
              color: Colors.white,
            }}
          >
            adarshgadekar@gmail.com
          </Typography>
        </Grid>
        <Grid display={"flex"} gap={1}>
          <PhoneIcon sx={{ color: Colors.white }} />
          <Typography
            sx={{
              fontSize: FontSize.regular,
              fontWeight: FontWeight.medium,
              fontFamily: FontFamily.secondary,
              color: Colors.white,
            }}
          >
            7350571904
          </Typography>
        </Grid>
        <Grid display={"flex"} gap={1}>
          <LinkedInIcon sx={{ color: Colors.white }} />
          <Typography
            sx={{
              fontSize: FontSize.regular,
              fontWeight: FontWeight.medium,
              fontFamily: FontFamily.secondary,
              color: Colors.white,
            }}
          >
            https://www.linkedin.com/in/adarsh-gadekar-b984b5263/
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
