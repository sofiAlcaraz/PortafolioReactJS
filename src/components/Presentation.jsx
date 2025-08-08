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
          Soy estudiante de la carrera de Licenciatura en Sistemas. Me apasiona
          el desarrollo web y disfruto creando aplicaciones que mejoren la
          experiencia del usuario. Aqui te cuento un poco sobre mi trayectoria y
          habilidades.
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
