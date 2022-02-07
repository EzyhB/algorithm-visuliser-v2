import { Grid } from "@mui/material";
import React, { useState } from "react";
import FilledButton from "../FilledButton";
import GenerateArrayButton from "../GenerateArrayButton";

// Math.floor(Math.random() * 99)

export default function AlgorithmArray() {
  const [arraye, setArraye] = useState([]);
  //   console.log("array", array);

  const handleClick = () => {
    let newArray = [];
    let baseNum = 0;
    let arrayLength = 25;
    while (arrayLength) {
      newArray = [
        ...newArray,
        (baseNum += Math.floor(Math.random() * (5 - 2) + 2)),
      ];
      arrayLength -= 1;
      //   console.log("inside while", arrayLength);
    }

    let brandNew = newArray.sort((a, b) => a - b);
    setArraye(brandNew);
    console.log("outside while", arraye);
  };

  return (
    <Grid container>
      {/* <Grid item md={1}></Grid> */}
      <Grid item md={4} sx={{ backgroundColor: "white" }}>
        <FilledButton text="New Array" handleClick={handleClick} />
      </Grid>
      <Grid item md={8} sx={{ backgroundColor: "black", height: "500px" }}>
        <ul></ul>
      </Grid>
    </Grid>
  );
}
