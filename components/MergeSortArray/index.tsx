import { Box, Button, Container, Grid, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";

import css from "../../styles/MergeSort.module.css";
import AlgorithmHeader from "../AlgorithmHeader";

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
let time = 3;

export default function MergeSortArray({ sortArray, setSortArray }: params) {
  const [swapping, setSwapping] = useState(0);
  const [swappingWith, setSwappingWith] = useState(0);
  const [arrayEndLeft, setArrayEndLeft] = useState(0);
  const [arrayEndRight, setArrayEndRight] = useState(0);
  const theme = useTheme();

  let mainArray = sortArray.map((el, index) => {
    return { id: index, value: el };
  });

  let newArray = [0];

  const dontSwap = (index1: number, index2: number) => {
    setTimeout(() => {
      setSwappingWith(index1);
      setSwapping(index2);
    }, time);
    time += 3;
  };

  const swapValues = (right0: arrObj, oldRight: number, leftEnd, rightEnd) => {
    let rightID = right0.id;
    let rightVal = right0.value;
    let oldIndexOfRight = oldRight;
    let arrLeftEnd = leftEnd;
    let arrRightEnd = rightEnd;

    setTimeout(() => {
      newArray = sortArray;
      newArray.splice(oldIndexOfRight, 1);
      newArray.splice(rightID, 0, rightVal);

      setArrayEndLeft(arrLeftEnd);
      setArrayEndRight(arrRightEnd);
      setSwapping(oldIndexOfRight + 1);
      setSwappingWith(rightID);
      setSortArray([...newArray]);
    }, time);
    time += 3;
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
    let leftArrEnd = left[left.length - 1].id;
    let rightArrEnd = right[right.length - 1].id;
    while (left.length && right.length) {
      if (left[0].value <= right[0].value) {
        dontSwap(left[0].id, right[0].id);
        result.push(left.shift());
        // time += 500;
      } else {
        oldRight = right[0].id;

        right[0].id = left[0].id;

        swapRight = right[0];

        swapValues(swapRight, oldRight, leftArrEnd, rightArrEnd);

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
      <Grid container>
        <Grid item xs={10}>
          <AlgorithmHeader title="Merge Sort" />
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={() => mergeSort(mainArray)}
            variant="contained"
            color="secondary"
          >
            SORT
          </Button>
        </Grid>
      </Grid>
      <Container
        maxWidth={false}
        sx={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}
      >
        {sortArray.map((el, index) => (
          <Box
            key={index}
            className={[
              css.regular,
              swapping === index && css.swapping,
              swappingWith === index && css.swapping,
              arrayEndLeft === index && css.arrayEnd,
              arrayEndRight === index && css.arrayEnd,
            ]
              .filter((e) => !!e)
              .join(" ")}
            sx={{
              margin: "0 1px",
              height: `${el}px`,
              width: "3px",
              alignSelf: "end",
            }}
          ></Box>
        ))}
      </Container>
    </Container>
  );
}
