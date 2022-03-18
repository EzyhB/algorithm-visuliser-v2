import {
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
// import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";
// import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import MergeSortArray from "../MergeSortArray";

// interface arrObj {
//   id: number;
//   value: number;
// }

// type objArray = arrObj[];
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export default function MergeSortChart() {
  const [anchorElAlgorithms, setAnchorElAlgorithms] = useState(null);
  const [sortArray, setSortArray] = useState([0]);
  const arraySize = useRef(200);
  const arrayHeight = useRef(600);

  const theme = useTheme();

  const generateSortArray = (number: number, height: number) => {
    if (number > 200) {
      number = 200;
    }
    let arrayLength = number;
    let newSortArray = [];
    for (let i = 0; i < arrayLength; i++) {
      newSortArray.push(getRandomInt(40, height));
    }

    setSortArray(newSortArray);
  };

  const handleOpenMenu = (e: SyntheticEvent) => {
    setAnchorElAlgorithms(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElAlgorithms(null);
  };

  useEffect(() => {
    const reSizeArray = () => {
      // if (screen.width < 1300) {
      //   arraySize.current = 180;
      //   arrayHeight.current = 560;
      //   generateSortArray(arraySize.current, arrayHeight.current);
      // }
      // if (screen.width < 1100) {
      //   arraySize.current = 160;
      //   arrayHeight.current = 540;
      //   generateSortArray(arraySize.current, arrayHeight.current);
      // }
      // if (screen.width < 900) {
      //   arraySize.current = 120;
      //   arrayHeight.current = 520;
      //   generateSortArray(arraySize.current, arrayHeight.current);
      // }
      // if (screen.width < 800) {
      //   arraySize.current = 100;
      //   arrayHeight.current = 500;
      //   generateSortArray(arraySize.current, arrayHeight.current);
      // }
      // if (screen.width < 700) {
      //   arraySize.current = 90;
      //   arrayHeight.current = 480;
      //   generateSortArray(arraySize.current, arrayHeight.current);
      // }
      // if (screen.width < 600) {
      //   arraySize.current = 80;
      //   arrayHeight.current = 460;
      //   generateSortArray(arraySize.current, arrayHeight.current);
      // }
      // if (screen.width < 500) {
      //   arraySize.current = 70;
      //   arrayHeight.current = 430;
      //   generateSortArray(arraySize.current, arrayHeight.current);
      // }
      // if (screen.width < 400) {
      //   arraySize.current = 60;
      //   arrayHeight.current = 380;
      //   generateSortArray(arraySize.current, arrayHeight.current);
      // }
      // if (screen.width < 380) {
      //   arraySize.current = 50;
      //   arrayHeight.current = 340;
      //   generateSortArray(arraySize.current, arrayHeight.current);
      // }
      generateSortArray(
        Math.abs(screen.width / 7),
        Math.abs(screen.height / 1.7)
      );
    };
    window.onresize = reSizeArray;

    arraySize.current = Math.abs(screen.width / 7);
    arrayHeight.current = Math.abs(screen.height / 1.7);

    generateSortArray(
      Math.abs(screen.width / 7),
      Math.abs(screen.height / 1.7)
    );
  }, []);

  return (
    <Container maxWidth={false}>
      {/* <Container
        maxWidth={false}
        sx={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}
      >
        <IconButton
          sx={{ alignSelf: "center" }}
          onClick={(e: SyntheticEvent) => handleOpenMenu(e)}
        >
          <ArrowRightIcon sx={{ color: theme.palette.primary.dark }} />
          <ExpandCircleDownIcon sx={{ color: theme.palette.primary.dark }} />
          <ArrowLeftIcon sx={{ color: theme.palette.primary.dark }} />
        </IconButton>
      </Container> */}

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
            generateSortArray(
              Math.abs(screen.width / 7),
              Math.abs(screen.height / 1.7)
            );
          }}
        >
          <Typography color={theme.palette.primary.main}>New Array</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseMenu();
            generateSortArray(
              Math.abs(screen.width / 7),
              Math.abs(screen.height / 1.7)
            );
          }}
        >
          <Typography color={theme.palette.primary.main}>Sort Array</Typography>
        </MenuItem>
      </Menu>
      <MergeSortArray
        sortArray={sortArray}
        setSortArray={setSortArray}
        generateSortArray={generateSortArray}
        arraySize={arraySize.current}
        arrayHeight={arrayHeight.current}
      />
    </Container>
  );
}
