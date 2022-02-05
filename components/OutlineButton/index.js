import { Button, Typography } from "@mui/material";
import React from "react";

export default function OutlineButton({ text, handleClick }) {
  return (
    <Button
      variant="outlined"
      color="secondary"
      sx={{ color: "white" }}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
}
