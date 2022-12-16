import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);

  const pages = ["Services", "Projects", "About"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleModal = (value) => setOpenModal(value);


  return (
    <AppBar
      className={styles.navBar}
      position="sticky"
      sx={{
        backgroundColor: "black",
        borderBottom: "1px solid white"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: "flex" }}>
          <Box
            sx={{
              height: "auto",
              width: "100%",
              maxWidth: { xs: 60, sm: 80 },
            }}
            component="img"
            alt="Logo"
            src={Logo}
          />
          <Typography
            className={styles.navText}
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex" },
              fontFamily: "Montserrat",
              fontWeight: 600,
              letterSpacing: { xs: ".1rem", sm: ".3rem" },
              fontSize: { xs: "1rem", sm: "1.3rem", m: "1.5rem" },
              textDecoration: "none",
            }}
          >
            MATRIX LABS
          </Typography>
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon
                className={styles.navText}
                sx={{
                  fontSize: { xs: "2rem", sm: "2.3rem" },
                }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              PaperProps={{
                style: {
                  width: "100%",
                  maxWidth: "100%",
                },
              }}
              marginThreshold={0}
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    className={styles.navText}
                    component="a"
                    href={`#${page}`}
                    sx={{ textDecoration: "none", textTransform: "none" }}
                    textAlign="center"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  toggleModal(true);
                }}
              >
                <Typography className={styles.navText} textAlign="center">
                  Get in touch
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                className={styles.navText}
                component="a"
                href={`#${page}`}
                key={page}
                sx={{
                  my: 2,
                  mx: 1,
                  display: "block",
                  textTransform: "none",
                  fontFamily: "Montserrat",
                  fontSize: "1rem",
                }}
              >
                {page}
              </Button>
            ))}
            <Button
              sx={{
                my: 2.5,
                mx: 1,
                backgroundColor: "#00D186",
                fontFamily: "Montserrat",
                textTransform: "none",
                display: "block",
                fontSize: "1rem",
                fontWeight: 600,
                padding: "0px 1rem",
                color: "white",
                "&:hover": {
                  backgroundColor: "#00D186",
                },
              }}
            >
              Get in touch
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
