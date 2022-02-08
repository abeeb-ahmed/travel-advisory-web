import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Stack,
} from "@mui/material";

import "./List.css";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({ places }) => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  return (
    <div className="list-container">
      <Typography variant="h4">
        Restaurants, Hotels & Attractions around you
      </Typography>
      <div className="list-form-container">
        <FormControl className="list-form">
          <InputLabel>Types</InputLabel>
          <Select
            value={type}
            label="Select"
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
        </FormControl>
        <FormControl className="list-form">
          <InputLabel>Rating</InputLabel>
          <Select
            value={rating}
            label="Select"
            onChange={(e) => setRating(e.target.value)}
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Grid container spacing={3} className="list">
        <Grid item xs={12}>
          {places?.map((place, index) => (
            <PlaceDetails place={place} key={index} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default List;
