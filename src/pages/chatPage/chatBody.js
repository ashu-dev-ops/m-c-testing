import React from "react";
// import { useSelector } from "react-redux";
import RecentChats from "./components/recentChats";
import GroupChats from "./components/GroupChats";
import SearchUsers from "./components/SearchUsers";

const ChatBody = (props) => {
  return (
    <>
      {
        props.body === "recentChats" ?
        <RecentChats/> :
        props.body === "groupChats" ? 
          <GroupChats/>:
          <SearchUsers />
      }
    </>
  )
};

export default ChatBody;
