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
      }}
      id="presentacion"
    >
      <Box
        component="img"
        src={"/yo.jpg"}
        alt="Logo"
        sx={{
          width: "100px",
          height: "100px",
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
        <Typography variant="h4" align="justify" sx={{ color: "#073954" }}>
          Hola, soy sofi
        </Typography>
        <Typography variant="subtitle1" align="justify" sx={{ color: "#333" }}>
          Desarrolladora Full Stack
        </Typography>
        <Typography variant="body2" align="justify" sx={{ color: "#333" }}>
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
