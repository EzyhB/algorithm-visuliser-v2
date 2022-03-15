import { Container } from "@mui/material";
import React from "react";

import AlgorithmHeader from "../components/AlgorithmHeader";
import MergeSortChart from "../components/MergeSortChart";

export default function mergeSort() {
  return (
    <Container maxWidth="none" sx={{ alignContent: "center" }}>
      <AlgorithmHeader title="Merge Sort" />
      <MergeSortChart />
    </Container>
  );
}
