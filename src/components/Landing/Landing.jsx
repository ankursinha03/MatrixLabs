import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Navbar from "../Navbar/Navbar";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <Navbar />
      <Container maxWidth="xl">
        <Box></Box>
        <Box></Box>
      </Container>
    </div>
  );
};

export default Landing;
