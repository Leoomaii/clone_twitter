import React from "react";
import "../components/Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import { Search } from "@mui/icons-material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { MailOutline } from "@mui/icons-material";
import { BookmarkBorder } from "@mui/icons-material";
import { ListAlt } from "@mui/icons-material";
import { PermIdentity } from "@mui/icons-material";
import { MoreHoriz } from "@mui/icons-material";
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon"/>

      <SidebarOption active Icon={HomeIcon} text="home" />
      <SidebarOption Icon={Search} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutline} text="Notifications" />
      <SidebarOption Icon={BookmarkBorder} text="Messages" />
      <SidebarOption Icon={ListAlt} text="Bookmarks" />
      <SidebarOption Icon={PermIdentity} text="Lists" />
      <SidebarOption Icon={MoreHoriz} text="More" />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
    </div>
  );
}

export default Sidebar;
