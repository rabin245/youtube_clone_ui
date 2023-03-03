// import { Player } from "video-react";
import ReactPlayer from "react-player";
import RecommendedCard from "../components/RecommendedCard";

function Video() {
  return (
    <div className="videoContainer mt-4 flex">
      <div className="videoPlayerWrapper relative w-4/6 pt-[56.25%]">
        <ReactPlayer
          className="videoPlayer absolute top-0 left-0 "
          url={"https://www.youtube.com/watch?v=H7bzyggFYSE"}
          controls={true}
          height={"600px"}
          width={"100%"}
        />
      </div>
      <div
        className="recommendedContainer
                      ml-6 flex flex-col gap-4 w-2/6"
      >
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
      </div>
    </div>
  );
}

export default Video;
