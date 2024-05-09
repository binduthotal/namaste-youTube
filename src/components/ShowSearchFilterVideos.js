import React from "react";
import { useDaysElapsed } from "../utils/useDaysElapsed";

const ShowSearchFilterVideos = ({ info }) => {
    const { snippet, statistics } = info;
    const { thumbnails, channelTitle, description, title, publishedAt } = snippet;

    const daysElpased = useDaysElapsed(publishedAt);

    return (
        <div className="m-auto mt-8  mb-8  flex justify-center">
            <img
                className="w-1/3 rounded-xl"
                src={thumbnails?.maxres?.url}
                alt="video"
            />
            <div className="pl-5 w-1/3">
                <ul>
                    <li className="font-semibold text-lg text-wrap">{title}</li>
                    <li className="text-gray-600 font-semibold text-sm">
                        {statistics.viewCount < 1000000
                            ? (statistics.viewCount / 1000).toFixed()
                            : (statistics.viewCount / 1000000).toFixed(1)}
                        {statistics.viewCount < 1000000 ? "K views" : "M views"}
                        <span className="ml-2">{daysElpased} days ago</span>
                    </li>
                    <li className="font-semibold text-gray-600 py-2">{channelTitle}</li>
                    <pre
                        id="preview-text"
                        className="whitespace-pre-wrap py-2 font-sans font-semibold text-sm text-gray-600"
                    >
                        {description.slice(0, 150) + "..."}
                    </pre>
                </ul>
            </div>
        </div>
    );
};

export default ShowSearchFilterVideos;
