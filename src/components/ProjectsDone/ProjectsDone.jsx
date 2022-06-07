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
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
            fontSize: { xs: "1.8rem", sm: "2.2rem" },
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
            fontSize: { xs: "2.5rem", sm: "3rem" },
            color: "transparent",
          }}
        >
          MATRIX LABS
        </Typography>
      </Box>
      <Container
        maxWidth="xl"
        sx={{
          mt: 5,
          mx: { xs: "auto", sm: 4, md: 5 },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "90%", md: "94%" },
            backgroundColor: "#28282880",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            gap: { xs: 1, sm: 2 },
            borderRadius: "10px",
            p: { xs: "auto", sm: "3px" },
            overflowX: "auto",
          }}
        >
          {navData.map((item) => {
            return (
              <Button
                sx={{
                  my: 1,
                  ml: { xs: 1, sm: 0 },
                  backgroundColor:
                    activeNav === item ? "#00D186" : "transparent",
                  color: "white",
                  fontFamily: "Montserrat",
                  fontWeight: 600,
                  display: "block",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  padding: "0px 0.5rem",
                  width: "fit-content",
                  flexShrink: 0,
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
                maxWidth: { xs: "500px", sm: "80%", md: "max( 40% , 475px)" },
                mx: { xs: "auto", md: 3 },
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
                  p: { xs: 1, sm: 0 },
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
                      height: { xs: "25px", sm: "30px" },
                      width: { xs: "42px", sm: "55px" },
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: 600,
                      fontSize: { xs: "1.1rem", sm: "1.3rem" },
                      color: "white",
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
                      height: { xs: "23px", sm: "27px" },
                      width: { xs: "23px", sm: "27px" },
                      mx: 0.5,
                    }}
                  />
                  <Box
                    component="img"
                    src={globe}
                    alt="globe"
                    sx={{
                      height: { xs: "23px", sm: "27px" },
                      width: { xs: "23px", sm: "27px" },
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
                    fontSize: { xs: "0.8rem", sm: "0.95rem" },
                    ml: "8px",
                    mt: 1,
                  }}
                >
                  {card.text}
                </Typography>
              </Box>
              <Button
                sx={{
                  ml: { xs: 2, sm: 1 },
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
    </Container>
  );
};

export default ProjectsDone;
