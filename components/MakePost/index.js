import { Button, Container, Grid, TextField } from "@mui/material";
import React from "react";

export default function MakePost() {
  return (
    <Container maxWidth="sm">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ margin: "1rem 0" }}>
            <TextField fullWidth placeholder="Title..." color="secondary" />
          </Grid>
          <Grid item xs={12} sx={{ margin: "1rem 0" }}>
            <TextField
              fullWidth
              placeholder="Blog Content..."
              multiline
              rows={6}
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
            <Button color="secondary" variant="contained">
              Post
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
