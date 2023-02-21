import Logo from "../assets/logo.png";
import MenuItem from "./MenuItem";
import { menuItems, menuIcon, accountIcon, darkModeIcon } from "./Icons";
import { useEffect, useState } from "react";

const Hr = () => (
  <hr className="my-3 border-0 h-px bg-lightHover dark:bg-darkHover" />
);

function Sidebar() {
  const [darkMode, setDarkMode] = useState(true);

  const switchTheme = () => {
    // document.documentElement.classList.toggle("dark");
    const root = document.documentElement;

    root.classList.toggle("dark");
    setDarkMode((prev) => {
      localStorage.theme = prev ? "light" : "dark";
      return !prev;
    });
  };

  useEffect(() => {
    const root = document.documentElement;
    const lightBackground = "#f9f9f9";
    const lightThumb = "#606060";
    const darkBackground = "#181818";
    const darkThumb = "#ababaa";
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      root.classList.add("dark");
      localStorage.theme = "dark";
      root.style.setProperty("--scrollbar-track-color", darkBackground);
      root.style.setProperty("--scrollbar-thumb-color", darkThumb);
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
      root.style.setProperty("--scrollbar-track-color", lightBackground);
      root.style.setProperty("--scrollbar-thumb-color", lightThumb);
    }
  }, [darkMode]);

  return (
    <div
      className="sidebar bg-lightSecondaryBackground dark:bg-darkSecondaryBackground w-64 h-screen 
                  text-lightPrimaryText dark:text-darkPrimaryText
                    fixed left-0 top-0 bottom-0 z-2"
    >
      <div className="wrapper pl-2 h-full">
        <div
          className="logo flex items-center 
                    px-4 p-2"
        >
          {menuIcon}
          <img src={Logo} className="w-7 ml-5 mr-1" alt="logo" />
          <span className="text-xl font-bold -tracking-widest">YouTube</span>
        </div>

        <div className="menu-wrapper h-full">
          <div className="menu py-2 px-2 overflow-y-auto h-full">
            <MenuItem title={menuItems[0].title} icon={menuItems[0].icon} />
            <MenuItem title={menuItems[1].title} icon={menuItems[1].icon} />
            <MenuItem title={menuItems[2].title} icon={menuItems[2].icon} />
            <Hr />
            <MenuItem title={menuItems[3].title} icon={menuItems[3].icon} />
            <MenuItem title={menuItems[4].title} icon={menuItems[4].icon} />
            <div className="darkMode" onClick={switchTheme}>
              <MenuItem title={"Switch Themes"} icon={darkModeIcon} />
            </div>

            <Hr />
            {/* sign in button section */}
            <div className="signin px-4 text-sm">
              <span>Sign in to like videos, comment, and subscribe.</span>
              <div
                className="button flex items-center gap-2 mt-2 py-2 px-3 w-max
                            border border-lightHover dark:border-darkHover rounded-full text-blue-500
                            cursor-pointer hover:bg-blue-400 hover:bg-opacity-20 font-bold text-sm
                            "
              >
                {accountIcon}
                <span>Sign in</span>
              </div>
            </div>
            <Hr />
            <MenuItem title={menuItems[5].title} icon={menuItems[5].icon} />
            <MenuItem title={menuItems[6].title} icon={menuItems[6].icon} />
            <MenuItem title={menuItems[7].title} icon={menuItems[7].icon} />
            <MenuItem title={menuItems[8].title} icon={menuItems[8].icon} />
            <Hr />
            <MenuItem title={menuItems[9].title} icon={menuItems[9].icon} />
            <MenuItem title={menuItems[10].title} icon={menuItems[10].icon} />
            <MenuItem title={menuItems[11].title} icon={menuItems[11].icon} />
            <MenuItem title={menuItems[12].title} icon={menuItems[12].icon} />
            <Hr />
            {/* copyright section */}
            <div className="flex flex-col gap-4 pb-16 text-xs px-2 text-lightSecondaryText dark:text-darkSecondaryText font-bold">
              <div className="flex flex-wrap gap-3 leading-3">
                <span className="cursor-pointer">About</span>
                <span className="cursor-pointer">Press</span>
                <span className="cursor-pointer">Copyright</span>
                <span className="cursor-pointer">Contact us</span>
                <span className="cursor-pointer">Creators</span>
                <span className="cursor-pointer">Advertise</span>
                <span className="cursor-pointer">Developers</span>
              </div>
              <div className="flex flex-wrap gap-3 leading-3">
                <span className="cursor-pointer">Terms</span>
                <span className="cursor-pointer">Privacy</span>
                <span className="cursor-pointer">Policy & Safety</span>
                <span className="cursor-pointer">How YouTube works</span>
                <span className="cursor-pointer">Test new features</span>
              </div>
              <div>
                <span className="font-medium">© 2023 Google LLC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
