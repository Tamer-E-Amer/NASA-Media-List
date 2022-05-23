/**
 * @description this reducer is to update the state of the images and media for certain search
 */

import { IMGTHUMB } from "../types/types";

export const imageThumbReducer = (state = { thumb: [] }, action) => {
  switch (action.type) {
    case IMGTHUMB:
      return { thumb: action.data };

    default:
      return state;
  }
};
