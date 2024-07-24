import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Colors, FontFamily, FontSize } from "../constants/GlobalStyles";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  const linkStyle = (section) => ({
    fontSize: FontSize.large,
    fontFamily: FontFamily.primary,
    color: activeSection === section ? Colors.yellow : Colors.grey,
    textDecoration: "none",
    cursor: "pointer",
  });

  return (
    <Grid
      height={"8vh"}
      justifyContent={"end"}
      alignItems={"center"}
      display={"flex"}
      gap={4}
      px={8}
      sx={{ backgroundColor: Colors.white }}
      borderBottom={`2px solid ${Colors.yellow}`}
    >
      <Typography
        sx={linkStyle("home")}
        component={"a"}
        href="#hero"
        onClick={() => handleSetActive("home")}
      >
        Home
      </Typography>
      <Typography
        sx={linkStyle("skills")}
        component={"a"}
        href="#skills"
        onClick={() => handleSetActive("skills")}
      >
        Skills
      </Typography>
      <Typography
        sx={linkStyle("projects")}
        component={"a"}
        href="#projects"
        onClick={() => handleSetActive("projects")}
      >
        Projects
      </Typography>
      <Typography
        sx={linkStyle("work")}
        component={"a"}
        href="#work"
        onClick={() => handleSetActive("work")}
      >
        Work
      </Typography>
      <Typography
        sx={linkStyle("contact")}
        component={"a"}
        href="#contact"
        onClick={() => handleSetActive("contact")}
      >
        Contact
      </Typography>
    </Grid>
  );
};

export default Header;
