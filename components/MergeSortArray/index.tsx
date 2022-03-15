import { Box, Container, useTheme } from "@mui/material";
import React from "react";

interface params {
  sortArray: number[];
}

type arrays = number[];

export default function MergeSortArray({ sortArray }: params) {
  const theme = useTheme();

  const mergeSort = (array: arrays) => {
    // check if array can be split
    if (array.length < 2) {
      return array;
    }

    // get middle value
    const middle = Math.floor(array.length / 2);

    // split arrray in two sides
    const leftSide = array.slice(0, middle);
    const rightSide = array.slice(middle, array.length);

    console.log("Split: ", leftSide, rightSide);

    // use Recursion to continue splitting
    return merge(mergeSort(leftSide), mergeSort(rightSide));
  };

  const merge = (left: arrays, right: arrays) => {
    // create new array
    let result = [];

    // check if either left array or right array is empty
    while (left.length && right.length) {
      // find lower value
      if (left[0] <= right[0]) {
        // Add Left value
        result.push(left.shift());
      } else {
        // Add Right  Value
        result.push(right.shift());
      }
    }

    // Merge Left Array
    while (left.length) {
      result.push(left.shift());
    }

    // Merge Right Array
    while (right.length) {
      result.push(right.shift());
    }

    console.log("Result: ", result);

    // return result Array
    return result;
  };
  console.log("sorted Array:", mergeSort([2, 1, 4, 5, 3, 7]));

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
