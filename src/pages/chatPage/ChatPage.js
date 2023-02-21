import React, { useState } from "react";
import styled from "styled-components";
import PersonCard from "../../components/helper/PersonCard";
import { BiGroup } from "react-icons/bi";
import { BsFillChatDotsFill, BsSearch } from "react-icons/bs";
import ChatBody from "./components/chatBody";
import CurrentChatMessages from "./CurrentChatMessages";



const ChatPage = () => {

  const [chatBody, setChatBody] = useState("recentChats");
  function navHandler(pram){
    setChatBody(pram);
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="left">
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
            <ChatBody body={chatBody}/>
          </div>
        </div>
        <div className="right">
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
      background-color: orange;
      .chatNavBar {
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

  /* .chatNavBar {
    background-color: red;
  } */
`;
export default ChatPage;



// 1. remove chatPageSlice