import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useGetVideosFromApi } from "../utils/useGetVideosFromApi";
import ButtonList from "./ButtonList";

const VideoContainer = () => {

  const videos = useGetVideosFromApi();

  return (
    <>
    <ButtonList/>
    <div
      id="videoContainer"
      className=" grid grid-cols-6 md:grid-cols-3 lg:grid-cols-5 min-[320px]:grid-cols-2 gap-9 mt-5"
    >
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
    </>
  );
};

export default VideoContainer;
