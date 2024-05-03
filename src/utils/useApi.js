import { useEffect, useState } from "react";

export const useApi = (id) => {
    const GOOGLE_API_KEY = "AIzaSyApNATN77n93SeEl45cxrx0l2APVvtAI8k";
    const [videoById, setVideoById] = useState(null);

    useEffect(() => {
        getVideoById(id);
    }, []);

    const getVideoById = async (id) => {
        const data = await fetch(
            "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
            id +
            "&key=" +
            GOOGLE_API_KEY
        );
        const json = await data.json();
        console.log(json);
        setVideoById(json.items[0]);
    };
    return videoById;
};
