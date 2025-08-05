import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const cards = [
  {
    id: 1,
    title: "Plants",
    description: "Plants are essential for all life.",
  },
  {
    id: 2,
    title: "Animals",
    description: "Animals are a part of nature.",
  },
  {
    id: 3,
    title: "Humans",
    description: "Humans depend on plants and animals for survival.",
  },
  {
    id: 4,
    title: "Humans",
    description: "Humans depend on plants and animals for survival.",
  },
  {
    id: 5,
    title: "Humans",
    description: "Humans depend on plants and animals for survival.",
  },
];

const Projects = () => {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 4,
      }}
      id="proyectos"
    >
      <Typography variant="h5" align="justify" sx={{ color: "#073954", mb: 2 }}>
        Proyectos
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
          gap: 2,
        }}
      >
        {cards.map((card, index) => (
          <Card>
            <CardActionArea
              onClick={() => setSelectedCard(index)}
              data-active={selectedCard === index ? "" : undefined}
              sx={{
                height: "100%",
                "&[data-active]": {
                  backgroundColor: "action.selected",
                  "&:hover": {
                    backgroundColor: "action.selectedHover",
                  },
                },
              }}
            >
              <CardContent sx={{ height: "100%" }}>
                <Typography variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
export default Projects;
