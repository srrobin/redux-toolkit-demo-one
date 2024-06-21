import axios from "axios"

const BASE_URL = "http://localhost:9000"
const  axiosInatance = axios.create({baseURL: BASE_URL});

export default axiosInatance;