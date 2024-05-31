import { useEffect, useState } from "react";
import { GET_VIDEO_BY_ID, GOOGLE_API_KEY } from "./constants";

export const useGetVideoByIdApi = (id) => {
    const [videoById, setVideoById] = useState(null);

    useEffect(() => {
        getVideoById(id);
    }, []);

    const getVideoById = async (id) => {
        const data = await fetch(GET_VIDEO_BY_ID + id + "&key=" + GOOGLE_API_KEY);
        const json = await data.json();
        setVideoById(json.items[0]);
    };
    return videoById;
};
