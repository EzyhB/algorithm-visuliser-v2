import { Box, Container, useTheme } from "@mui/material";
import React, { useState } from "react";

interface params {
  sortArray: number[];
  setSortArray: Function;
}

type arrays = number[];

export default function MergeSortArray({ sortArray, setSortArray }: params) {
  const theme = useTheme();

  let mainArray = sortArray;
  let indexedArray = [0, 1, 2, 3, 4, 5];
  let newArray = [];

  const dontSwap = (index1: number, index2: number) => {
    return;
  };

  const swapValues = (index1: number, index2: number) => {
    const value1 = mainArray[index1];
    console.log("index1", index1, "value1", value1);

    const value2 = mainArray[index2];
    console.log("index2: ", index2, "value2: ", value2);

    newArray = [
      ...mainArray.slice(0, index1),
      value2,
      ...mainArray.slice(index1 + 1, index2),
      value1,
      ...mainArray.slice(index2 + 1),
    ];

    mainArray = newArray;
    // setTimeout(() => {
    //   setSortArray(mainArray);
    // }, 100);

    console.log("New Array", newArray);
  };

  const mergeSort = (array: arrays) => {
    if (array.length < 2) {
      return array;
    }
    const middle = Math.floor(array.length / 2);
    const leftSide = array.slice(0, middle);
    const rightSide = array.slice(middle, array.length);
    // console.log("Split: ", leftSide, rightSide);
    return merge(mergeSort(leftSide), mergeSort(rightSide));
  };

  const merge = (left: arrays, right: arrays) => {
    let r = 0;
    let l = 0;
    let result = [];
    while (left.length && right.length) {
      if (mainArray[left[0]] <= mainArray[right[0]]) {
        dontSwap(left[0], right[0]);
        result.push(left.shift());
      } else {
        swapValues(left[0], right[0]);
        l = left[0];
        r = right[0];
        left[0] = r;
        right[0] = l;
        result.push(right.shift());
      }
    }
    while (left.length) {
      result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }
    // console.log("Result: ", result);
    return result;
  };
  console.log("sorted Array:", mergeSort(indexedArray));

  return (
    <Container
      maxWidth={false}
      sx={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}
    >
      {sortArray.map((el, index) => (
        <Box
          key={index}
          sx={{
            bgcolor: theme.palette.secondary.main,
            margin: "0 1px",
            height: `${el}px`,
            width: "3px",
            alignSelf: "end",
          }}
        ></Box>
      ))}
    </Container>
  );
}
