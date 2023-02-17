import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Message from "../../components/helper/Message";

const CurrentChat = () => {
  const { currentChats } = useSelector((store) => store.chatpage);
  const { user } = useSelector((store) => store.user);
  //   const { user } = useSelector((store) => store.user);
    console.log(currentChats);
  //   const chatId = currentChats[0]?.chatId;
  //   console.log(chatId);
  //   const [chat, setChat] = useState(null);
  const [msg, setMsg] = useState("");
  const handlMsgeSubmit = async () => {
    try {
      console.log();
      //   const { data } = await axios.post("http://localhost:3000/api/message/", {
      //     chatId: chatId,
      //     senderId: user.user.id,
      //     text: msg,
      //   });
      //   console.log(data);
      console.log(msg);
    } catch (error) {}
  };
  //   const { user } = useSelector((store) => store.user);

  //   console.log(user.user.name);
  //   console.log(user.user);
  return (
    <Wrapper>
      <div className="chat-box">
        <div className="head">
          <h4>name</h4>
          {/* <h4>{user?.user.user}</h4> */}
        </div>
        <div className="messages">
          {currentChats?.length > 0 ? (
            <>
              {currentChats.map((i, idx) => {
                return <Message key={idx} data={i} />;
              })}
            </>
          ) : (
            "sorry no chats"
          )}
        </div>
      </div>
      <div className="text-editor">
        <textarea
          name=""
          placeholder="write something"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>
        <button onClick={handlMsgeSubmit}>submit</button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  .head {
    display: flex;
    justify-content: space-between;
  }
  .messages {
    overflow-y: scroll;
    height: 70vh;
    background-color: orange;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none;
  }
  .messages::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  .text-editor {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30%;
    textarea {
      width: 80%;
      height: 50px;
      padding: 0.2rem;
    }
    button {
      height: fit-content;
      padding: 0.2rem 1rem;
      background-color: yellow;
      color: black;
    }
  }
`;
export default CurrentChat;
