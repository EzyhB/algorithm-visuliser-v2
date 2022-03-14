import { Container, ImageList, ImageListItem } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import WaveBanner from "../components/WaveBanner";

export default function something() {
  return (
    <Container maxWidth="none">
      <Container sx={{ justifyContent: "center" }}>
        <WaveBanner />
      </Container>
    </Container>
  );
}
