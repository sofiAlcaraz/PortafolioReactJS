import { Box, Button, Typography } from "@mui/material";

const Presentation = () => {
  return (
    <Box
      sx={{
        padding: 4,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
        flexWrap: "wrap",
      }}
      id="presentacion"
    >
      <Box
        component="img"
        src={"/yo.jpg"}
        alt="Logo"
        sx={{
          width: "250px",
          height: "250px",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Typography variant="h3" align="justify">
          Hola, soy sofi
        </Typography>
        <Typography variant="h4" align="justify">
          Desarrolladora Full Stack
        </Typography>
        <Typography variant="h6" align="justify">
          Trabajo con tecnologías como Python, Java, Node.js, React y PHP
          (Symfony). Tengo experiencia en mantenimiento, mejoras y desarrollo de
          funcionalidades, y en el manejo de bases de datos SQL. Continúo
          formándome para fortalecer mis bases técnicas.
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{ alignSelf: "flex-start", mt: 1 }}
          component="a"
          href="/AlcarazCv.pdf"
          download
        >
          Descargar CV
        </Button>
      </Box>
    </Box>
  );
};
export default Presentation;
