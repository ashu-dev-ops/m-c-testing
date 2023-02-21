import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import styled from "styled-components";
import Message from "./components/Message";
import { addChatMessage } from "../../store/slices/chatSlice";


const CurrentChat = () => {
  const chat = useSelector((store) => store.chat);
  const { user } = useSelector((store) => store.user);
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();

  console.log(chat);


  const handlMsgeSubmit = async () => {
    try {
      console.log();
        const { data } = await axios.post("http://localhost:3000/api/message/", {
          chatId: chat.Id,
          senderId: user.userId,
          text: msg,
        });
        console.log(data);
        dispatch(addChatMessage({...data}))
      
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Wrapper>
      <div className="chat-box">
        <div className="head">
          <h4>name</h4>
          {/* <h4>{user?.user.user}</h4> */}
        </div>
        <div className="messages">
          {chat.messages.length > 0 ? (
              chat.messages.map((chatMessage, i) => {
                return <Message key={i} message={chatMessage}/>;
              })
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
