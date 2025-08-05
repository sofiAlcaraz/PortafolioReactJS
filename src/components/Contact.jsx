import { Box, Button, Link, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <Box sx={{ padding: 2 }} id="contacto">
      <Typography variant="h5" align="justify" sx={{ color: "#073954", mb: 2 }}>
        Contacto
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Button
          variant="text"
          size="small"
          href="mailto:sofiialcaraz16@gmail.com"
          startIcon={<EmailIcon />}
        >
          sofiialcaraz16@gmail.com
        </Button>
        <Button
          variant="text"
          size="small"
          href="https://www.google.com/maps?q=-34.6037,-58.3816"
          startIcon={<LocationOnIcon />}
        >
          Buenos Aires, Argentina
        </Button>
      </Box>
    </Box>
  );
};
export default Contact;
