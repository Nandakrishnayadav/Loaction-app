import axios from "axios";

export const API_KEY: string = "bcf35498ef324846968664a710612fb2";

export const http = axios.create({
  baseURL: `https://api.opencagedata.com/geocode/v1/json`
});





