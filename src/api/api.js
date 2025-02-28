import axios from "axios";

const FetchInstance = axios.create({
  baseURL: "https://car-rental-api.goit.global",
  headers: {
    "Content-Type": "application/json",
  },
});

export default FetchInstance;
