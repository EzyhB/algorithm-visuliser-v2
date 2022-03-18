import { Container } from "@mui/material";
import React from "react";
import AlgorithmHeader from "../components/AlgorithmHeader";
import BinarySearchAlgo from "../components/BinarySearchAlgorithm";

export default function linearSearch() {
  return (
    <Container maxWidth="none" sx={{ alignContent: "center" }}>
      <AlgorithmHeader title="Binary Search" />
      <Container maxWidth="xl">
        <BinarySearchAlgo />
      </Container>
    </Container>
  );
}
