import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/sideBarSlice";
import { useSearchParams } from "react-router-dom";
import { useApi } from "../utils/useApi";
import { useDaysElapsed } from "../utils/useDaysElapsed";
import CommentsContainer from "./CommentsContainer";
import { clearFilter } from "../utils/filterSearchSlice";
import LiveChatContainer from "./LiveChatContainer";

const WatchVideoContainer = () => {
    const [videoId] = useSearchParams();
    const video = useApi(videoId.get("v"));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
        dispatch(clearFilter());
    }, []);

    const { snippet, statistics } = video || {};
    const { channelTitle, title, description, publishedAt } = snippet || {};

    const daysElpased = useDaysElapsed(publishedAt);

    // Show More text in description
    const previewLength = 220;
    const previewText = description?.substring(0, previewLength);
    const moreText = description?.substring(previewLength);

    const toggleText = () => {
        const moreSpan = document.getElementById("more-text");
        const toggleBtn = document.getElementById("toggle-button");

        if (moreSpan.style.display === "none") {
            moreSpan.style.display = "block";
            toggleBtn.textContent = "Show Less";
        } else {
            moreSpan.style.display = "none";
            toggleBtn.textContent = "...more";
        }
    };

    return (
        <div id="watchContainer" className="mb-8">
            <div className="ml-5 pr-5 relative mt-8 grid grid-cols-12 gap-5  mb-8">
                <div className="col-span-8">
                    <iframe
                        className="rounded-lg w-full lg:h-[600px]  md:h-[450px] sm:h-[350px]"
                        src={"https://www.youtube.com/embed/" + videoId.get("v")}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                    <h1 className="font-bold text-xl my-2">{title}</h1>
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex flex-wrap">
                            <h1 className="font-semibold text-lg">{channelTitle}</h1>
                            <button className="px-3 py-1 ml-10 bg-black rounded-2xl text-white font-semibold">
                                Subscribe
                            </button>
                        </div>
                        <div className="flex flex-wrap items-baseline">
                            <button className="rounded-2xl bg-gray-200 py-1 px-4 rounded-r-none border-solid border-r-2 border-gray-300">
                                👍 {(statistics?.likeCount / 1000).toFixed()}k
                            </button>
                            <button className="rounded-2xl bg-gray-200 py-1 px-4 rounded-l-none mr-2">
                                👎
                            </button>
                            <button className="rounded-2xl bg-gray-200 py-1 px-4 m-2 font-semibold ">
                                &#xf064; Share
                            </button>
                            <button className="rounded-2xl bg-gray-200 py-1 px-4 m-2 font-semibold">
                                Download
                            </button>
                            <button className="rounded-2xl bg-gray-200 py-1 px-4  m-2 font-semibold">
                                Save
                            </button>
                            <button className="rounded-2xl bg-gray-200  font-bold  text-center  px-2.5 py-1">
                                ...
                            </button>
                        </div>
                    </div>
                    <div className="rounded-lg bg-gray-200 my-2 p-3">
                        <div className="flex  py-2">
                            <p className="font-semibold mr-2">
                                {statistics?.viewCount} views
                            </p>
                            <p className="font-semibold mr-2">{daysElpased} days ago</p>
                        </div>
                        <pre
                            id="preview-text"
                            className=" inline-block whitespace-pre-wrap py-2 font-sans font-medium text-gray-600"
                        >
                            {previewText}
                        </pre>
                        {description?.length >= 220 && (
                            <>
                                <pre
                                    id="more-text"
                                    className="whitespace-pre-wrap py-2 font-sans font-medium text-gray-600 hidden"
                                >
                                    {moreText}
                                </pre>
                                <button
                                    id="toggle-button"
                                    className="inline-block font-bold text-gray-700"
                                    onClick={toggleText}
                                >
                                    ...more
                                </button>
                            </>
                        )}
                    </div>
                    <div className="my-4">
                        <p className="font-bold text-xl">
                            {Number(statistics?.commentCount).toLocaleString()} Comments
                        </p>
                    </div>
                    <CommentsContainer />
                </div>
                <div className="col-span-4">
                    <LiveChatContainer/>
                    <h1 className="text-center font-bold">Auto Suggestions</h1>
                </div>
            </div>
        </div>
    );
};

export default WatchVideoContainer;
