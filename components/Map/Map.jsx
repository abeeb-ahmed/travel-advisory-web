import React from "react";
import GoogleMapReact from "google-map-react";
import { Typography, Paper, useMediaQuery } from "@mui/material";
import Rating from "@mui/material/Rating";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import "./Map.css";

const Map = ({
  coordinates,
  setCoordinates,
  setBounds,
  places,
  setChildClicked,
  weatherData,
}) => {
  const isLaptop = useMediaQuery("(min-width:768px)");

  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
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
                      alt={place.name}
                    />
                    {place.rating && (
                      <Rating
                        size="small"
                        value={Number(place.rating)}
                        readOnly
                      />
                    )}
                  </Paper>
                )}
              </>
            )}
          </div>
        ))}
        {weatherData?.list?.length &&
          weatherData.list.map((data, i) => (
            <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt=""
                height="70px"
              />
            </div>
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
