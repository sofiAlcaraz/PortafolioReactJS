import { Box } from "@mui/material";

const VideoAvatar = ({ mode }) => {
  return (
    <Box
      key={mode} //para que se reinicio cuando cambie el modo
      component="video"
      autoPlay
      loop
      muted
      playsInline
      sx={{
        maxWidth: "10rem",
        maxHeight: "10rem",
        objectFit: "cover", // rellena el contenedor
        margin: "1rem",
      }}
    >
      <source
        src={mode ? "/videAvatarDarkTheme.mp4" : "/videoAvatar.mp4"}
        type="video/mp4"
      />
      Tu navegador no soporta el video.
    </Box>
  );
};
export default VideoAvatar;
