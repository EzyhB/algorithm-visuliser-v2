import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Slider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import WidgetsIcon from "@mui/icons-material/Widgets";

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
  generateSortArray: Function;
  arrayHeight: number;
  arraySize: number;
}
let time = 3;
let initialTime = 3;
let timeouts = [];

export default function MergeSortArray({
  sortArray,
  setSortArray,
  generateSortArray,
  arraySize,
  arrayHeight,
}: params) {
  const [swapping, setSwapping] = useState(0);
  const [swappingWith, setSwappingWith] = useState(0);
  const [arrayEndLeft, setArrayEndLeft] = useState(0);
  const [arrayEndRight, setArrayEndRight] = useState(0);
  const [anchorElAlgorithms, setAnchorElAlgorithms] = useState(null);
  // const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const theme = useTheme();

  /* It creates an array of objects that contains the index and the value of the array. */
  let mainArray = sortArray.map((el, index) => {
    return { id: index, value: el };
  });

  let newArray = [0];

  /**
   * It sets the swappingWith state to index1 and the swapping state to index2.
   * @param {number} index1 - the index of the first item that is being swapped.
   * @param {number} index2 - The index of the item that is being swapped with the item at index1.
   */
  const dontSwap = (index1: number, index2: number) => {
    timeouts.push(
      setTimeout(() => {
        setSwappingWith(index1);
        setSwapping(index2);
      }, time)
    );
    time += initialTime;
  };

  /**
   * Swaps the values of two elements in the array
   * @param {arrObj} right0 - the object that is being swapped with the left object
   * @param {number} oldRight - The index of the right value in the array.
   * @param leftEnd - The index of the left sub array's end.
   * @param rightEnd - The index of the right sub array's end.
   */
  const swapValues = (right0: arrObj, oldRight: number, leftEnd, rightEnd) => {
    let rightID = right0.id;
    let rightVal = right0.value;
    let oldIndexOfRight = oldRight;
    let arrLeftEnd = leftEnd;
    let arrRightEnd = rightEnd;

    timeouts.push(
      setTimeout(() => {
        newArray = sortArray;
        newArray.splice(oldIndexOfRight, 1);
        newArray.splice(rightID, 0, rightVal);

        setArrayEndLeft(arrLeftEnd);
        setArrayEndRight(arrRightEnd);
        setSwapping(oldIndexOfRight + 1);
        setSwappingWith(rightID);
        setSortArray([...newArray]);
      }, time)
    );
    time += initialTime;
  };

  /**
   * It sorts an array of objects by their `value` property.
   * @param {objArray} array - the array to be sorted.
   * @returns The sorted array.
   */
  const mergeSort = (array: objArray) => {
    if (array.length < 2) {
      return array;
    }
    const middle = Math.floor(array.length / 2);
    const leftSide = array.slice(0, middle);
    const rightSide = array.slice(middle, array.length);

    return merge(mergeSort(leftSide), mergeSort(rightSide));
  };

  /**
   * Merge the two arrays together, while keeping the order (id/index) of the elements
   * @param {objArray} left - The left array of the merge.
   * @param {objArray} right - the right array to merge with the left array
   * @returns The merged array.
   */
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

  /**
   * Clear all the timeouts that are set
   */
  const stopSort = () => {
    timeouts.forEach((el, i) => {
      clearTimeout(timeouts[i]);
    });

    if (typeof window !== "undefined") {
      var id = window.setTimeout(function () {}, 0);
      console.log("his is the id", id);
    }
  };

  /**
   * It resets the array to a random state while also clearing all the timeouts that are set.
   */
  const resetSort = () => {
    timeouts.forEach((el, index) => {
      clearTimeout(timeouts[index]);
    });

    if (typeof window !== "undefined") {
      var id = window.setTimeout(function () {}, 0);
      console.log("his is the id", id);
    }

    generateSortArray(arraySize, arrayHeight);
  };

  const handleOpenMenu = (e: SyntheticEvent) => {
    setAnchorElAlgorithms(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElAlgorithms(null);
  };

  const handleSpeed = (e: Event) => {
    let input = e.target as HTMLInputElement;

    initialTime = Number(input.value);
  };

  const handleArrSize = (e: Event) => {
    let input = e.target as HTMLInputElement;
    if (typeof window !== "undefined") {
      generateSortArray(input.value, Math.abs(screen.height / 1.7));
    }
  };

  /* It sorts the array by using the merge sort algorithm. */
  return (
    <Container maxWidth={false}>
      <Grid container>
        <Grid item xs={10}>
          <AlgorithmHeader title="Merge Sort" />
        </Grid>
        <Grid item xs={2}>
          <Box sx={{ display: { md: "block", xs: "none" } }}>
            <Box sx={{ display: "flex" }}>
              <Stack direction="row" spacing={1} sx={{ height: "80px" }}>
                <Slider
                  color="secondary"
                  orientation="vertical"
                  aria-label="Speed(ms)"
                  title="Speed(ms)"
                  valueLabelDisplay="auto"
                  min={3}
                  max={1000}
                  onChange={handleSpeed}
                  defaultValue={3}
                />
                <Slider
                  color="secondary"
                  orientation="vertical"
                  aria-label="Array Size"
                  title="Array Size"
                  valueLabelDisplay="auto"
                  min={20}
                  max={200}
                  step={10}
                  onChange={handleArrSize}
                  defaultValue={200}
                />
              </Stack>

              <ButtonGroup orientation="vertical" size="small">
                <Button
                  onClick={() => {
                    mergeSort(mainArray);
                  }}
                  // disabled={isButtonDisabled ? true : false}
                  color="secondary"
                >
                  SORT
                </Button>
                <Button
                  onClick={() => {
                    resetSort();
                  }}
                  // disabled={isButtonDisabled ? true : false}
                  color="secondary"
                >
                  Reset
                </Button>
                <Button
                  onClick={() => {
                    stopSort();
                  }}
                  // disabled={isButtonDisabled ? true : false}
                  color="secondary"
                >
                  Stop
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
          <Box sx={{ display: { md: "none", xs: "block" } }}>
            <IconButton
              onClick={(e) => {
                handleOpenMenu(e);
              }}
            >
              <WidgetsIcon
                sx={{
                  color: theme.palette.text.primary,
                  fontSize: { sm: "2rem", xs: "1.5rem" },
                }}
              />
            </IconButton>
          </Box>
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
              height: `${el - 10}px`,
              width: "5px",
              alignSelf: "end",
            }}
          ></Box>
        ))}
      </Container>
      <Menu
        anchorEl={anchorElAlgorithms}
        open={Boolean(anchorElAlgorithms)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handleCloseMenu}
      >
        <MenuItem
          onClick={() => {
            handleCloseMenu();
            mergeSort(mainArray);
          }}
        >
          <Typography color={theme.palette.primary.main}>SORT</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseMenu();
            resetSort();
          }}
        >
          <Typography color={theme.palette.primary.main}>RESET</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseMenu();
            stopSort();
          }}
        >
          <Typography color={theme.palette.primary.main}>STOP</Typography>
        </MenuItem>
        <MenuItem>
          <Box sx={{ width: "100px" }}>
            <Slider
              color="secondary"
              aria-label="Speed(ms)"
              title="Speed(ms)"
              valueLabelDisplay="auto"
              min={3}
              max={1000}
              onChange={handleSpeed}
              defaultValue={3}
            />
            <Typography color={theme.palette.primary.main}>
              Speed(ms)
            </Typography>
          </Box>
        </MenuItem>
        <MenuItem>
          <Box sx={{ width: "100px" }}>
            <Slider
              color="secondary"
              aria-label="Array Size"
              title="Array Size"
              valueLabelDisplay="auto"
              min={20}
              max={200}
              step={10}
              onChange={handleArrSize}
              defaultValue={200}
            />
            <Typography color={theme.palette.primary.main}>
              Array Size
            </Typography>
          </Box>
        </MenuItem>
      </Menu>
    </Container>
  );
}
