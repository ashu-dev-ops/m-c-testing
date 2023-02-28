import React, { useState } from "react";
import styled from "styled-components";
import { BiGroup } from "react-icons/bi";
import { BsFillChatDotsFill, BsSearch } from "react-icons/bs";
import ChatBody from "./chatBody";
import CurrentChatMessages from "./CurrentChatMessages";
import { useSelector } from "react-redux";

const ChatPage = () => {
  const [chatBody, setChatBody] = useState("recentChats");
  const { chatOpen } = useSelector((store) => store.chat);
  function navHandler(pram) {
    setChatBody(pram);
  }

  return (
    <Wrapper>
      <div className="container">
        <div className={chatOpen ? "left left-hidden" : "left"}>
          <div className="chatNavBar">
            <button
              onClick={() => {
                navHandler("groupChats");
              }}
            >
              <BiGroup />
            </button>
            <button
              onClick={() => {
                navHandler("recentChats");
              }}
            >
              <BsFillChatDotsFill />
            </button>
            <button
              onClick={() => {
                navHandler("searchUsers");
              }}
            >
              <BsSearch />
            </button>
          </div>
          <div className="list">
            <ChatBody body={chatBody} />
          </div>
        </div>
        {/* className={chatOpen ? "left left-hidden" : "left"} */}
        <div className={chatOpen ? "right right-show" : "right"}>
          {/* <div className={chatOpen ? "right right-hidden" : "right "}> */}
          <CurrentChatMessages />
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
      /* background-color: orange;
      h
       */
      height: 90vh;
      background-color: #292b36;
      .chatNavBar {
        display: flex;
        justify-content: space-around;
        padding: 1rem;

        button {
          border: none;
          background-color: transparent;
          font-size: 2rem;
          cursor: pointer;
          color: white;
          a {
            color: white;
          }
        }
      }
    }
    .right {
      width: 70%;
      height: 90vh;
    }
  }

  /* .chatNavBar {
    background-color: red;
  } */
  @media (max-width: 600px) {
    .container {
      overflow: hidden;
      .right {
        width: 100vw;
        width: 100%;
        display: none;
      }
      .right-show {
        display: initial;
        width: 100vw;
        width: 100%;
      }
      .left-hidden {
        transform: translateX(-100%);
        display: none;
      }
      .left {
        width: 100vw;
        transition: all 1s;
        /* display: none; */
      }
    }
  }
`;
export default ChatPage;

// 1. remove chatPageSlice
