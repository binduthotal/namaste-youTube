import React from "react";

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { thumbnails, channelTitle, title } = snippet;
    return (
        <div className="h-50 col-span-1 h-1/4">
            <img className="rounded-lg" src={thumbnails?.medium?.url} alt="video" />
            <ul className="w-fit">
                <li className=" py-2 font-semibold text-wrap">
                    {title.length > 55 ? title.slice(0, 45) + "..." : title}
                </li>
                <li className="font-semibold text-gray-500">{channelTitle}</li>
                <li className="font-semibold">
                    {(statistics.viewCount < 1000000
                        ? (statistics.viewCount / 1000).toFixed()
                        : (statistics.viewCount / 1000000).toFixed(1)
                    )}
                    {
                        statistics.viewCount < 1000000
                        ? "K views"
                        : "M views"
                    }
                </li>
            </ul>
        </div>
    );
};

export default VideoCard;
