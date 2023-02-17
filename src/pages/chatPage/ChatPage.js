import React, { useState } from "react";
import styled from "styled-components";
import PersonCard from "../../components/helper/PersonCard";
import { BiGroup } from "react-icons/bi";
import { BsFillChatDotsFill, BsSearch } from "react-icons/bs";
import Show from "./Show";
import { useDispatch, useSelector } from "react-redux";
// import { handleChatBar } from "../../feature/ChatPageSlice";
import {
  handleChatGroup,
  handleChatPeople,
  handleChatSearch,
} from "../../feature/ChatPageSlice";
import { store } from "../../store";
import CurrentChat from "./CurrentChat";
const ChatPage = () => {
  const personData = [
    {
      name: "rahul",
      image: "",
    },
    {
      name: "neha",
      image: "",
    },
  ];
  // console.log(typeof handleChatBar);
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const { search, groups, chats } = useSelector((store) => store.chatpage);
  return (
    <Wrapper>
      <div className="container">
        <div className="left">
          <div className="more">
            <button
              onClick={() => {
                dispatch(handleChatGroup());
              }}
            >
              <BiGroup />
            </button>
            <button
              onClick={() => {
                dispatch(handleChatPeople());
              }}
            >
              <BsFillChatDotsFill />
            </button>
            <button
              onClick={() => {
                dispatch(handleChatSearch());
              }}
            >
              <BsSearch />
            </button>
          </div>
          <div className="list">
            <Show />
          </div>
        </div>
        <div className="right">
          <CurrentChat />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    display: flex;
    min-height: 100vh;
    width: 100%;
    .left {
      width: 30%;
      background-color: orange;
      .more {
        display: flex;
        justify-content: space-around;
        padding: 1rem;
        button {
          border: none;
          background-color: transparent;
          font-size: 2rem;
          cursor: pointer;
        }
      }
    }
    .right {
      width: 70%;
      height: 100vh;
    }
  }

  /* .more {
    background-color: red;
  } */
`;
export default ChatPage;
