import React from "react";
import GoogleMapReact from "google-map-react";
import { Typography, Paper, useMediaQuery } from "@mui/material";
import Rating from "@mui/material/Rating";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import "./Map.css";
import { Place } from "@mui/icons-material";

const Map = ({
  coordinates,
  setCoordinates,
  setBounds,
  places,
  setChildClicked,
}) => {
  const isLaptop = useMediaQuery("(min-width:768px)");

  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAOsZ0xYf8ziBmHXNqZDAf8yJp59VLH7_g" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, index) => (
          <div
            className="marker-container"
            key={index}
            lat={Number(place?.latitude)}
            lng={Number(place?.longitude)}
          >
            {!isLaptop ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <>
                {place.name && (
                  <Paper className="map_paper">
                    <Typography variant="subtitle">{place.name}</Typography>
                    <img
                      className="map_paper_img"
                      src={
                        place.photo
                          ? place.photo.images.large.url
                          : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                      }
                    />
                    <Rating size="small" value={place.rating} readOnly />
                  </Paper>
                )}
              </>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
