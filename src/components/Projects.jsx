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
    title: "TP Base de Datos",
    description:
      "Se utilizan las herramientas vistas en clase como postgress SQL, NoSQL, triggers, stored procedures, JSON, entre otras.",
    url: "https://gitlab.com/sofiialcaraz16/aguirre-alcaraz-mai-mino-tp",
  },
  {
    id: 2,
    title: "Base de Datos(SQL)",
    description: "Ejercicios Stored Procedures y Funciones en SQL",
    url: "https://gitlab.com/sofiialcaraz16/tareabd/",
  },
  /*{
    id: 3,
    title: "Arboles (JAVA)",
    description:
      "Este tp lo haciamos entre dos personas pero eclipse era muy pesado para la computadora que tenia en ese mometno asi que iba ayudando por meet",
    url: "https://gitlab.com/ajmarcos81/arboles_parcial/",
  },*/
  {
    id: 4,
    title: "Centro de vacunacion (JAVA)",
    description:
      "Este Tp incluyó: diseño, especificación de los TAD, diagrama de clases, interfaz e implementación",
    url: "https://gitlab.com/ajmarcos81/centrovacunacion/",
  },
  {
    id: 5,
    title: "Bidi de Ticmas (ReactJs-PHP-Laravel-MySQL-Reactadmin)",
    description:
      "Proyecto de la empresa Ticmas en el que participé por dos años y medio como FullStack",
    url: "https://www.bidi.la/home",
  },
  {
    id: 6,
    title: "Portafolio (ReactJs)",
    description: "Es el portafolio en el que estas :)",
    url: "https://github.com/sofiAlcaraz/PortafolioReactJS",
  },
  {
    id: 7,
    title: "TP Organización del Computador (Assembler)",
    description: "Implementación de una calculadora en Assembler",
    url: "https://github.com/sofiAlcaraz/Orga/blob/main/tp.asm",
  },
  {
    id: 8,
    title: "Introduccion a la Programacion (Python y PyGame)",
    description:
      "Proyecto en el que teniamos que completar un juego en Python que utilizaba la libreria Pygame",
    url: "https://github.com/sofiAlcaraz/Introduccion-a-Programacion", //modificar
  },
  {
    id: 9,
    title: "Anotador de Tareas",
    description: "Anotador de tareas simple, dropeable",
    url: "https://github.com/sofiAlcaraz/AnotadorDeTareas/blob/master/image.png",
  },
  {
    id: 10,
    title: "Tp Organización del Computador (Assembler y C)",
    description:
      "Trabajo de manejo de imagenes con C y Assembler (instrucciones MMX)",
    url: "https://github.com/sofiAlcaraz/OC2-TP2-2022",
  },
  {
    id: 11,
    title: "Tp Proyecto Profesional I (JS, AWS,React, CSS, HTML)",
    description: "Inteligencia Artificial, Machine Learning, WBS",
    url: "https://github.com/sofiAlcaraz/pp1-grupo11",
  },
  {
    id: 12,
    title: "Portafolio (NextJS,Ts, Vite, MUI, Vercel)",
    description: "Portafolio subio a Vercel(Link en readme)",
    url: "https://github.com/sofiAlcaraz/MyPortfolio",
  },
  {
    id: 13,
    title: "TP Semaforos (Assembler y C)",
    description: "Ejercicio de Semaforos en Assembler y C",
    url: "https://github.com/sofiAlcaraz/Semaforos",
  },
  {
    id: 14,
    title: "Ejercicos de semaforos y Hilos (Assembler y C)",
    description: "Ejercicio de Semaforos en Assembler y C ",
    url: "https://https://github.com/sofiAlcaraz/SistemasOperativos.com/sofiAlcaraz/Semaforos",
  },
  {
    id: 15,
    title: "TP Kruskal",
    description: "Diferentes implementaciones del algoritmo de Kruskal ",
    url: "https://drive.google.com/file/d/1uU1G-1OL0g-Sn1ObmlVvOIeGvX_xLB1R/view?usp=sharing",
  },
  {
    id: 16,
    title: "TP Juego tipo mario bros(Java)",
    description: "Juego tipo mario bross",
    url: "https://gitlab.com/sofiialcaraz16/super-elizabeth-sis#",
  },
  {
    id: 17,
    title: "TP Juego similar a Frogger (Java)",
    description: "En este juego se debe cruzar la calle sin ser atropellado ",
    url: "https://gitlab.com/jossevillacorta/alcaraz-pagano-villacorta-tp-p1",
  },
  {
    id: 17,
    title: "TP Redes con Packet Tracer",
    description: "Diseñar un sistema de red logico para el enunciado dado",
    url: "https://gitlab.com/sofiialcaraz16/tp-redes/-/blob/main/tp_redes.pdf",
  },
];

const Projects = () => {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
      id="proyectos"
    >
      <Typography
        variant="h5"
        align="justify"
        sx={{ color: "#073954", mb: 2, alignSelf: "flex-start" }}
      >
        Proyectos
      </Typography>
      <Box
        sx={{
          maxWidth: "80%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
          gap: 2,
        }}
      >
        {cards.map((card, index) => (
          <Card key={index}>
            <CardActionArea
              onClick={() => window.open(card.url, "_blank")}
              onMouseEnter={() => setSelectedCard(index)}
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
                <Typography variant="h6" component="div">
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
