import { Link } from "react-router-dom";
import Image from "../assets/image.jpg";

function RecommendedCard() {
  return (
    <Link to="/video">
      <div className="recommendedCard flex flex-row w-full h-28 gap-2">
        <div className="thumbnail w-3/6">
          <img
            src={Image}
            alt="thumbnail"
            className="w-full rounded-xl h-full"
          />
        </div>
        <div className="info flex flex-col w-3/6 my-2">
          <div className="title font-bold text-sm h-10 cursor-pointer">
            <p className="line-clamp-2">
              Extremely long title that will be clipped to 2 lines and then the
              rest will be hidden with ellipsis and overflow-y-hidden class on
              the
            </p>
          </div>
          <div className="channel my-1 text-lightSecondaryText dark:text-darkSecondaryText text-xs hover:font-semibold cursor-pointer">
            Channel Name
          </div>
          <div className="stats text-xs text-lightSecondaryText dark:text-darkSecondaryText tracking-wider">
            <span className="views">844k views</span>
            <span className="dot"> • </span>
            <span className="date">2 days ago</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RecommendedCard;
