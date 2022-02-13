import {
  Button,
  CardActions,
  CardContent,
  Typography,
  CardHeader,
  CardMedia,
  Card,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useState } from "react";

export default function AlgorithmInfoCard({
  searchingFor,
  mobile,
  handleClickArray,
  handleClickPick,
  handleClickFind,
  text1,
  text2,
}) {
  const [anchorElAlgo, setAnchorElAlgo] = useState(null);

  const algoControlButtons = [
    { name: "New Array", function: handleClickArray },
    { name: "Pick Number", function: handleClickPick },
    { name: "Find Number", function: handleClickFind },
  ];

  const handleOpenAlgoControls = (event) => {
    setAnchorElAlgo(event.currentTarget);
  };

  const handleCloseAlgoControls = () => {
    setAnchorElAlgo(null);
  };

  return (
    <div>
      <Card
        sx={{
          color: "#28293E",
          maxWidth: { xl: "74.5%", lg: "92.5%" },
        }}
        elevation={3}
      >
        {mobile ? (
          <CardHeader
            title={
              searchingFor
                ? `Start search for ${searchingFor}`
                : "Search for a number"
            }
            subheader={searchingFor ? "Press Find Number" : "Press Pick Number"}
            action={
              <IconButton
                aria-label="Algorithm Controls"
                onClick={(e) => {
                  handleOpenAlgoControls(e);
                }}
              >
                <MoreVertIcon />
              </IconButton>
            }
          />
        ) : (
          <CardHeader
            title={
              searchingFor
                ? `Start search for ${searchingFor}`
                : "Search for a number"
            }
            subheader={searchingFor ? "Press Find Number" : "Press Pick Number"}
          />
        )}

        <Menu
          sx={{ mt: "45px" }}
          id="algorithm-controls"
          anchorEl={anchorElAlgo}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElAlgo)}
          onClose={handleCloseAlgoControls}
        >
          {/* <MenuItem onClick={handleCloseAlgoControls}>
            <Button color="primary" size="small" onClick={handleClickArray}>
              New Array
            </Button>
          </MenuItem>
          <MenuItem onClick={handleCloseAlgoControls}>
            <Button color="primary" size="small" onClick={handleClickPick}>
              Pick Number
            </Button>
          </MenuItem>
          <MenuItem onClick={handleCloseAlgoControls}>
            <Button color="primary" size="small" onClick={handleClickFind}>
              Find Number
            </Button>
          </MenuItem> */}
          {algoControlButtons.map((el, index) => (
            <MenuItem
              key={`algo-control-${index}`}
              onClick={handleCloseAlgoControls}
            >
              <Button color="primary" size="small" onClick={el.function}>
                {el.name}
              </Button>
            </MenuItem>
          ))}
        </Menu>

        <CardContent>
          <Typography color="textSecondary">{text1}</Typography>
          <br />
          <Typography color="textSecondary">{text2}</Typography>
        </CardContent>
      </Card>
      <br />
    </div>
  );
}
