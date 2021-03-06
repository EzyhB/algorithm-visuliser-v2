import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useUser } from "@auth0/nextjs-auth0";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import EditingPost from "../EditingPost";

export default function BlogDisplayCards({
  image,
  blogTitle,
  blogAuthor,
  blogText,
  user_auth,
  id,
}) {
  const { user, isLoading } = useUser();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async () => {
    await fetch(
      "https://algorithm-visuliser-v2-backend.vercel.app/api/delete-post/" + id,
      { method: "DELETE" }
    );

    document.location.reload(true);
  };

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (user) {
    const authorised =
      (user_auth === user.sub) |
      (user.sub === "google-oauth2|100005606821575452745");
  }

  return isEditing ? (
    <EditingPost
      postId={id}
      setIsEditing={setIsEditing}
      isEditing={isEditing}
      title={blogTitle}
      text={blogText}
    />
  ) : (
    <Card sx={{ maxWidth: "25rem" }}>
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
      <Box>
        <CardActions>
          <IconButton aria-label="add to favorites" title="coming soon">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share" title="coming soon">
            <ShareIcon />
          </IconButton>
          {authorised && (
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "flex-end",
              }}
            >
              <IconButton title="coming soon" onClick={handleDelete}>
                <DeleteForeverIcon color="error" />
              </IconButton>
              <IconButton
                title="coming soon"
                onClick={() => setIsEditing(!isEditing)}
              >
                <EditIcon color="secondary" />
              </IconButton>
            </Box>
          )}
        </CardActions>
      </Box>
    </Card>
  );
}
