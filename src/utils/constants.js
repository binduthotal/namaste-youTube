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
    "New to you",
    "Featured",
    "Tending",
    "Telugu cinema",
    "Tamil cinema",
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

const GOOGLE_API_KEY = "AIzaSyApNATN77n93SeEl45cxrx0l2APVvtAI8k";

export const YOUTUBE_VIDEOS_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
    GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
    "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
