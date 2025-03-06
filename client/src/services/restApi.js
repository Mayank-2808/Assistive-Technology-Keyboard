import axios from "axios";

const API_URL = "http://127.0.0.1:5000"; // change once deployed

export const getTestEndpoint = async () => {
    return axios.get(`${API_URL}/`);
}