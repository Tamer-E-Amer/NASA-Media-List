/**
 * @description reducer for single media item details
 *
 */

import { MEDIADATA } from "../types/types";

export const mediaDetailReducer = (state = { mediaData: [] }, action) => {
  if (action.type === MEDIADATA) {
    return { mediaData: action.data };
  } else {
    return state;
  }
};
