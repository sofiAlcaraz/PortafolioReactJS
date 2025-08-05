import { Box, Button, IconButton, Typography } from "@mui/material";
import NavBar from "../components/navBar";
import Presentation from "../components/Presentation";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Home = () => {
  const onClickUp = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // hace que el scroll sea animado
    });
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "#3c72b6", // fondo general
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 0rem 2rem 0rem",
      }}
    >
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#f0f0f0",
          borderRadius: 4,
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", // efecto flotante
          maxWidth: "90%",
          width: "90%",
          height: "90%",
          textAlign: "center",
          overflowY: "auto",
        }}
      >
        <NavBar />
        <Presentation />
        <Projects />
        <Skills />
        <Contact />
        <IconButton
          aria-label="delete"
          color="primary"
          onClick={(e) => onClickUp(e)}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
export default Home;
