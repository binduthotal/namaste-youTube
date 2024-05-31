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
      className=" grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5"
    >
      {videos.map((video) => (
        <Link className="w-fit" to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
    </>
  );
};

export default VideoContainer;
