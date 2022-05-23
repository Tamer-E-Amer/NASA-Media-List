/**
 * @description reducer for the nasa media state
 */
// types
import { ALLMEDIA, IMGTHUMB } from "../types/types";
// default value
const mediaDefaultValue = { media: [], itemsCount: 0, word: "" };

export const nasaMediaReducer = (state = mediaDefaultValue, action) => {
  switch (action.type) {
    case ALLMEDIA:
      return {
        media: action.data,
        itemsCount: action.count,
        word: action.word,
      };
    // case IMGTHUMB:
    //   return { media: action.data };

    default:
      return state;
  }
};
