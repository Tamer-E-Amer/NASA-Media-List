/**
 * @description this component for the filtering NASA media
 */
import React from "react";
// styled Components
import { FilterMediaWrapper, CompHeader } from "../../styles/MainDataHolder";
// mui components
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { colors } from "../../themes/appTheme";
import { Checkbox } from "@mui/material";
// mui icons
import VideocamIcon from "@mui/icons-material/Videocam";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import ImageIcon from "@mui/icons-material/Image";
const FilterMedia = () => {
  // media types array of objects
  const mediaTypes = [
    {
      id: 1,
      type: "Videos",
      icon: <VideocamIcon sx={{ color: "#FFF" }} />,
    },
    {
      id: 2,
      type: "Audios",
      icon: <GraphicEqIcon sx={{ color: "#FFF" }} />,
    },
    {
      id: 3,
      type: "Images",
      icon: <ImageIcon sx={{ color: "#FFF" }} />,
    },
  ];

  // map throu the media types array
  const FilterListItems = mediaTypes.map((item) => (
    <ListItemButton key={item.id}>
      <Checkbox
        sx={{
          color: `${colors.light_gray}`,
        }}
      />
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.type} />
    </ListItemButton>
  ));
  return (
    <>
      <FilterMediaWrapper
      // subheader={
      //   <ListSubheader
      //     component="div"
      //     sx={{
      //       backgroundColor: `${colors.light_gray}`,
      //       color: "#FFF",
      //       fontSize: 14,
      //     }}
      //   >
      //     Filter search data
      //   </ListSubheader>
      // }
      >
        <CompHeader>About NASA API</CompHeader>
        {FilterListItems}
      </FilterMediaWrapper>
    </>
  );
};

export default FilterMedia;
