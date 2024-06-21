import axiosInatance from "../../utils/axiosInstance"

export const fetchTags = async() => {
    const res = await axiosInatance.get("/tags");
    return res.data;
}