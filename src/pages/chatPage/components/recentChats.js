import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PersonCard from "./cards/PersonCard";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
const RecentChats = () => {
  const [chats, setChats] = useState([]);
  const { user } = useSelector((store) => store.user);

  const getChat = async () => {
    try {
      const { data } = await axios.get(
        `https://mern-chat-back.onrender.com/api/chat/${user.userId}`
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
  console.log(typeof chats);
  if (chats.length < 1) {
    return (
      <Wrapper>
        <h4>
          sorry no recent chats <br /> <br /> click to on <BsSearch /> to fing
          user
        </h4>
        ;
      </Wrapper>
    );
  }
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
  h4 {
    color: white;
    margin: 1rem;
    text-align: center;
    line-height: 1rem;
  }
`;

export default RecentChats;
