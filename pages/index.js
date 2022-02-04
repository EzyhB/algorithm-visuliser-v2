import {
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container maxWidth="none">
      <Navbar />

      <Box sx={{ m: { md: 15, sm: 10, xs: 5 } }} />
      <Grid container>
        <Grid item md={5}>
          <Typography variant="overline">EZYH B MAKES</Typography>
          <Typography variant="h1" color="primary">
            Algorithm <br />
            Visuliser Go Brr
          </Typography>
          <Typography variant="subtitle1">
            This website is dedicated to looking super duper cool, as well as
            being a learning platform for those who wana know about algorithms
          </Typography>
        </Grid>
        <Grid item md={1}></Grid>
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ImageList cols={1}>
            <ImageListItem>
              <img
                src="/images/homepage1.png"
                alt="1st image"
                style={{
                  maxWidth: "100%",
                }}
              />
            </ImageListItem>
          </ImageList>
        </Grid>
      </Grid>
    </Container>
  );
}
