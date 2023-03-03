import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="ml-64 main px-4 bg-lightBackground text-lightPrimaryText dark:bg-darkBackground dark:text-darkPrimaryText">
      <div className="wrapper  ">
        {/* navbar */}
        <Navbar />

        {/* content */}
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
