import { Fab, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Colors, FontFamily } from "./constants/GlobalStyles";
import Hero from "./components/Hero";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { useEffect, useState } from "react";
import Certifications from "./components/Certifications";
import NavigationBar from "./components/NavigationBar";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Header from "./components/Header";

function App() {
  const [showButton, setShowButton] = useState(true);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 120) {
  //       setShowButton(true);
  //     } else {
  //       setShowButton(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <Grid>
      <Grid
        width={"100%"}
        sx={{
          position: "fixed",
          top: 0,
          zIndex: 99999,
        }}
      >
        <Header />
      </Grid>
      <Grid
        sx={{
          backgroundColor: Colors.grey,
          minHeight: "100vh",
          px: 12,
          py: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
        }}
      >
        {/* <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            top: 60,
            zIndex: 99999,
          }} 
        >
          <NavigationBar />
        </Grid> */}
        <section
          id="hero"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            borderRight: `2px solid ${Colors.yellow}`,
          }}
        >
          <Hero />
        </section>
        <section
          id="skills"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Skills />
        </section>
        <section
          id="certifications"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Certifications />
        </section>
        <section
          id="projects"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Projects />
        </section>
        <section
          id="work"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Work />
        </section>
        <section
          id="contact"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Contact />
        </section>
        {showButton && (
          <Fab
            sx={{
              backgroundColor: Colors.yellow,
              color: Colors.white,
              position: "fixed",
              right: "5vw",
              bottom: "5vh",
              "&:hover": {
                backgroundColor: Colors.white,
                color: Colors.yellow,
              },
            }}
            aria-label="add"
            onClick={handleScrollToTop}
          >
            <KeyboardDoubleArrowUpIcon />
          </Fab>
        )}
      </Grid>
      <Footer />
    </Grid>
  );
}

export default App;
