import { Button } from "@mui/material";
import React from "react";

export default function FilledButton({ text, handleClick }) {
  return (
    <Button
      variant="contained"
      color="secondary"
      sx={{ paddingRight: "1.5rem", paddingLeft: "1.5rem" }}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
}
