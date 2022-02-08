import React from "react";
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const PlaceDetails = ({ place }) => {
  return (
    <>
      {place.name && (
        <Card sx={{ m: 1 }}>
          <CardMedia
            component="img"
            sx={{ maxHeight: 250 }}
            image={
              place?.photo
                ? place.photo.images.large.url
                : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
            }
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {place.name ? place.name : "Unknown"}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              {place.rating && <Rating value={Number(place.rating)} />}
              {place.num_reviews && (
                <Typography variant="subtitle2">
                  out of {place.num_reviews} reviews
                </Typography>
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="subtitle1">Price</Typography>

              <Typography variant="subtitle2">{place?.price_level}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {place.ranking && (
                <Typography gutterButtom variant="subtitle1">
                  Ranking
                </Typography>
              )}

              <Typography gutterButtom variant="subtitle2">
                {place?.ranking}
              </Typography>
            </Box>
            {place?.award?.map((award) => (
              <Box
                sx={{
                  my: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <img src={award.images.small} alt={award.display_name} />
                <Typography
                  gutterButtom
                  variant="subtitle2"
                  color="textSecondary"
                >
                  {award.display_name}
                </Typography>
              </Box>
            ))}
            {place?.cuisine?.map(({ name }) => (
              <Chip
                sx={{ mr: 0.5, my: 0.5 }}
                key={name}
                size="small"
                label={name}
              />
            ))}
            {place?.address && (
              <Box
                sx={{
                  display: "flex",
                  mt: 1,
                }}
              >
                <LocationOnOutlined color="grey" sx={{ mr: 1 }} />
                <Typography variant="subtitle2" color="textSecondary">
                  {place.address}
                </Typography>
              </Box>
            )}
            {place?.phone && (
              <Box
                sx={{
                  display: "flex",

                  mt: 1,
                }}
              >
                <PhoneIcon color="grey" sx={{ mr: 1 }} />
                <Typography variant="subtitle2" color="textSecondary">
                  {place.phone}
                </Typography>
              </Box>
            )}
          </CardContent>
          <CardActions>
            {place?.web_url && (
              <Button
                size="small"
                color="primary"
                onClick={() => window.open(place.web_url)}
              >
                Trip Advisor
              </Button>
            )}
            {place?.website && (
              <Button
                size="small"
                color="primary"
                onClick={() => window.open(place.website)}
              >
                Website
              </Button>
            )}
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default PlaceDetails;
