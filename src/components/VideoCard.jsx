import Image from "../assets/image.jpg";
function VideoCard() {
  return (
    <div className="card flex flex-col gap-4">
      <div className="thumbnail cursor-pointer">
        <img
          src={Image}
          className="w-full h-full object-cover rounded-xl"
          alt="thumbnail"
        />
      </div>

      <div className="info flex flex-row items-start gap-3 justify-start w-full">
        <div className="channel-avatar w-10 flex-none cursor-pointer">
          <img src={Image} alt="channel" className="rounded-full w-10 h-10" />
        </div>
        <div className="details">
          <div className="title font-bold text-sm h-10 cursor-pointer">
            <p className="line-clamp-2">
              Extremely long title that will be clipped to 2 lines and then the
              rest will be hidden with ellipsis and overflow-y-hidden class on
              the Extremely long title that will be clipped to 2 lines and then
              the rest will be hidden with ellipsis and overflow-y-hidden class
              on the
            </p>
          </div>
          <div className="channel my-1 text-lightSecondaryText dark:text-darkSecondaryText text-xs hover:font-semibold cursor-pointer">
            Channel Name
          </div>
          <div className="stats text-xs text-lightSecondaryText dark:text-darkSecondaryText tracking-wider">
            <span className="views">2.4k views</span>
            <span className="dot"> • </span>
            <span className="date">2 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
