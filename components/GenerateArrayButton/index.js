import { Button } from "@mui/material";
import FilledButton from "../FilledButton";
import React from "react";

let arrayLength = 25;

export default function GenerateArrayButton({ ourArray, setOurArray }) {
  const handleClick = () => {
    while (arrayLength) {
      setOurArray(...ourArray, Math.floor(Math.random() * 99));
      arrayLength -= 1;
      console.log("inside while", arrayLength);
      console.log("inside while", ourArray);
    }
    // console.log("in button, after while", ourArray);
  };
  return <FilledButton text="New Array" handleClick={handleClick} />;
}
