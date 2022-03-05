import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

export default function BlogDisplayCards({
  image,
  blogTitle,
  blogAuthor,
  blogText,
}) {
  return (
    <Card sx={{ maxWidth: "350px" }}>
      <CardHeader
        sx={{ color: "#28293E" }}
        avatar={<Avatar src={image} />}
        /*authenticated? */
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={blogAuthor}
        subheader={blogTitle}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {blogText}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
