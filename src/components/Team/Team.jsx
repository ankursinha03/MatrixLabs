import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import avatar from "../../assets/avatar.png";
import styles from "./Team.module.css";

const Team = () => {
  const cardData = [
    {
      image: avatar,
      experience: "LISTED ON PINKSALE & GEMPAD",
      name: "BRICK MATRIX",
      position: "Contract and Web3 Dev",
    },
    {
      image: avatar,
      experience: "2 YRS OF EXPERINCE IN DESIGN",
      name: "CODEX",
      position: "DAPP and Web Dev",
    },
  ];
  return (
    <Container
      maxWidth="xl"
      sx={{
        my: "5rem",
      }}
    >
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
            fontWeight: 700,
          }}
        >
          TEAM MEMBERS
        </Typography>
        <Typography
          variant="h3"
          className={styles.borderText}
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 700,
            color: "transparent",
          }}
        >
          MATRIX LABS
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-start" },
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 0, sm: "5rem" },
          flexWrap: "wrap",
          width: "100%",
          mt: "4rem",
          px: { xs: "0rem", sm: "4rem" },
        }}
      >
        {cardData.map((data) => {
          return (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                maxWidth: "250px",
                maxHeight: "250px",
                textAlign: "center",

                my: 3,
                backgroundColor: "#3c3c3c80",
                padding: { xs: "auto", sm: "2rem" },
                py: { xs: "1.5rem" },
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  height: "auto",
                  width: "100%",
                  maxWidth: "75px",
                  mx: "auto",
                }}
                component="img"
                alt={data.name}
                src={data.image}
              ></Box>
              <Button
                sx={{
                  backgroundColor: "transparent",
                  border: "1px solid #00D186",
                  color: "#00D186",
                  fontSize: "10px",
                  p: "2px 4px",
                  width: "fit-content",
                  mt: 2,
                  fontFamily: "Nunito Sans",
                  borderRadius: "7px",
                }}
              >
                {data.experience}
              </Button>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: "1.2rem",
                  mt: 1,
                }}
              >
                {data.name}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#ffffff99",
                  fontFamily: "Nunito Sans",
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
              >
                {data.position}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "100%",
                  mt: 2,
                }}
              >
                <Button
                  sx={{
                    backgroundColor: "transparent",
                    border: "1px solid #00D186",
                    color: "#00D186",
                    fontSize: "0.7rem",
                    fontFamily: "Nunito Sans",
                    borderRadius: "7px",
                    p: "0.6rem 1.1rem",
                  }}
                >
                  Message
                </Button>
                <Button
                  sx={{
                    backgroundColor: "#00D186",
                    color: "white",
                    fontFamily: "Nunito Sans",
                    borderRadius: "7px",
                    fontSize: "0.7rem",
                    p: "0.6rem 1.1rem",
                    "&:hover": {
                      backgroundColor: "#00D186",
                    },
                  }}
                >
                  Connect
                </Button>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default Team;
