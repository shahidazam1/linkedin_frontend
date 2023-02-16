import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";

export const headerIconData = [
  {
    name: "Home",
    icon: <HomeIcon fontSize="small" />,
    path: "/feed",
  },
  {
    name: "My Network",
    icon: <PeopleAltIcon fontSize="small" />,
    path: "/my-network",
  },
  {
    name: "Jobs",
    icon: <WorkIcon fontSize="small" />,
    path: "/jobs",
  },
  {
    name: "Messaging",
    icon: <MessageIcon fontSize="small" />,
    path: "/messaging",
  },
  {
    name: "Notifications",
    icon: <NotificationsIcon fontSize="small" />,
    path: "/notifications",
  },
];
