import { Box, Button, Container, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";
import indexedsm from "../../utility/indexedArray";

type arrays = number[];

interface arrObj {
  id: number;
  value: number;
}

type objArray = arrObj[];

interface params {
  sortArray: objArray;
  setSortArray: Function;
}

export default function MergeSortArray({ sortArray, setSortArray }: params) {
  const theme = useTheme();

  let mainArray = sortArray;
  console.log("fresh array", mainArray);

  let indexedArray = indexedsm;

  let newArray = [];

  const dontSwap = (index1: arrObj, index2: arrObj) => {
    return;
  };

  const swapValues = (left: objArray, right0: arrObj, oldRight: number) => {
    newArray = [
      ...sortArray.slice(0, right0.id),
      right0,
      ...left,
      ...sortArray.slice(oldRight + 1),
    ];
    console.log("New Array", newArray);
  };

  const mergeSort = (array: objArray) => {
    if (array.length < 2) {
      return array;
    }
    const middle = Math.floor(array.length / 2);
    const leftSide = array.slice(0, middle);
    const rightSide = array.slice(middle, array.length);
    return merge(mergeSort(leftSide), mergeSort(rightSide));
  };

  const merge = (left: objArray, right: objArray) => {
    let result = [];
    let oldRight = 0;
    while (left.length && right.length) {
      if (left[0].value <= right[0].value) {
        dontSwap(left[0], right[0]);
        result.push(left.shift());
      } else {
        oldRight = right[0].id;

        right[0].id = left[0].id;

        left.forEach((el) => {
          el.id += 1;
        });
        swapValues(left, right[0], oldRight);

        result.push(right.shift());
      }
    }
    while (left.length) {
      result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }
    return result;
  };

  console.log();

  return (
    <Container
      maxWidth={false}
      sx={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}
    >
      {sortArray.map((el, index) => (
        <Box
          key={index}
          id={`a${el.id}`}
          sx={{
            bgcolor: theme.palette.secondary.main,
            margin: "0 1px",
            height: `${el.value}px`,
            width: "3px",
            alignSelf: "end",
          }}
        ></Box>
      ))}
      <Button
        onClick={() => console.log("sortedArray: ", mergeSort(mainArray))}
        variant="contained"
        color="secondary"
      >
        SORT
      </Button>
    </Container>
  );
}
