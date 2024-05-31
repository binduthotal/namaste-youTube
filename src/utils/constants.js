export const btnList = [
    "All",
    "Live",
    "Gaming",
    "Recently updated",
    "Cooking",
    "Music",
    "Movies",
    "Indian cusine",
    "News",
];

export const commentsData = [
    {
        id: "1",
        name: "Bindu1",
        text: "lorem ipsum dolor sit amet",
        reply: [
            {
                id: "11",
                name: "Bindu11",
                text: "lorem ipsum dolor sit amet",
                reply: [
                    {
                        id: "111",
                        name: "Bindu111",
                        text: "lorem ipsum dolor sit amet",
                        reply: [
                            {
                                id: "1111",
                                name: "Bindu1111",
                                text: "lorem ipsum dolor sit amet",
                                reply: [],
                            },
                        ],
                    },
                    {
                        id: "112",
                        name: "Bindu112",
                        text: "lorem ipsum dolor sit amet",
                        reply: [],
                    },
                    {
                        id: "113",
                        name: "Bindu113",
                        text: "lorem ipsum dolor sit amet",
                        reply: [],
                    },
                ],
            },
            {
                id: "12",
                name: "Bindu12",
                text: "lorem ipsum dolor sit amet",
                reply: [],
            },
            {
                id: "13",
                name: "Bindu13",
                text: "lorem ipsum dolor sit amet",
                reply: [],
            },
        ],
    },
    {
        id: "2",
        name: "Bindu2",
        text: "lorem ipsum dolor sit amet",
        reply: [],
    },
    {
        id: "3",
        name: "Bindu3",
        text: "lorem ipsum dolor sit amet",
        reply: [],
    },
    {
        id: "4",
        name: "Bindu4",
        text: "lorem ipsum dolor sit amet",
        reply: [],
    },
];

export const OFFSET_LIVE_CHAT_COUNT = 10;

export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_VIDEOS_API =
  "https://thingproxy.freeboard.io/fetch/?https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const GET_VIDEO_BY_ID =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const YOUTUBE_SEARCH_SUGGESTION_API =
    "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


export const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";