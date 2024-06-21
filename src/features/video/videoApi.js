import axiosInatance from "../../utils/axiosInstance"

export const fetchVideo = async(id) => {
     const res = await axiosInatance.get(`/videos/${id}`);
     return res.data;
}