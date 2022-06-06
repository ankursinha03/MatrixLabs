import * as React from "react";
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

const pages = ["About", "Services", "Projects", "Contact"];

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: "flex" }}>
          <Box
            sx={{
              height: "auto",
              width: "100%",
              maxWidth: { xs: 80 },
            }}
            component="img"
            alt="Logo"
            src={Logo}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex" },
              fontFamily: "Montserrat",
              fontWeight: 600,
              letterSpacing: ".3rem",
              color: "inherit",
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
              color="inherit"
            >
              <MenuIcon
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
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">DAPP</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  mx: 1,
                  color: "white",
                  display: "block",
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
                color: "black",
                fontFamily: "Montserrat",
                display: "block",
                fontSize: "1rem",
                padding: "0px 1rem",
                "&:hover": {
                  backgroundColor: "#00D186",
                },
              }}
            >
              DAPP
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
