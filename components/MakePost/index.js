import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import React from "react";

import css from "../../styles/MakePost.module.css";

export default withPageAuthRequired(function MakePost() {
  const { user, isLoading } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlogPost = {
      blog_image: user.picture,
      blog_author: user.name,
      blog_title: e.target[0].value,
      blog_content: e.target[2].value,
    };

    fetch("https://algorithm-visuliser-v2-backend.vercel.app/api/new-post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlogPost),
    });
    console.log(newBlogPost);
  };
  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <Container maxWidth="sm">
      <Box sx={{ m: { md: 10, sm: 6, xs: 5 } }} />
      <Typography align="center" variant="h3" paragraph>
        New Post
      </Typography>
      <form
        className={css.postForm}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Grid container>
          <Grid item xs={12} sx={{ margin: "1rem 0" }}>
            <TextField fullWidth placeholder="Title..." color="secondary" />
          </Grid>
          <Grid item xs={12} sx={{ margin: "1rem 0" }}>
            <TextField
              fullWidth
              placeholder="Blog Content..."
              multiline
              rows={10}
              color="secondary"
            />
          </Grid>
          <Grid item xs={6} sx={{ margin: "1rem 0" }}>
            <Button color="secondary" variant="outlined">
              Cancel
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: "flex", justifyContent: "end", margin: "1rem 0" }}
          >
            <Button color="secondary" variant="contained" type="submit">
              Post
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
});
