import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import React, { useState } from "react";

interface params {
  person: string;
  message: string;
  time: any;
}

export default function WaveCard({ person, message, time }: params) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <Card sx={{ margin: "1rem 0" }}>
      <CardHeader
        avatar={
          <AvatarGroup>
            <Avatar src="https://soliditylang.org/images/SolBlueGradient.png" />
            <Avatar src="https://capital.com/files/imgs/articles/800x600x1/shutterstock_1958528764.jpg" />
          </AvatarGroup>
        }
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {"From: " + person}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {time.toString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {message}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          onClick={() => {
            setIsLiked(!isLiked);
          }}
        >
          <FavoriteIcon color={isLiked ? "error" : "primary"} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
