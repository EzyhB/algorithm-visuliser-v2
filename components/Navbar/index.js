import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import ThemeSwitch from "../ThemeSwitch";
import { useRouter } from "next/router";

const pages = ["Home", "All Algorithms", "Blog", "Something"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const router = useRouter();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuItemClick = (id) => {
    switch (id) {
      case "0":
        return router.push("/");
      case "1":
        return router.push("/all-algorithms");
      case "2":
        return router.push("/blog");
      case "3":
        return router.push("/something");
    }
  };

  return (
    <AppBar position="static" color="transparent" sx={{ boxShadow: "none" }}>
      <Container sx={{ maxWidth: { xl: "xl", lg: "lg", md: "md" } }}>
        <Toolbar disableGutters>
          <ImageList sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
            <ImageListItem>
              <Image
                src="/images/AV-by-Ezyh-Logo.png"
                alt="logo"
                height="116em"
                width="174em"
              />
            </ImageListItem>
          </ImageList>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
              {pages.map((page, index) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    handleMenuItemClick(index.toString());
                  }}
                >
                  <Typography textAlign="center" color="textSecondary">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <ImageList sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <ImageListItem>
              <Image
                src="/images/AV-by-Ezyh-Logo.png"
                alt="logo"
                height="58em"
                width="87em"
              />
            </ImageListItem>
          </ImageList>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "space-between",

                maxWidth: "70%",
                marginLeft: "10%",
              }}
            >
              {pages.map((page, index) => (
                <Button
                  key={page}
                  onClick={() => handleMenuItemClick(index.toString())}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>
          {/* Auth stuff goes here! make login/Sign up buttons and avatar custom*/}

          <Typography
            variant="subtitle2"
            sx={{
              marginTop: "20px",
              marginRight: "10px",
              display: { md: "block", xs: "none" },
            }}
          >
            Ezyh B
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://cdn.discordapp.com/attachments/786789210782171186/939593099229925386/Ezyh_B_Logo.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" color="textSecondary">
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
              <ThemeSwitch />
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
