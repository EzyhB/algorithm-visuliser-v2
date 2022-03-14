import { Container } from "@mui/material";
import React from "react";

import AlgorithmHeader from "../components/AlgorithmHeader";
import LinearSearchAlgo from "../components/LinearSearchAlgo";

export default function linearSearch() {
  return (
    <Container maxWidth="none" sx={{ alignContent: "center" }}>
      <AlgorithmHeader title="Linear Search" />
      <Container maxWidth="xl">
        <LinearSearchAlgo />
      </Container>
    </Container>
  );
}
