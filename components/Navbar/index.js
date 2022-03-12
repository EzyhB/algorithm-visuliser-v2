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
import { useUser } from "@auth0/nextjs-auth0";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const pages = ["Home", "Algorithms", "Blog", "Wave"];
const settings = ["Profile"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElLogin, setAnchorElLogin] = React.useState(null);
  const { user, isLoading } = useUser();

  const router = useRouter();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenLoginMenu = (event) => {
    setAnchorElLogin(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseLoginMenu = () => {
    setAnchorElLogin(null);
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
        return router.push("/wave");
    }
  };
  if (isLoading) return <div>Loading...</div>;
  console.log(user);
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
          {user ? (
            <Box sx={{ flexGrow: 0, display: "flex" }}>
              <Typography
                variant="subtitle2"
                sx={{
                  marginTop: "20px",
                  marginRight: "10px",
                  display: { md: "block", xs: "none" },
                }}
              >
                {user.name}
              </Typography>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={user.picture} />
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
                <Typography
                  sx={{ display: { md: "none", xs: "block" } }}
                  color="primary"
                  align="center"
                >
                  {user.name}
                </Typography>
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Button>{setting}</Button>
                  </MenuItem>
                ))}
                <MenuItem onClick={handleCloseUserMenu}>
                  <Button href="/api/auth/logout" color="primary">
                    Logout
                  </Button>
                </MenuItem>
                <ThemeSwitch />
              </Menu>
            </Box>
          ) : (
            <Box>
              <Box sx={{ flexGrow: 0, display: { md: "block", xs: "none" } }}>
                <Button
                  variant="outlined"
                  href="/api/auth/login"
                  color="secondary"
                  sx={{ width: "6rem", margin: "0 0.5rem" }}
                >
                  Sign up
                </Button>
                <Button
                  variant="contained"
                  href="/api/auth/login"
                  color="secondary"
                  sx={{ width: "6rem" }}
                >
                  Login
                </Button>
              </Box>
              <Box sx={{ flexGrow: 0, display: { md: "none", xs: "block" } }}>
                <IconButton onClick={handleOpenLoginMenu}>
                  <AccountCircleIcon fontSize="large" sx={{ color: "white" }} />
                </IconButton>
                <Menu
                  sx={{ mt: "45px" }}
                  anchorEl={anchorElLogin}
                  open={Boolean(anchorElLogin)}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  onClose={handleCloseLoginMenu}
                >
                  <MenuItem>
                    <Button href="/api/auth/login">Sign up</Button>
                  </MenuItem>
                  <MenuItem>
                    <Button href="/api/auth/login">Login</Button>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
