import {
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import React, { SyntheticEvent, useEffect, useState } from "react";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import MergeSortArray from "../MergeSortArray";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default function MergeSortChart() {
  const [sortArray, setSortArray] = useState([]);
  const [anchorElAlgorithms, setAnchorElAlgorithms] = useState(null);

  const theme = useTheme();

  const generateSortArray = () => {
    let arrayLength = 300;
    let newSortArray = [];
    for (let i = 0; i < arrayLength; i++) {
      newSortArray.push(getRandomInt(10, 540));
    }

    console.log(newSortArray);

    setSortArray([...newSortArray]);
    console.log("asdsad", sortArray);
  };

  const handleOpenMenu = (e: SyntheticEvent) => {
    setAnchorElAlgorithms(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElAlgorithms(null);
  };

  useEffect(() => {
    generateSortArray();
  }, []);

  return (
    <Container maxWidth={false}>
      <Container
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
            generateSortArray();
          }}
        >
          <Typography color={theme.palette.primary.main}>New Array</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseMenu();
            generateSortArray();
          }}
        >
          <Typography color={theme.palette.primary.main}>Sort Array</Typography>
        </MenuItem>
      </Menu>
      <MergeSortArray sortArray={sortArray} />
    </Container>
  );
}
