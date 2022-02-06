import {
  Button,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { v4 } from "uuid";
import { Box } from "@mui/system";
import FilledButton from "../components/FilledButton";

const items = [
  {
    name: "Linear Search",
    imagePath: "/images/linear-search-img.png",
    id: v4(),
  },
  {
    name: "Binary Search",
    imagePath: "/images/binary-search-img.png",
    id: v4(),
  },
  { name: "Merge Sort", imagePath: "/images/merge-sort-img.png", id: v4() },
  { name: "Algorithm", imagePath: "/images/rnd-algo-img.png", id: v4() },
  { name: "Algorithm", imagePath: "/images/rnd-algo2-img.png", id: v4() },
  { name: "Algorithm", imagePath: "/images/rnd-algo3-img.png", id: v4() },
];

export default function allalgorithms() {
  return (
    <Container maxWidth="none">
      <Navbar />
      <Container
        sx={{
          maxWidth: { xl: "xl", lg: "lg", md: "md", sm: "sm", xs: "xs" },
        }}
      >
        <Grid
          container
          sx={{
            // backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            // height: "75vh",
          }}
        >
          {items.map((item) => (
            <Grid
              item
              lg={4}
              md={6}
              key={item.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ImageList
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ImageListItem rows="1">
                  <Image
                    src={item.imagePath}
                    alt={item.name}
                    height="346.878px"
                    width="308.52px"
                  />
                  {/* <FilledButton text="pika" /> */}
                </ImageListItem>
              </ImageList>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}
