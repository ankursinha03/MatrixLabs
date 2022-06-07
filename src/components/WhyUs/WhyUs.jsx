import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import blockchain from "../../assets/blockchain.png";
import medal from "../../assets/medal.png";
import ether from "../../assets/ether.png";
import contract from "../../assets/contract.png";
import styles from "./WhyUs.module.css";

const WhyUs = () => {
  const cardData = [
    { image: medal, text: "ugiat nulla Tech pariatum" },
    { image: contract, text: "Lorem ipsum dolor sit amet" },
    { image: ether, text: "Lorem ipsum dolor sit amet" },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{
        my: 5,
      }}
    >
      <span id="about" />
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
          WHY CHOOSE
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
          justifyContent: { xs: "center", md: "space-between" },
          mt: { xs: "4rem", md: 2 },
        }}
      >
        <Box
          sx={{
            height: "auto",
            width: "100%",
            maxWidth: { xs: "600px", md: "500px" },
            mx: "auto",
          }}
          component="img"
          alt="blockchain"
          src={blockchain}
        ></Box>
        <Box
          sx={{
            height: "auto",
            width: "100%",
            maxWidth: { xs: "85%", md: "43%" },
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            mt: { xs: "2rem", md: 0 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontFamily: "Poppins",
              fontSize: { xs: "1.1rem", sm: "1.3rem" },
              fontWeight: 500,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "wrap",
          width: "100%",
          mt: "4rem",
        }}
      >
        {cardData.map((data) => {
          return (
            <Box
              key={data.text}
              sx={{
                width: "100%",
                height: "100%",
                maxWidth: {xs:"200px", sm:"350px"},
                maxHeight: "250px",
                textAlign: "center",
                mx: "auto",
                my: 3,
                backgroundColor: "#3c3c3c80",
                padding: "2rem",
                py: "2.5rem",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  height: "auto",
                  width: "100%",
                  maxWidth: "125px",
                  mx: "auto",
                }}
                component="img"
                alt={data.text}
                src={data.image}
              ></Box>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "1.2rem",
                  mt: 1,
                }}
              >
                {data.text}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default WhyUs;
