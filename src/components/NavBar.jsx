import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Presentacion", "Proyectos", "Habilidades", "Contacto"];
function NavBar() {
  const onClick = (e, page) => {
    e.preventDefault();
    const element = document.getElementById(page.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <AppBar position="static" color="secondary" id="navbar" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
            }}
          >
            Sofi
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={(e) => onClick(e, page)}
                size="small"
                sx={{ color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
