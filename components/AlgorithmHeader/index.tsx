import { Container, Typography } from "@mui/material";
import React from "react";

interface params {
  title: string;
}

export default function AlgorithmHeader({ title }: params) {
  return (
    <Container
      maxWidth={false}
      sx={{ display: "flex", justifyContent: { sm: "center", xs: "start" } }}
    >
      <Typography
        variant="h1"
        paragraph
        sx={{
          fontWeight: { xl: 800, lg: 800, md: 700, sm: 600, xs: 500 },

          fontSize: {
            xl: "6rem",
            lg: "5rem",
            md: "5rem",
            sm: "4rem",
            xs: "2rem",
          },
        }}
      >
        {title}
      </Typography>
    </Container>
  );
}
