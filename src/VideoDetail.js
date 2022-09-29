import React from "react";
import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;

  const videoFetchSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          src={videoFetchSrc}
          height={"100%"}
          width="100%"
          title={"video player"}
          frameBorder="0"
        ></iframe>
      </Paper>
      <Paper elevation={6} style={{ padding: "20px" }}>
        <Typography variant="h4">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </>
  );
};

export default VideoDetail;
