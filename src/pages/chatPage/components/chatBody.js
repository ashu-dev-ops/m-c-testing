import React from "react";
import { useSelector } from "react-redux";
import RecentChats from "./sub components/recentChats";
import GroupChats from "./sub components/GroupChats";
import SearchUsers from "./sub components/SearchUsers";

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
