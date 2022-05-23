/**
 * @description this file has a set of request method to deal with the API endPoints
 */

// axios
import axios from "axios";

// Base URL

const BASE_URL = "https://images-api.nasa.gov/";

// getMedia method

export const getMedia = axios.create({
  baseURL: BASE_URL,
});
