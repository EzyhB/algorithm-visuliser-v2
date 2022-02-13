import { Button, ButtonGroup, Grid } from "@mui/material";
import { array } from "prop-types";
import React, { useState } from "react";

import css from "../../styles/AlgorithmArray.module.css";
import AlgorithmInfoCard from "../AlgorithmInfoCard";

// Math.floor(Math.random() * 99)

const initialState = [...Array(24).keys()];
const infoCardText =
  "Binary search is a more effective searching algorithm, that repeatedly divides the array in half and assessing if the possible target is Higher or Lower than the mid point.";
const infoCardText2 =
  "This algorithm has a time complexity of O(log n) in the worst case and O(1) in the best case.";

export default function BinarySearchAlgo() {
  const [arraye, setArraye] = useState(initialState);
  const [searchingFor, setSearchingFor] = useState(null);
  const [loLow, setLoLow] = useState(null);
  const [hiHigh, setHiHigh] = useState(null);
  const [miMid, setMiMid] = useState(null);
  const [numberFound, setNumberFound] = useState(null);

  const handleClickArray = () => {
    let newArray = [];
    let baseNum = 0;
    let arrayLength = 24;
    while (arrayLength) {
      newArray = [
        ...newArray,
        (baseNum += Math.floor(Math.random() * (5 - 2) + 2)),
      ];
      arrayLength -= 1;
    }

    let brandNew = newArray.sort((a, b) => a - b);
    setArraye(brandNew);
    setLoLow(null);
    setHiHigh(null);
    setMiMid(null);
    setNumberFound(null);
  };

  const handleClickPick = () => {
    const index = Math.floor(Math.random() * 23);

    setSearchingFor(arraye[index]);
    // const element = document.getElementById(`a${index}`);
    // setArraye([...arraye]);
    // element.style.backgroundColor = "red";
    setLoLow(null);
    setHiHigh(null);
    setMiMid(null);
    setNumberFound(null);
  };

  const handleClickFind = () => {
    let time = 1500;
    let LowNum = 0;
    let HighNum = arraye.length - 1;
    let array = arraye;

    setLoLow(LowNum);
    setHiHigh(HighNum);

    console.log("something outside while", hiHigh, loLow);

    while (LowNum <= HighNum) {
      let mid = Math.floor((LowNum + HighNum) / 2);

      binarySearchAnimations("mid", mid, time);
      console.log("something in while and time", time);
      time += 2000;
      if (array[mid] === searchingFor) {
        console.log("number bagged!");

        binarySearchAnimations("found", array[mid], time);

        HighNum = 0;
        LowNum = 999;
      } else if (array[mid] > searchingFor) {
        console.log("mid, hiHigh", mid, hiHigh);
        HighNum = mid - 1;

        binarySearchAnimations("high", HighNum, time);
      } else {
        console.log("mid, loLow", mid, loLow, searchingFor);
        LowNum = mid + 1;

        binarySearchAnimations("low", LowNum, time);
      }
      time += 2000;
    }
  };

  const binarySearchAnimations = (animate, value, time) => {
    switch (animate) {
      case "high":
        setTimeout(() => {
          setHiHigh(value);
        }, time);
        return;
      case "low":
        setTimeout(() => {
          setLoLow(value);
        }, time);
        return;
      case "mid":
        setTimeout(() => {
          setMiMid(value);
        }, time);
        return;
      case "found":
        setTimeout(() => {
          setMiMid(null);
          setHiHigh(null);
          setLoLow(null);
          setNumberFound(value);
        }, time);
        return;

      default:
        return;
    }
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        maxWidth: { xl: "xl", lg: "lg", md: "md" },
      }}
    >
      <Grid
        item
        md={4}
        sx={{
          display: {
            xl: "block",
            lg: "block",
            md: "none",
            sm: "none",
            xs: "none",
          },
        }}
      >
        <ButtonGroup variant="contained" color="accent">
          <Button onClick={handleClickArray}>New Array</Button>
          <Button onClick={handleClickPick}>Pick Number</Button>
          <Button onClick={handleClickFind}>Find Number</Button>
        </ButtonGroup>
        <AlgorithmInfoCard
          searchingFor={searchingFor}
          mobile={false}
          text1={infoCardText}
          text2={infoCardText2}
        />
      </Grid>
      <Grid
        item
        md={4}
        sx={{
          display: {
            xl: "none",
            lg: "none",
            md: "block",
            sm: "block",
            xs: "block",
          },
        }}
      >
        <AlgorithmInfoCard
          searchingFor={searchingFor}
          mobile={true}
          handleClickArray={handleClickArray}
          handleClickPick={handleClickPick}
          handleClickFind={handleClickFind}
          text1={infoCardText}
          text2={infoCardText2}
        />
      </Grid>

      <Grid item md={8} className={css.arrayBG}>
        <ul className={css.array}>
          {arraye.map((item, index) => (
            <li
              key={item}
              id={`a${index}`}
              className={[
                css.arrayItem,
                loLow === index && css.searched,
                hiHigh === index && css.searched,
                miMid === index && css.mid,
                item === searchingFor && css.picked,
                numberFound === arraye[index] && css.found,
              ]
                .filter((e) => !!e)
                .join(" ")}
              // style={{
              //   backgroundColor: item === colorPick && "#B550F8",
              // }}
            >
              {item.toString().padStart(2, "0")}
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
}
