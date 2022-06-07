import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import coinbag from "../../assets/coinbag.png";
import ethereum from "../../assets/ethereum.png";
import calculator from "../../assets/calculator.png";
import etherWallet from "../../assets/ether-wallet.png";
import styles from "./ServicesProvided.module.css";

const ServicesProvided = () => {
  const cardData = [
    { image: coinbag, header: "EARN", text: "ugiat nulla Tech pariatum" },
    { image: ethereum, header: "TRACK", text: "Lorem ipsum dolor sit amet" },
    {
      image: calculator,
      header: "CALCULATOR",
      text: "Lorem ipsum dolor sit amet",
    },
    {
      image: etherWallet,
      header: "SEND KRYPT",
      text: "Lorem ipsum dolor sit amet",
    },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{
        my: "5rem",
      }}
    >
      <span id="services" />
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
          SERVICES PROVIDED BY
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
          MATRIX LABS
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
        {cardData.map((card) => {
          return (
            <Box
              key={card.header}
              sx={{
                height: "auto",
                width: "100%", 
                maxWidth: { xs: "90%", sm: "80%", md: "max( 40% , 475px)" },
                mx: { xs: "auto", md: 3 },
                display: "flex",
                flexDirection: "row",
                flexWrap: { xs: "wrap", sm: "nowrap" },
                justifyContent: "space-around",
                backgroundColor: "#3c3c3c80",
                borderRadius: "20px",
                px: { xs: "auto", sm: 3 },
                py: { xs: 2 },
                my: 3,
              }}
            >
              <Box
                sx={{
                  height: "auto",
                  width: "100%",
                  maxWidth: "125px",
                }}
                component="img"
                alt={card.header}
                src={card.image}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    fontSize: { xs: "1rem", sm: "1.4rem" },
                    color: "#0ed8a7",
                  }}
                >
                  {card.header}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    fontSize: { xs: "0.9rem", sm: "1.3rem" },
                    color: "white",
                  }}
                >
                  {card.text}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default ServicesProvided;
