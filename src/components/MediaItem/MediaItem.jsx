/**
 * @description this component is a single NASA media item that will be shown in a grid of search result data
 */
import React, { Children } from "react";
// styled components
import { Item } from "../../styles/MediaItem";
// mui components
import { Box, Stack } from "@mui/material";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getImageThumb } from "../../redux/actions/mediaActions";
import { useSelect } from "@mui/base";

// react router
import { Link } from "react-router-dom";
const MediaItem = ({ item }) => {
  const dispatch = useDispatch();
  // state
  // const [thumbImg, setThumbImg] = React.useState([]);

  // const thumb = useSelector((state) => state.imageThumbReducer.thumb);
  // get the img
  // const img =
  //   item.data[0].media_type === "image" && media.length > 1
  //     ? media.filter((item) => item.includes("thumb"))
  //     : "";
  // const img = item.links[0].href;
  // console.log("thumbImg", item.links[0].href);

  // React.useEffect(() => {
  //   dispatch(getImageThumb(item.href));
  // }, []);
  // const thumb = useSelector((state) => state.imageThumbReducer.thumb);
  return (
    <>
      <Link to={`/mediaDetails/${item.data[0].nasa_id}`}>
        <Item>
          <Stack spacing={2} direction="column">
            {/* <Box>{item.data[0].title}</Box> */}
            {/* <Box>{item.href}</Box>  */}
            {/* <Box>{item.links[0].href}</Box> */}
            {/* <Box>{item.data[0].media_type}</Box> */}
            {/* <Box>{item.data[0].center}</Box> */}
            {/*  audio media does not have a key  */}
            {item.data[0].media_type !== "audio" ? (
              <img src={item.links[0].href} alt={""} width={250} height={250} />
            ) : (
              "Audio File"
            )}

            {/* {children} */}
          </Stack>
        </Item>
      </Link>
    </>
  );
};

export default MediaItem;
