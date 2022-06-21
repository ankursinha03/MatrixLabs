import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import circlearrow from "../../assets/circlearrow.png";
import uidesign from "../../assets/uidesign.png";
import web3integration from "../../assets/web3integration.png";
import testing from "../../assets/testing.png";

const HowWeDevelop = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          height: "auto",
          my: "4rem",
          pt: "3rem",
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
            textAlign: "center",
          }}
        >
          HOW WE DEVELOP DAPPs
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          mt: { xs: "4rem", md: 2 },
        }}
      >
        <Box
          sx={{
            height: "auto",
            width: "100%",
            maxWidth: { xs: "600px", md: "250px" },
            mx: "auto",
          }}
        >
          <Box
            sx={{
              height: "auto",
              width: "100%",
              maxWidth: { xs: "600px", md: "250px" },
              mx: "auto",
            }}
            component="img"
            alt="uidesign"
            src={uidesign}
          ></Box>
        </Box>
        <Box
          sx={{
            height: "70px",
            width: "100%",
            maxWidth: { xs: "70px", md: "70px" },
            mx: "auto",
          }}
          component="img"
          alt="circle arrow"
          src={circlearrow}
        ></Box>
        <Box
          sx={{
            height: "auto",
            width: "100%",
            maxWidth: { xs: "600px", md: "250px" },
            mx: "auto",
          }}
        >
          <Box
            sx={{
              height: "auto",
              width: "100%",
              maxWidth: { xs: "600px", md: "250px" },
              mx: "auto",
            }}
            component="img"
            alt="web3integration"
            src={web3integration}
          ></Box>
        </Box>
        <Box
          sx={{
            height: "70px",
            width: "100%",
            maxWidth: { xs: "70px", md: "70px" },
            mx: "auto",
          }}
          component="img"
          alt="circle arrow"
          src={circlearrow}
        ></Box>
        <Box
          sx={{
            height: "auto",
            width: "100%",
            maxWidth: { xs: "600px", md: "250px" },
            mx: "auto",
          }}
        >
          <Box
            sx={{
              height: "auto",
              width: "100%",
              maxWidth: { xs: "600px", md: "250px" },
              mx: "auto",
            }}
            component="img"
            alt="complete testing"
            src={testing}
          ></Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HowWeDevelop;
