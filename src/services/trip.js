import axios from "axios";

const API_BASE = "http://localhost:3006";

export const getTrips = () => {
    return axios.get(`${API_BASE}/trips`);
}