import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const icons = {
  menu: <MenuRoundedIcon />,
  home: <HomeOutlinedIcon />,
  explore: <ExploreOutlinedIcon />,
  subscriptions: <SubscriptionsOutlinedIcon />,
  library: <VideoLibraryOutlinedIcon />,
  history: <HistoryOutlinedIcon />,
  trending: <WhatshotOutlinedIcon />,
  music: <MusicNoteIcon />,
  gaming: <SportsEsportsOutlinedIcon />,
  sports: <EmojiEventsOutlinedIcon />,
  settings: <SettingsOutlinedIcon />,
  report: <FlagOutlinedIcon />,
  help: <HelpOutlineOutlinedIcon />,
  feedback: <FeedbackOutlinedIcon />,
  account: <AccountCircleOutlinedIcon />,
  darkMode: <DarkModeOutlinedIcon />,
  search: <SearchRoundedIcon />,
};
export const menuItems = [
  {
    title: "Home",
    icon: icons.home,
  },
  {
    title: "Explore",
    icon: icons.explore,
  },
  {
    title: "Subscriptions",
    icon: icons.subscriptions,
  },
  {
    title: "Library",
    icon: icons.library,
  },
  {
    title: "History",
    icon: icons.history,
  },
  {
    title: "Trending",
    icon: icons.trending,
  },
  {
    title: "Music",
    icon: icons.music,
  },
  {
    title: "Gaming",
    icon: icons.gaming,
  },
  {
    title: "Sports",
    icon: icons.sports,
  },
  {
    title: "Settings",
    icon: icons.settings,
  },
  { title: "Report", icon: icons.report },
  { title: "Help", icon: icons.help },
  { title: "Feedback", icon: icons.feedback },
];

export const menuIcon = icons.menu;
export const accountIcon = icons.account;
export const darkModeIcon = icons.darkMode;
export const searchIcon = icons.search;
