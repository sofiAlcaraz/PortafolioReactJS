import { Box, SvgIcon, Typography } from "@mui/material";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaGit,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaLaravel,
  FaLinux,
  FaNode,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiDbeaver, SiMui, SiPostman } from "react-icons/si";
import { TbBrandPowershell } from "react-icons/tb";

const skillsList = [
  { id: 1, icon: <FaCss3Alt /> },
  { id: 1, icon: <FaPhp /> },
  { id: 1, icon: <FaHtml5 /> },
  { id: 1, icon: <FaReact /> },
  { id: 1, icon: <FaGit /> },
  { id: 1, icon: <FaPython /> },
  { id: 1, icon: <FaJsSquare /> },
  { id: 1, icon: <FaLaravel /> },
  { id: 1, icon: <BiLogoTypescript /> },
  { id: 1, icon: <DiMysql /> },
  { id: 1, icon: <RiNextjsLine /> },
  { id: 1, icon: <SiPostman /> },
  { id: 1, icon: <FaLinux /> },
  { id: 1, icon: <FaDocker /> },
  { id: 1, icon: <SiDbeaver /> },
  { id: 1, icon: <FaNode /> },
  { id: 1, icon: <FaAws /> },
  { id: 1, icon: <BiLogoPostgresql /> },
  { id: 1, icon: <TbBrandPowershell /> },
];

const Skills = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
      id="habilidades"
    >
      <Typography
        variant="h5"
        align="justify"
        sx={{ color: "#073954", marginBottom: 2, alignSelf: "flex-start" }}
      >
        Habilidades
      </Typography>
      <Box
        sx={{
          display: "flex",
          color: "#073954",
          gap: 2,
          maxWidth: "800px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {skillsList.map((skilItem, i) => (
          <Box sx={{ fontSize: 30 }} key={i}>
            {skilItem.icon}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default Skills;
