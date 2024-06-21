import axiosInatance from "../../utils/axiosInstance"


export const fetchVideos = async(tags, search) => {
    let queryString = "";

    if (tags?.length > 0) {
        queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
    }

    if (search !== "") {
        queryString += `&q=${search}`;
    }

    const res = await axiosInatance.get(`/videos/?${queryString}`);
    return res.data;
}
