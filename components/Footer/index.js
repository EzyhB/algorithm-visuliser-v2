import { AppBar, Box, Container, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{ top: "auto", bottom: 0, boxShadow: "none" }}
    >
      <Container sx={{ maxWidth: { xl: "xl", lg: "lg", md: "md" } }}>
        <hr style={{ opacity: 0.1 }} />
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginRight: { md: "40%" },
          }}
        >
          <Typography
            variant="caption"
            sx={{ my: 2, display: "block" }}
            color="secondary"
          >
            Copyright © 2022 By Me All Rights Reserved.
          </Typography>
          <Typography
            variant="caption"
            sx={{ my: 2, display: "block" }}
            color="secondary"
          ></Typography>
          <Typography
            variant="caption"
            sx={{ my: 2, display: "block" }}
            color="secondary"
          >
            <InstagramIcon />
            <GitHubIcon sx={{ marginLeft: "1rem" }} />
            <LinkedInIcon sx={{ marginLeft: "1rem" }} />
            <YouTubeIcon sx={{ marginLeft: "1rem", marginRight: "1rem" }} />
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
}
