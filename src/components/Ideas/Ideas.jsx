import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ideas from "../../assets/ideasintoreality.png";
import ProgressBar from "../Progressbar/Progressbar";

const Ideas = () => {
  return (
    <Container maxWidth="xl">
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
            maxWidth: { xs: "85%", md: "43%" },
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            mt: { xs: "2rem", md: 0 },
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontFamily: "Montserrat",
                fontSize: { xs: "1.8rem", sm: "2.2rem" },
                fontWeight: 700,
              }}
            >
              CREATING YOUR IDEAS INTO REALITY
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontFamily: "Poppins",
                fontSize: { xs: "1.1rem", sm: "1.3rem" },
                fontWeight: 500,
              }}
            >
              On-board with us and start your business in the web3 space. We
              provide services in:
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              height: "100%",
              mt: 5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  mb: { xs: "0.2rem", md: "0.5rem" },
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "0.9rem", sm: "1.1rem" },
                    fontWeight: 500,
                  }}
                >
                  DAPP Development
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "0.9rem", sm: "1.1rem" },
                    fontWeight: 500,
                  }}
                >
                  100%
                </Typography>
              </Box>
              <ProgressBar bgcolor="#00D7A3" progress={100} height="17px" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  mb: { xs: "0.2rem", md: "0.5rem" },
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "0.9rem", sm: "1.1rem" },
                    fontWeight: 500,
                  }}
                >
                  Blockchain Development
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "0.9rem", sm: "1.1rem" },
                    fontWeight: 500,
                  }}
                >
                  100%
                </Typography>
              </Box>
              <ProgressBar bgcolor="#00D7A3" progress={100} height="17px" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  mb: { xs: "0.2rem", md: "0.5rem" },
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "0.9rem", sm: "1.1rem" },
                    fontWeight: 500,
                  }}
                >
                  Website Integration
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: { xs: "0.9rem", sm: "1.1rem" },
                    fontWeight: 500,
                  }}
                >
                  100%
                </Typography>
              </Box>
              <ProgressBar bgcolor="#00D7A3" progress={100} height="17px" />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: "auto",
            width: "100%",
            maxWidth: { xs: "600px", md: "500px" },
            mx: "auto",
          }}
          component="img"
          alt="ideas"
          src={ideas}
        ></Box>
      </Box>
    </Container>
  );
};

export default Ideas;
