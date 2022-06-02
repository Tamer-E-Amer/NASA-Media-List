/**
 * @description reducer actions
 */

import { ALLMEDIA, IMGTHUMB, ITEMDETAILS, SEARCHMEDIA } from "../types/types";
// request method
import { getMedia } from "../../requestMethods";

// function to return all nasa media
export const getAllMedia = () => {
  const word = "nasa";
  // get nasa media
  return async (dispatch) => {
    const res = await getMedia.get(`search?q=${word}`);
    dispatch({
      type: ALLMEDIA,
      data: res.data.collection.items,
      count: res.data.collection.metadata.total_hits,
      word: word,
    });
  };
};

// function to search the nasa media data

export const searchNasaMedia = (word) => {
  return async (dispatch) => {
    const res = await getMedia.get(`search?q=${word}`);

    dispatch({
      type: ALLMEDIA,
      data: res.data.collection.items,
      count: res.data.collection.metadata.total_hits,
      word: word,
    });
  };
};
// function to search the nasa media data

export const searchNasaMediaWithPaginat = (word, pageNo) => {
  return async (dispatch) => {
    const res = await getMedia.get(`search?q=${word}&page=${pageNo}`);

    dispatch({
      type: ALLMEDIA,
      data: res.data.collection.items,
      count: res.data.collection.metadata.total_hits,
      word: word,
    });
  };
};

// get image thumb
// the images and videos link in the API is stored in a json file. link of this file is provided as a value of the key "href" in the res.data.collection.items, so we should get the data in this file first in order to show the image thumb in the search result
export const getImageThumb = (jsonLink) => {
  return async (dispatch) => {
    const res = await getMedia.get(jsonLink);
    console.log("listOfThumbs", res.data);
    // const thumb = res.data.filter((item, index) => item.includes("thumb"));
    console.log("viewedThumb", res.data);
    dispatch({ type: IMGTHUMB, data: res.data });
  };
};

// mediaItem details

export const getMediaItemDetails = (nasa_id) => {
  return async (dispatch) => {
    const res = await getMedia.get(`search?nasa_id=${nasa_id}`);
    dispatch({ type: ITEMDETAILS, data: res.data.collection.items[0] });
    //test
    console.log(
      "details from action method",
      res.data.collection.items[0].data[0]
    );
  };
};
