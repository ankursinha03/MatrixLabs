import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import metamarketing from "../../assets/metamarketing.png";
import paperPlane from "../../assets/paper-plane.png";
import globe from "../../assets/globe.png";
import styles from "./ProjectsDone.module.css";

const ProjectsDone = () => {
  const [activeNav, setActiveNav] = useState("DAPPs");
  const navData = ["DAPPs", "Contracts", "NFT's", "Websites"];
  const cardData = [
    {
      header: "METAMARKETING",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing adipiscing elit adipiscing adipiscing elit ",
    },
    {
      header: "METAMARKETING",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing adipiscing elit adipiscing adipiscing elit ",
    },
    {
      header: "METAMARKETING",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing adipiscing elit adipiscing adipiscing elit ",
    },
    {
      header: "METAMARKETING",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing adipiscing elit adipiscing adipiscing elit ",
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
          mx: { xs: "auto", sm: 2 },
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
          PROJECTS DONE BY
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
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 5,
          }}
        >
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#28282880",
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              borderRadius: "10px",
            }}
          >
            {navData.map((item) => {
              return (
                <Button
                  sx={{
                    m: 1,
                    backgroundColor:
                      activeNav === item ? "#00D186" : "transparent",
                    color: "white",
                    fontFamily: "Montserrat",
                    fontWeight: 600,
                    display: "block",
                    fontSize: "1rem",
                    padding: "0px 0.5rem",
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor:
                        activeNav === item ? "#00D186" : "transparent",
                    },
                  }}
                  onClick={() => setActiveNav(item)}
                >
                  {item}
                </Button>
              );
            })}
          </Box>
        </Container>
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
                sx={{
                  height: "auto",
                  width: "100%",
                  maxWidth: "400px",
                  mx: { xs: "auto", md: 5 },
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: { xs: "wrap", sm: "nowrap" },
                  justifyContent: "space-around",
                  backgroundColor: "#3c3c3c80",
                  borderRadius: "20px",
                  p: { xs: "auto", sm: 2.5 },
                  py: { xs: 2 },
                  my: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src={metamarketing}
                      alt="icon"
                      sx={{
                        height: "30px",
                        width: "55px",
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: 600,
                        fontSize: "1.3rem",
                      }}
                    >
                      {card.header}
                    </Typography>
                    <Box flexGrow={1} />
                    <Box
                      component="img"
                      src={paperPlane}
                      alt="paper plane"
                      sx={{
                        height: "27px",
                        width: "27px",
                        mx: 0.5,
                      }}
                    />
                    <Box
                      component="img"
                      src={globe}
                      alt="globe"
                      sx={{
                        height: "27px",
                        width: "27px",
                        mx: 0.5,
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 500,
                      color: "#c2c2c2",
                      fontSize: "0.95rem",
                      ml: "8px",
                      mt: 1,
                    }}
                  >
                    {card.text}
                  </Typography>
                </Box>
                <Button
                  sx={{
                    ml: 1,
                    mt: 2,
                    backgroundColor: "#00D186",
                    color: "black",
                    display: "block",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    fontFamily: "Poppins",
                    maxWidth: "150px",
                    p: "1px 4px",
                    borderRadius: "7px",
                    "&:hover": {
                      backgroundColor: "#00D186",
                    },
                  }}
                >
                  KNOW MORE
                </Button>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default ProjectsDone;
