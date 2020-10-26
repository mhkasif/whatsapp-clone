import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./sidebar.scss";
import { MoreVert, DonutLarge, Chat, SearchOutlined } from "@material-ui/icons";
import SidebarChat from "../SidebarChat/SidebarChat";
import db from "../firebase";

const Sidebar = () => {
  const [rooms,setRooms]=useState([])
  useEffect(()=>{
    db.collection('rooms').onSnapshot(snapshot=>{
      setRooms(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data()
      })))
    })
  },[])
  return (
    <div className="sidebar">
      <div className="sidebar__header">

          <Avatar />

        <div className="sidebar__header-icons">
          <IconButton>
            <DonutLarge />
            </IconButton>
            <IconButton>
            <Chat />

            </IconButton>
            <IconButton>
            <MoreVert />
            </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
      <div className="sidebar__search-container">
      <SearchOutlined />
    <input type="text" name="search" id="search" placeholder='search or start new chat s' />
      </div>

      </div>
      <div className="sidebar__chat">
      <SidebarChat addNewChat />
      <SidebarChat />

      <SidebarChat />
      <SidebarChat />
      <SidebarChat />
      <SidebarChat />



      </div>
    </div>
  );
};

export default Sidebar;
