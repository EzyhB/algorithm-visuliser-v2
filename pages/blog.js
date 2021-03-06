import {
  Button,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import css from "../styles/Blog.module.css";
// import blogData from "../dummyBlogData";
import BlogDisplayCards from "../components/BlogDisplayCards";

export default function Blog() {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    async function getAllBlogData() {
      const response = await fetch(
        "https://algorithm-visuliser-v2-backend.vercel.app/api/get_all_blogposts"
      );
      const data = await response.json();

      setBlogData(data.rows);
    }
    getAllBlogData();
  }, []);

  return (
    <Container maxWidth="none">
      <Container
        sx={{
          maxWidth: { xl: "xl", lg: "lg", md: "md", sm: "sm", xs: "xs" },
        }}
        className={css.heroBg}
      >
        <Box sx={{ m: { md: 10, sm: 6, xs: 5 } }} />
        <Grid container>
          <Grid item xl={6} sm={10}>
            <Typography variant="overline" color="secondary">
              The Blog
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
              Check Out <br />
              The Blog &amp; Stuff
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Make sure you read all of the Lorem Ipsum on <br /> this page!
              Theres gna be a test on it later...
            </Typography>
            <Button color="secondary" href="/new-post">
              Make a post
            </Button>
          </Grid>
          <Grid item xl={6} sm={2}></Grid>
        </Grid>
        <Box sx={{ m: { md: 0, sm: 6, xs: 5 } }}></Box>
        <Grid container>
          <Grid item xl={8} lg={7} md={6} sm={3}></Grid>
          <Grid item md={3} sm={4}>
            <ImageList
              sx={{
                width: {
                  xl: "582px",
                  lg: "523.8px",
                  md: "465.6px",
                  sm: "407.4px",
                  xs: "100%",
                },
                display: "flex",
                justifyContent: "end",
              }}
            >
              <ImageListItem>
                <img src="/images/blog-click-me.png" alt="click me" />
              </ImageListItem>
            </ImageList>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ m: { md: 15, sm: 6, xs: 5 } }} />
      <hr style={{ opacity: "0.1" }} />
      <Box sx={{ m: { md: 15, sm: 6, xs: 5 } }} />
      <Container
        sx={{
          maxWidth: { xl: "xl", lg: "lg", md: "md", sm: "sm", xs: "xs" },
        }}
      >
        <Typography
          variant="h1"
          align="center"
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
          Posts
        </Typography>

        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          {blogData.map((el, index) => (
            <Grid
              item
              key={index}
              lg={4}
              md={6}
              sx={{
                padding: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <BlogDisplayCards
                id={el.id}
                image={el.blog_image}
                blogTitle={el.blog_title}
                blogAuthor={el.blog_author}
                blogText={el.blog_content}
                user_auth={el.user_auth}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}
