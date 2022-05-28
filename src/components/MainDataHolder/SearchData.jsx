/**
 * @description This components shows the Search result
 */

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
// App components
import { MediaItem, PaginationCom, ReactPaginateCom } from "../../components";
// styled components
import { SearchDataWrapper } from "../../styles/MainDataHolder";
// useSelector and useDispatch
import { useSelector, useDispatch } from "react-redux";
// actions
import { getAllMedia, getImageThumb } from "../../redux/actions/mediaActions";

const SearchData = () => {
  // media state
  const [mediaList, setMediaList] = React.useState([]);
  // isLoadimg state
  const dispatch = useDispatch();
  // get nasa media
  const nasaMedia = useSelector((state) => state.nasaMediaReducer.media);
  const mediaCount = useSelector((state) => state.nasaMediaReducer.itemsCount);
  const word = useSelector((state) => state.nasaMediaReducer.word);
  // get all media for the first run of the page
  React.useEffect(() => {
    dispatch(getAllMedia());
  }, []);

  // set the media data to the state
  React.useEffect(() => {
    setMediaList(nasaMedia);
  }, [nasaMedia]);
  console.log("number of media items", mediaList.length);
  // media items
  // const list = [mediaList.collection.items];
  // console.log("media List", mediaList);
  const mediaItems = mediaList.map((item, index) => (
    <Grid item key={index}>
      <MediaItem item={item} />
    </Grid>
  ));

  return (
    <>
      <SearchDataWrapper>
        {/* search title */}
        <Box>
          <Typography color="#FFF" variant="h6">
            Search For {word}
          </Typography>
          <Typography variant="body2" component="div">
            {mediaCount} results found
          </Typography>
          {/* search results Grid */}

          <Grid
            container
            spacing={2}
            sx={{ margin: "1rem 0", padding: "0 1rem" }}
            alignItems="center"
            justifyContent="center"
          >
            {mediaItems.length > 1 ? mediaItems : `There is no Media " `}
          </Grid>
        </Box>
        <PaginationCom />
        {/* <ReactPaginateCom /> */}
        {/* search results */}
      </SearchDataWrapper>
    </>
  );
};

export default SearchData;
