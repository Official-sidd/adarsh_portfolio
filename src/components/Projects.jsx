import { Button, Grid } from "@mui/material";
import React from "react";
import Title from "../utils/Title";
import BodyText from "../utils/BodyText";
import ProjectsData from "../constants/Data/Projects.json";
import { Colors, FontFamily } from "../constants/GlobalStyles";

const Projects = () => {
  const handleClick = () => {
    window.open("https://github.com/AdarshGadekar", "_blank");
  };

  return (
    <Grid
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      width={"80%"}
      minHeight={"50vh"}
      justifyContent={"center"}
    >
      <Title title={"Projects"} />
      {ProjectsData.projects.map((project) => {
        return <BodyText content={project.name} />;
      })}
      <Grid display={"flex"} justifyContent={"end"}>
        <Button
          variant="outlined"
          sx={{
            borderColor: Colors.yellow,
            color: Colors.yellow,
            fontFamily: FontFamily.primary,
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: Colors.yellow,
              color: Colors.grey,
              borderColor: "transparent",
            },
          }}
          onClick={handleClick}
        >
          View on Github
        </Button>
      </Grid>
    </Grid>
  );
};

export default Projects;
