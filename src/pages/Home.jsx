import Navbar from "../components/Navbar";
import VideoCard from "../components/VideoCard";

function Home() {
  return (
    <div className="ml-64 main px-4 bg-lightBackground text-lightPrimaryText dark:bg-darkBackground dark:text-darkPrimaryText">
      <div className="wrapper  ">
        {/* navbar */}
        <Navbar />

        {/* content */}
        <div className="cards mt-4 grid gap-x-4 gap-y-8 lg:grid-cols-4 grid-cols-2">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
