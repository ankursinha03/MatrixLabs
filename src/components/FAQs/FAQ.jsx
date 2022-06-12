import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "./Card";
import styles from "./FAQs.module.css";

const FAQs = () => {
  const cardData = [
    {
      question: "What is life?",
      answer: "Idk bro its just life",
    },
    {
      question: "What is sad life but this is a very long question?",
      answer:
        "Idk bro its just life but this is also a very very very long answer",
    },
    {
      question: "What is sad life but this is a very long question?",
      answer:
        "Idk bro its just life but this is also a very very very long answer",
    },
    {
      question: "What is life?",
      answer: "Idk bro its just life",
    },
  ];
  return (
    <Container
      maxWidth="xl"
      sx={{
        my: "5rem",
      }}
    >
      <span id="team" />
      <Box
        sx={{
          width: "100%",
          height: "auto",
          my: 3,
          mx: 3,
          px: { xs: "0rem", sm: "3rem" },
          color: "white",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Montserrat",
            fontSize: { xs: "1.8rem", sm: "2.2rem" },
            fontWeight: 700,
          }}
        >
          FREQUENTLY ASKED
        </Typography>
        <Typography
          variant="h3"
          className={styles.borderText}
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 700,
            fontSize: { xs: "2.5rem", sm: "3rem" },
            color: "transparent",
          }}
        >
          QUESTIONS
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "evenly" },
          mt: { xs: "4rem", md: 2 },
          width: "100%",
        }}
      >
        {cardData.map((cardData) => {
          return <Card data={cardData} />;
        })}
      </Box>
    </Container>
  );
};

export default FAQs;
