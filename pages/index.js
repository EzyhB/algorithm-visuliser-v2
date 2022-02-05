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
import FilledButton from "../components/FilledButton";
import Navbar from "../components/Navbar";
import OutlineButton from "../components/OutlineButton";
import TextButton from "../components/TextButton";
import styles from "../styles/Home.module.css";

export default function Home() {
  const handleClickMyWork = () => {
    console.log("this works");
  };

  const handleClickContactMe = () => {
    console.log("contact me");
  };

  return (
    <Container maxWidth="none">
      <Navbar />

      <Box sx={{ m: { md: 9, sm: 6, xs: 5 } }} />
      <Grid container>
        <Grid item md={1}></Grid>
        <Grid
          item
          md={5}
          sx={{
            direction: { sm: "row-reverse", md: "row" },
          }}
        >
          <Typography variant="overline" color="secondary">
            EZYH B MAKES
          </Typography>
          <Typography
            variant="h1"
            paragraph
            sx={{
              fontWeight: { xl: 900, lg: 800, md: 700, sm: 600, xs: 500 },
              fontSize: {
                xl: "6rem",
                lg: "5rem",
                md: "5rem",
                sm: "4rem",
                xs: "4rem",
              },
            }}
          >
            Algorithm <br />
            Visuliser Go Brr
          </Typography>
          <Typography variant="subtitle1" paragraph>
            This website is dedicated to looking super duper cool, as well as
            being a learning platform for those who wana know about algorithms
          </Typography>

          <FilledButton text="My Work" handleClick={handleClickMyWork} />

          <TextButton text="Contact me" handleClick={handleClickContactMe} />
          <hr
            style={{
              marginTop: "3.8rem",
              alignItem: "centre",
              marginLeft: "2rem",
              marginRight: "2rem",
            }}
          />
        </Grid>

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
              <img src="/images/homepage1.png" alt="1st image" />
            </ImageListItem>
          </ImageList>
        </Grid>
      </Grid>
    </Container>
  );
}
