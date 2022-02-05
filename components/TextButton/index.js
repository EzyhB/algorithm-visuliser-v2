import { Button } from "@mui/material";
import React from "react";

export default function TextButton({ text, handleClick }) {
  return (
    <Button sx={{ color: "white" }} onClick={handleClick}>
      {text}
    </Button>
  );
}
