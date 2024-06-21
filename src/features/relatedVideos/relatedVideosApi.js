// import axiosInatance from "../../utils/axiosInstance"

// export const fetchRelatedVideos = async({tags,id}) => {
//     const limit = 3 ; 
//     const queryString = tags?.length > 0 ? 
//     tags?.map((tag) => `tags_like=${tag}.join("&")`) + `&id_ne=${id}&_limit=${limit}` : `&id_ne=${id}&_limit=${limit}`;
    
//     const res = await axiosInatance.get(`/videos?${queryString}`);
//     return res.data;
// }

import axiosInatance from "../../utils/axiosInstance"

export const fetchRelatedVideos = async ({ tags, id }) => {
    const limit = 3;
    let queryString =
        tags?.length > 0
            ? tags.map((tag) => `tags_like=${tag}`).join("&") +
              `&id_ne=${id}&_limit=${limit}`
            : `id_ne=${id}&_limit=${limit}`;

    const response = await axiosInatance.get(`/videos?${queryString}`);

    return response.data;
};
