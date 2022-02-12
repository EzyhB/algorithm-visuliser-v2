import { Button, ButtonGroup, Grid } from "@mui/material";
import React, { useState } from "react";
import FilledButton from "../FilledButton";
import GenerateArrayButton from "../GenerateArrayButton";

import css from "../../styles/AlgorithmArray.module.css";
import AlgorithmInfoCard from "../AlgorithmInfoCard";

// Math.floor(Math.random() * 99)

const initialState = [...Array(24).keys()];

export default function AlgorithmArray() {
  const [arraye, setArraye] = useState(initialState);
  const [colorPick, setColorPick] = useState(null);
  const [searchingFor, setSearchingFor] = useState(null);
  const [searched, setSearched] = useState([]);
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
    setSearched([]);
    setNumberFound(null);
  };

  const handleClickPick = () => {
    const index = Math.floor(Math.random() * 23);
    setColorPick(arraye[index]);
    setSearchingFor(arraye[index]);
    // const element = document.getElementById(`a${index}`);
    // setArraye([...arraye]);
    // element.style.backgroundColor = "red";
    setSearched([]);
    setNumberFound(null);
  };

  const handleClickFind = () => {
    const numberInBag = false;
    let newArr = [];
    let time = 1500;
    arraye.forEach((el) => {
      setTimeout(() => {
        if (numberInBag) {
          console.log("num found");
          return;
        } else {
          if (el === searchingFor) {
            setNumberFound(el);
            numberInBag = true;
            console.log("found number", el);
            return;
          } else {
            console.log("finding", searched, el);
            newArr = [...newArr, el];
            return setSearched(newArr);
          }
        }
      }, time);
      time += 1000;
    });
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
        <AlgorithmInfoCard searchingFor={searchingFor} mobile={false} />
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
                searched[index] === arraye[index] && css.searched,
                item === colorPick && css.picked,
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
