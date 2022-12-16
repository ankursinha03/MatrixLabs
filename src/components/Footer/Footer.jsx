import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import Logo from "../../assets/logo.png";
import { Instagram, LinkedIn, Twitter, Telegram, GitHub } from "@mui/icons-material";
import styles from "./Footer.module.css";

const Footer = () => {
  // const footerColumn1Headers = ["Home", "Dashboard", "Earn", "Stake"];
  // const footerColumn2Headers = ["Track", "Calculator", "Send Krypt", "Docs"];

  return (
    <div className={styles.footer}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "space-between" },
          flexDirection: { xs: "column", sm: "row" },
          mt: "5rem",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: { xs: "90%", sm: "100%" },
            maxWidth: { xs: "400px", md: "40%" },
            color: "white",
            px: { xs: "1rem", sm: "3rem" },
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                height: "auto",
                width: "90px",
              }}
              component="img"
              alt="logo"
              src={Logo}
            />
            <Typography
              variant="h6"
              noWrap
              sx={{
                display: { xs: "flex" },
                fontWeight: 800,
                fontSize: { xs: "1rem", sm: "1.3rem", m: "1.5rem" },
                textDecoration: "none",
                my: "auto",
              }}
            >
              MATRIX LABS
            </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Poppins",
              ml: "1rem",
              fontSize: { xs: "0.9rem", sm: "1rem", m: "1.3rem" },
              fontWeight: 500,
              mt: 2,
            }}
          >
            One stop destination for all Blockchain Solutions.
          </Typography>
          <Box
            sx={{
              ml: "1rem",
              mt: 2.5,
            }}
          >
            <a
              className={styles.link}
              href="https://www.instagram.com/the_matrix_labs/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
            <a
              className={styles.link}
              href="https://www.linkedin.com/company/the-matrix-labs/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn sx={{ ml: 2 }} />
            </a>
            <a
              className={styles.link}
              href="https://twitter.com/TheMatrixLabs"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <Twitter sx={{ ml: 2 }} />
            </a>
            <a
              className={styles.link}
              href="https://twitter.com/TheMatrixLabs"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <GitHub sx={{ ml: 2 }} />
            </a>
            <a
              className={styles.link}
              href="https://twitter.com/TheMatrixLabs"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <Telegram sx={{ ml: 2 }} />
            </a>
          </Box>
        </Box>
        <div style={{position:"relative",top:"3rem"}}>
        <div style={{position:"relative", right:"10rem", color:"white"}}>HOME</div>
        <span style={{position:"relative", right:"10rem", color:"white"}}>About</span>
        <span style={{position:"relative", color:"white", right:"3rem"}}>Contact us</span><br></br>
        <span style={{position:"relative", right:"10rem",  color:"white"}}>Services</span>
        <span style={{position:"relative", right:"4rem", color:"white"}}>FAQs</span>
        <div style={{position:"relative", right:"10rem", color:"white"}}>Projects</div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
