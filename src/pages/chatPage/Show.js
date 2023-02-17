import React from "react";
import { useSelector } from "react-redux";
import Chats from "./Chats";
import GroupChat from "./GroupChat";
import SearchUser from "./SearchUser";

const Show = () => {
  const { search, group, chats } = useSelector((store) => store.chatpage);
  console.log(search,group,chats)
  if (search)
    return (
      <div>
        
       
       
        <SearchUser />
      </div>
    );
  if (chats)
    return (
      <div>
        <h1>chats</h1>
        <Chats />
      </div>
    );
  if (group)
    return (
      <div className="">
        <h2>Group Chats</h2>
        <GroupChat />
      </div>
    );
};

export default Show;
