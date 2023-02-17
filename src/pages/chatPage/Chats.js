import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PersonCard from "../../components/helper/PersonCard";
import { setCurrentChats } from "../../feature/ChatPageSlice";

const Chats = () => {
  const [chats, setChats] = useState();
  const { user } = useSelector((store) => store.user);
  // const { currentChats } = useSelector((store) => store.chatPage);
  const dispatch = useDispatch();

  const getChat = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/chat/${user.user.id}`
      );
      setChats(data);
      // dispatch(setCurrentChats(data))

      console.log(data);
      // console.log()
    } catch (error) {}
  };
  useEffect(() => {
    getChat();
  }, []);
  if (chats) {
    return (
      <div>
        {chats.map((i, idx) => {
          return <PersonCard key={idx} data={i} />;
        })}
      </div>
    );
  }
  return <h4>loading ....</h4>;
};

export default Chats;
