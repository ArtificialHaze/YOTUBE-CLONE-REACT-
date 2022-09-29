import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

const SearchBar = (props) => {
  const [searchTermValue, setSearchTermValue] = useState({ searchTerm: "" });

  const handleChange = (e) =>
    setSearchTermValue({ searchTerm: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { searchTerm } = searchTermValue;
    const { onFormSubmit } = props;
    onFormSubmit(searchTerm);
  };

  return (
    <Paper style={{ padding: "30px" }} elevation={6}>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Search.." onChange={handleChange} />
      </form>
    </Paper>
  );
};

export default SearchBar;
