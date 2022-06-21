import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "./Card";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import styles from "./FAQs.module.css";

const FAQs = () => {
  const cardData = [
    {
      question: "Do you provide custom smart contracts?",
      answer: "Idk bro its just life",
    },
    {
      question: "How long is the after sales service?",
      answer:
        "Idk bro its just life but this is also a very very very long answer",
    },
    {
      question: "Do you provide hosting as well?",
      answer:
        "Idk bro its just life but this is also a very very very long answer",
    },
    {
      question: "Do you provide presale support?",
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
          height: "auto",
          width: "100%",
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
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "flex-start",
          mt: { xs: "4rem", md: 2 },
        }}
      >
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: { xs: "4rem", md: 2 },
            width: { xs: "90%", md: "100%" },
            height: "100%",
            px: { xs: "1rem", sm: "3rem" },
            pt: { xs: "2rem", sm: "1rem" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Montserrat",
              color: "white",
              fontSize: { xs: "1.8rem", sm: "2.2rem" },
              fontWeight: 700,
              textAlign: "left",
            }}
          >
            HAVE ANY QUESTIONS?
            <br />
            CONTACT US 👇
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: { xs: "1rem", sm: "1.2rem" },
              color: "white",
              mt: { xs: "2rem", md: "3rem" },
            }}
          >
            Don&rsquo;t hesitate to ask any questions, we will try our best to
            solve any kind of query you have.{" "}
          </Typography>
          <Box
            sx={{
              display: "flex",
              mt: { xs: "2rem", md: "3rem" },
              gap: { xs: "0.5rem", sm: "1rem" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "40px",
                height: "40px",
              }}
              component="img"
              src={instagram}
              alt="instagram"
            ></Box>
            <Box
              sx={{
                display: "flex",
                width: "40px",
                height: "40px",
              }}
              component="img"
              src={facebook}
              alt="facebook"
            ></Box>
            <Box
              sx={{
                display: "flex",
                width: "40px",
                height: "40px",
              }}
              component="img"
              src={twitter}
              alt="twitter"
            ></Box>
          </Box>
          <Button
            sx={{
              mt: { xs: "2rem", md: "3rem" },
              ml: 1,
              backgroundColor: "#00D186",
              color: "black",
              display: "block",
              fontSize: { xs: "0.9rem", sm: "1.1rem" },
              fontWeight: 600,
              width: "100%",
              maxWidth: "350px",
              borderRadius: "50px",
              padding: { xs: "1px 0.5rem", sm: "3px 1rem" },
              "&:hover": {
                backgroundColor: "#00D186",
              },
            }}
          >
            CONTACT US
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default FAQs;
