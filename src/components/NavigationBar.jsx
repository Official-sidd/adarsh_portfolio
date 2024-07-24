// Import necessary modules
import React from "react";
import { Tabs, Tab, styled } from "@mui/material";
import { useState } from "react";
import { Colors } from "../constants/GlobalStyles";

const StyledTabs = styled(Tabs)(({ theme }) => ({
  width : "fit-content",
  backgroundColor: Colors.white,
  borderRadius: "25px",
  padding: "8px 24px",
  boxShadow: "0px 10px 20px -10px rgba(0, 0, 0, 0.75)",
}));

const StyledTab = styled(Tab)(() => ({
  borderRadius: "25px",
  color: Colors.grey,
  "&.Mui-selected": {
    backgroundColor: Colors.yellow,
    color: Colors.white,
  },
}));

const NavigationBar = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <StyledTabs
      value={selectedTab}
      onChange={handleChange}
      centered
      TabIndicatorProps={{ style: { display: "none" } }}
    >
      <StyledTab label="Home" href="#home"/>
      <StyledTab label="Skills" href="#skills"/>
      <StyledTab label="Projects" href="#projects"/> 
      <StyledTab label="Work"  href="#work"/>
      <StyledTab label="Contact"  href="#contact"/>
    </StyledTabs>
  );
};

export default NavigationBar;
