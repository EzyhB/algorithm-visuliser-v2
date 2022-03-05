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
import { useUser } from "@auth0/nextjs-auth0";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function BlogDisplayCards({
  image,
  blogTitle,
  blogAuthor,
  blogText,
  user_auth,
}) {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <div>loading...</div>;
  }
  const authorised = user_auth === user.sub;
  return (
    <Card sx={{ maxWidth: "350px" }}>
      <CardHeader
        sx={{ color: "#28293E" }}
        avatar={<Avatar src={image} title={blogAuthor} />}
        /*authenticated? */

        title={blogAuthor}
        subheader={blogTitle}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {blogText}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites" title="coming soon">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" title="coming soon">
          <ShareIcon />
        </IconButton>
        {authorised && (
          <IconButton title="coming soon">
            <DeleteForeverIcon color="error" />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
