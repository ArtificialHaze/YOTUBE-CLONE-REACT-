import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelection }) => {
  const listVideos = videos.map((video, index) => (
    <VideoItem onVideoSelection={onVideoSelection} key={index} video={video} />
  ));

  return (
    <Grid container spacing={10}>
      {listVideos}
    </Grid>
  );
};

export default VideoList;
