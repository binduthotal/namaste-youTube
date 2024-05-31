import React, { useEffect, useState } from 'react';
import { CORS_PROXY, YOUTUBE_VIDEOS_API } from './constants';

export const useGetVideosFromApi = () => {
    const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(CORS_PROXY + YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };
  return videos;
}

