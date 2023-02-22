import SigninButton from "../components/SigninButton";
import { searchIcon } from "./Icons";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="navbar grid grid-cols-4 py-2">
      <div
        className="searchBar lg:col-start-2 lg:col-span-2 col-start-1 col-span-3
                    flex items-center justify-start "
      >
        <input
          type="search"
          className={`bg-transparent outline-none border border-gray-400 dark:border-gray-600 
                    w-full h-full pl-5  focus:border-blue-500 dark:focus:border-blue-500
                    text-lightPrimaryText dark:text-darkPrimaryText rounded-l-full 
                    ${darkMode ? "dark" : "light"}`}
          placeholder="Search"
        />
        <button
          type="button"
          className="bg-transparent outline-none border border-l-0 border-gray-400 dark:border-gray-600
                    w-20 h-full bg-gray-100 dark:bg-darkHover active:shadow-md 
                    text-lightPrimaryText dark:text-darkPrimaryText rounded-r-full
                    hover:bg-gray-200 dark:hover:bg-darkSecondaryBackground"
        >
          {searchIcon}
        </button>
      </div>

      <div className="avatar justify-self-end col-start-4">
        <SigninButton />
      </div>
    </div>
  );
}

export default Navbar;
