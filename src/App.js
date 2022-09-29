import "./App.css";
import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [state, setState] = useState({ videos: [], selectedVideo: null });

  useEffect(() => {
    handleSubmit("React");
  }, []);

  const handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyAA_WvvBRmWaeZxZd7arEQFMzKyhCRZH3s",
        q: searchTerm,
      },
    });
    setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  const onVideoSelection = (video) => {
    setState({ selectedVideo: video });
  };

  const { selectedVideo, videos } = state;

  return (
    <Grid justifyContent="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList onVideoSelection={onVideoSelection} videos={videos} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
