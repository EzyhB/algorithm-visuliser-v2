import { Container } from "@mui/material";
import React from "react";
import MakePost from "../../components/MakePost";
import Navbar from "../../components/Navbar";

export default function NewPost() {
  return (
    <Container maxWidth="none">
      <Navbar />
      <MakePost />
    </Container>
  );
}
