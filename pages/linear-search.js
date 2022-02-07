import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import AlgorithmArray from "../components/AlgorithmArray";
import Footer from "../components/Footer";
import GenerateArrayButton from "../components/GenerateArrayButton";
import Navbar from "../components/Navbar";

export default function linearSearch() {
  return (
    <Container maxWidth="none" sx={{ alignContent: "center" }}>
      <Navbar />
      <Typography
        variant="h1"
        align="center"
        paragraph
        sx={{
          fontWeight: { xl: 800, lg: 800, md: 700, sm: 600, xs: 500 },
          fontSize: {
            xl: "6rem",
            lg: "5rem",
            md: "5rem",
            sm: "4rem",
            xs: "4rem",
          },
        }}
      >
        Linear Search
      </Typography>
      <Container maxWidth="xl">
        <AlgorithmArray></AlgorithmArray>
      </Container>
      <Footer />
    </Container>
  );
}
