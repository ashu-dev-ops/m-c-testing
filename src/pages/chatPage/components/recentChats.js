import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PersonCard from "./cards/PersonCard";
import styled from "styled-components";
const RecentChats = () => {
  const [chats, setChats] = useState([]);
  const { user } = useSelector((store) => store.user);

  const getChat = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/chat/${user.userId}`
      );
      setChats(data);
      // dispatch(setCurrentChats(data))

      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    getChat();
    // eslint-disable-next-line
  }, []);
  // eslint-disable-next-line

  if (chats) {
    return (
      <Wrapper>
        {chats.map(({ members, _id }, i) => {
          return <PersonCard key={i} members={members} chatId={_id} />;
        })}
      </Wrapper>
    );
  }
  return <h4>loading ....</h4>;
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;
`;

export default RecentChats;
