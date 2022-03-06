import { Button, Container, Grid, TextField } from "@mui/material";
import React from "react";

export default function EditingPost({
  postId,
  isEditing,
  setIsEditing,
  title,
  text,
}) {
  const handleEdit = async (e) => {
    e.preventDefault();
    const editedPost = {
      blog_title: e.target[0].value,
      blog_content: e.target[3].value,
    };

    await fetch(
      "https://algorithm-visuliser-v2-backend.vercel.app/api/edit-post/" +
        postId,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedPost),
      }
    );

    setIsEditing(!isEditing);
    setTimeout(() => {
      document.location.reload(true);
    }, 1000);
  };
  return (
    <Container
      sx={{
        maxWidth: "25rem",
        background: "white",
        borderRadius: "0.35rem",
        padding: "1.5rem",
        color: "#28293E",
      }}
    >
      <form
        onSubmit={(e) => {
          handleEdit(e);
        }}
      >
        <TextField
          fullWidth
          multiline
          placeholder="Title..."
          defaultValue={title}
          sx={{ textArea: { color: "#28293E" } }}
        />
        <TextField
          fullWidth
          multiline
          rows={5}
          placeholder="Blog content..."
          defaultValue={text}
          sx={{ textArea: { color: "#28293E" } }}
        />
        <Grid container sx={{ margin: "0.5rem 0" }}>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setIsEditing(!isEditing)}
              type="button"
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", justifyContent: "end" }}>
            <Button variant="contained" color="secondary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
