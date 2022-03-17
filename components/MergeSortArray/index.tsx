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
  sortArray: arrays;
  setSortArray: Function;
}
let time = 1000;

export default function MergeSortArray({ sortArray, setSortArray }: params) {
  const theme = useTheme();

  let mainArray = sortArray.map((el, index) => {
    return { id: index, value: el };
  });

  let newArray = [0];

  const dontSwap = (index1: arrObj, index2: arrObj) => {
    return;
  };

  const swapValues = (right0: arrObj, oldRight: number) => {
    setTimeout(() => {
      newArray = sortArray;
      newArray.splice(oldRight, 1);

      newArray.splice(right0.id, 0, right0.value);
      setSortArray([...newArray]);

      console.log("has newArray changed?", newArray);
    }, time);
    time += 1000;
    console.log("current timer", time);
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
    let swapRight = { id: 0, value: 0 };
    while (left.length && right.length) {
      if (left[0].value <= right[0].value) {
        dontSwap(left[0], right[0]);
        result.push(left.shift());
        // time += 500;
      } else {
        oldRight = right[0].id;

        right[0].id = left[0].id;

        swapRight = right[0];

        swapValues(swapRight, oldRight);

        left.forEach((el) => {
          el.id += 1;
        });

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

  return (
    <Container maxWidth={false}>
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
      <Button
        onClick={() => mergeSort(mainArray)}
        variant="contained"
        color="secondary"
      >
        SORT
      </Button>
    </Container>
  );
}
