import React, { useState, createRef, useEffect } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

import "./List.css";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({
  places,
  loading,
  type,
  childClicked,
  setType,
  rating,
  setRating,
}) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <div className="list-container">
      <Typography variant="h4">
        Restaurants, Hotels & Attractions around you
      </Typography>
      {loading ? (
        <div className="loading">
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
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
            {places?.map((place, index) => (
              <Grid item xs={12} ref={elRefs[index]}>
                <PlaceDetails
                  place={place}
                  key={index}
                  refProp={elRefs[index]}
                  selected={Number(childClicked) === 1}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
