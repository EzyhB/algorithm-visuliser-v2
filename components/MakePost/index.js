import { Button, Container, Grid, TextField } from "@mui/material";
import React from "react";

import css from "../../styles/MakePost.module.css";

const handleSubmit = (e) => {
  e.preventDefault();
  const newBlogPost = {
    blog_author: "Ezyh B",
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

export default function MakePost() {
  return (
    <Container maxWidth="sm">
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
}
