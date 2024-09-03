import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3005/api/v1",
    headers: {
        "Authorization": "Bearer secretme",
    }
});

export default axiosInstance