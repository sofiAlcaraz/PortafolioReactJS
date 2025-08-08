import { Box, Button, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import VideoAvatar from "./VideoAvatar";

const Contact = ({ mode }) => {
  return (
    <Box sx={{ padding: 2 }} id="contacto">
      <Typography variant="h5" align="justify" sx={{ mb: 2 }}>
        Contacto
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
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
        <VideoAvatar mode={mode} />
      </Box>
    </Box>
  );
};
export default Contact;
