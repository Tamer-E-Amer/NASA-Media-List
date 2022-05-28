/**
 * @description component that holds the main part of media item data
 */

import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
// app components
import AboutNasaMedia from "../MainDataHolder/AboutNasaMedia";
// styled components
import {
  MediaItemDetailsWrapper,
  MediaItemDetails,
  MediaImage,
  ItemTitle,
  ActionButton,
} from "../../styles/MediaItemData";
// images
import MediaImg from "../../imgs/media-img.png";
// mui icons
import DownloadIcon from "@mui/icons-material/Download";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// router dom
import { Link } from "react-router-dom";
const MediaItemDataContainer = () => {
  return (
    <>
      <MediaItemDetailsWrapper container spacing={2}>
        {/* about nasa API */}
        <Grid item md={12} lg={4}>
          <AboutNasaMedia />
        </Grid>
        {/* media item details */}
        <Grid item md={12} lg={8}>
          <MediaItemDetails container>
            {/* image */}
            <Grid item md={12} lg={7}>
              <MediaImage src={MediaImg} />
            </Grid>
            {/* title, id ,center and download button */}
            <Grid item md={12} lg={5}>
              <Stack spacing={2}>
                <ItemTitle>
                  NASA's AIRs captures Hurricane Michael off Florida coast
                </ItemTitle>
                <ItemTitle>NASA-Id: NA875597LP6</ItemTitle>
                <ItemTitle>Center: JPL</ItemTitle>
                {/* download button */}
                <ActionButton startIcon={<DownloadIcon />} variant="contained">
                  Download
                </ActionButton>
              </Stack>
            </Grid>
            {/* description and back button */}
            <Grid item md={12} lg={12}>
              <Stack spacing={2}>
                <Typography variant="h6" color="#fff">
                  Description
                </Typography>
                <Typography variant="body2" color="#fff">
                  This image from the Atmospheric Infrared Sounder (AIRS) shows
                  the temperature of clouds or the surface in and around
                  Hurricane Michael as it approaches northwestern Florida around
                  3 AM local time on Tuesday, October 10, 2018. The storm shows
                  all the hallmarks of a powerful, mature hurricane. The large
                  purple area indicates very cold clouds at about -90 F (-68 C)
                  carried high into the atmosphere by deep thunderstorms. These
                  storm clouds are associated with very heavy rainfall. At the
                  center of the cold clouds is the distinct, much warmer eye of
                  the hurricane seen in green. The extensive areas of red away
                  from the storm indicate temperatures of around 60 F (15 C),
                  typical of the surface of the Earth at night. These red areas
                  are mostly cloud-free, with the clear air caused by air motion
                  outward from the cold clouds near the storm center then
                  downward in the surrounding areas. Michael has developed
                  quickly into a dangerous Category 4 storm, with sustained wind
                  of 150 miles per hour. It is currently coming ashore on the
                  Florida Panhandle as the strongest hurricane in that region in
                  recorded history.
                  https://photojournal.jpl.nasa.gov/catalog/PIA22749
                </Typography>
                {/* back Button */}
                <Link to="/">
                  <ActionButton
                    startIcon={<ArrowBackIcon />}
                    variant="contained"
                  >
                    back
                  </ActionButton>
                </Link>
              </Stack>
            </Grid>
          </MediaItemDetails>
        </Grid>
        {/* mediaItem details container */}
      </MediaItemDetailsWrapper>
    </>
  );
};

export default MediaItemDataContainer;
