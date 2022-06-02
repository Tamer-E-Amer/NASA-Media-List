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
import audioImg from "../../imgs/audio.png";
// mui icons
import DownloadIcon from "@mui/icons-material/Download";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// router dom
import { Link, useParams } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getMediaItemDetails } from "../../redux/actions/mediaActions";
const MediaItemDataContainer = () => {
  // get nasa_id params
  const params = useParams();
  const nasa_id = params.id;
  const dispatch = useDispatch();

  // get the global itemDetails state
  const itemDetailsData = useSelector(
    (state) => state.itemDetailsReducer.mediaDetails
  );
  // run getMediaItemDetails
  React.useEffect(() => {
    dispatch(getMediaItemDetails(nasa_id));
  }, []);

  // details state

  // test itemdetails
  console.log("itemDetails ->", itemDetailsData);

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
              <MediaImage
                src={
                  itemDetailsData.data[0].media_type === "audio"
                    ? audioImg
                    : itemDetailsData.links[0].href
                }
              />
            </Grid>
            {/* title, id ,center and download button */}
            <Grid item md={12} lg={5}>
              <Stack spacing={2}>
                <ItemTitle>{itemDetailsData.data[0].title}</ItemTitle>
                <ItemTitle>
                  NASA-Id: {itemDetailsData.data[0].nasa_id}
                </ItemTitle>
                <ItemTitle>
                  Media type: {itemDetailsData.data[0].media_type}
                </ItemTitle>
                <ItemTitle>Center:{itemDetailsData.data[0].center}</ItemTitle>
                {/* appear location and photographer only when data is exist */}
                {itemDetailsData.data[0].location && (
                  <ItemTitle>
                    Location:{itemDetailsData.data[0].location}
                  </ItemTitle>
                )}

                {itemDetailsData.data[0].photographer && (
                  <ItemTitle>
                    Photographer:{itemDetailsData.data[0].photographer}
                  </ItemTitle>
                )}

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
                  {itemDetailsData.data[0].description}
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
