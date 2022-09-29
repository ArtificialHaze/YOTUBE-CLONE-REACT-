import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelection }) => {
  return (
    <Grid item xs={12}>
      <Paper
        onClick={() => onVideoSelection(video)}
        style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
      >
        <img
          style={{ marginRight: "25px" }}
          src={video.snippet.thumbnails.medium.url}
          alt={"Thumbnail"}
        />
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
