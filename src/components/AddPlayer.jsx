import React from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const AddPlayer = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setimageUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const playerObject = { name, breed, imageUrl, status };
    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-PT/players",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(playerObject),
        }
      );
      const data = await response.json();
      alert("You have successfully added a player");
      setName("");
      setBreed("");
      setStatus("");
      setimageUrl("");
      return data;
    } catch (error) {
      console.error("Oops, something went wrong with adding that player!", err);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-required"
        label="Name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <TextField
        id="outlined-required"
        label="Breed"
        value={breed}
        onChange={(event) => {
          setBreed(event.target.value);
        }}
      />
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Status"
          onChange={(event) => {
            setStatus(event.target.value);
          }}
        >
          <MenuItem value={"field"}>Field</MenuItem>
          <MenuItem value={"bench"}>Bench</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="outlined-required"
        label="Image Url"
        value={imageUrl}
        onChange={(event) => {
          setimageUrl(event.target.value);
        }}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
};

export default AddPlayer;