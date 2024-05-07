import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filteredVideoResults } from "../utils/filterSearchSlice";
import { useGetVideosFromApi } from "../utils/useGetVideosFromApi";
import ShowSearchFilterVideos from "./ShowSearchFilterVideos";

const SearchFilterContainer = () => {
    
    const [sugg] = useSearchParams();
    const suggestion = sugg.get("search_query");
    const dispatch = useDispatch();
    const videos = useGetVideosFromApi();

    const filteredSearchVideos = videos.filter((v) => {
        const searchWord = suggestion.replace(/[^a-z0-9]/gi, "").toLowerCase();
        const channelTitle = (v?.snippet?.channelTitle)
            .replace(/[^a-z0-9]/gi, "")
            .toLowerCase();
        const title = (v?.snippet?.title).replace(/[^a-z0-9]/gi, "").toLowerCase();

        return channelTitle.includes(searchWord) || title.includes(searchWord);
    });
    dispatch(filteredVideoResults(filteredSearchVideos));
    console.log(filteredSearchVideos);

    return filteredSearchVideos.map((searchVideos) => (
        <Link to={"/watch?v=" + searchVideos.id} key={searchVideos.id}>
            <ShowSearchFilterVideos info={searchVideos} />
        </Link>
    ));
};

export default SearchFilterContainer;
