import { Grid } from "@mui/material";
import React from "react";
import Title from "../utils/Title";
import BodyText from "../utils/BodyText";
import SkillData from "../constants/Data/Skills.json";

const Skills = () => {
  return (
    <Grid
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      gap={2}
      width={"80%"}
      minHeight={"50vh"}
    >
      <Title title={"My Skills"} />
      <BodyText content={SkillData.skills} />
    </Grid>
  );
};

export default Skills;
