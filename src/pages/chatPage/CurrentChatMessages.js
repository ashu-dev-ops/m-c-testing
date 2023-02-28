import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Message from "./components/Message";
import { addChatMessage } from "../../store/slices/chatSlice";
// import { Socket } from "socket.io-client";
import { socket } from "../../util/socket-client";
// import { setChatMessages } from "../../store/slices/chatSlice";
import { toast } from "react-toastify";
import { IoSend } from "react-icons/io5";
import bgImage from "../../assests/bg.jpg";
import { setChatClose } from "../../store/slices/chatSlice";
import NothingChat from "./components/NothingChat";
import { GiFastBackwardButton } from "react-icons/gi";
// import { io  } from "socket.io-client";

// const ENDPOINT = "http://localhost:3000";
// var socket,
//   selectedChatCompare = null;
// socket.on("getMsg", (data) => {
//   console.log("running");
//   console.log(data);
// });
const CurrentChat = () => {
  const scrollRef = useRef();
  const chat = useSelector((store) => store.chat);
  const { user } = useSelector((store) => store.user);
  // console.log(chat.members);
  // console.log(`ye receiver id hai  ${chat.receiverId}`);
  // console.log(`ye user id hai  ${user?.userId}`);
  // console.log(chat.messages);
  // console.log(user);
  // console.log(user.user);
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  // const [socketConnect, setSocketConnect] = useState(null);
  // const [currentReci, setCurrentReci] = useState(false);
  const [msgArival, setMsgArival] = useState({});
  // console.log(chat);
  // console.log(user);
  useEffect(() => {
    // socket = io(ENDPOINT);
    socket.emit("setup", user);
    // socket.emit("getUsers",user)
    console.log("hi running");

    socket.on("connection", () => {
      // setSocketConnect(true);
    });
    socket.on("getUsers", (userArr) => {
      // return console.log(userArr);
      // setSocketConnect(userArr);
    });
    console.log(chat.messages);
    socket.on("getMsg", (data) => {
      // console.log("running");
      // console.log(data);
      // first time add
      // setCurrentReci(!currentReci);
      // console.log(currentReci);
      setMsgArival(data);
      // dispatch(addChatMessage(data));
      // dispatch(setChatMessages([...chat.messages, data]));
    });

    console.log(socket);
    return () => {
      socket.off("getMsg");
    };
    // eslint-disable-next-line
  }, []);
  // socket.on("getMsg", (data) => {
  //   // console.log("running");
  //   console.log(data);
  //   // first time add
  //   setCurrentReci(!currentReci);
  //   console.log(currentReci);
  //   setMsgArival(data);
  //   dispatch(addChatMessage(data));
  //   // dispatch(setChatMessages([...chat.messages, data]));
  // });

  useEffect(() => {
    dispatch(addChatMessage(msgArival));
    // eslint-disable-next-line
  }, [msgArival]);

  const handlMsgeSubmit = async () => {
    try {
      // console.log();
      const { data } = await axios.post("https://mern-chat-back.onrender.com/api/message/", {
        chatId: chat.Id,
        senderId: user.userId,
        text: msg,
      });
      if (user.userId && chat.receiverId) {
        // console.log("here what you are looking for");
        // console.log(user.userId, chat.receiverId);
        socket.emit("sendMsg", {
          senderId: user.userId,
          receiverId: chat.receiverId,
          text: msg,
        });
      } else {
        toast.error(`${user.userId} and ${chat.receiverId} something is wrong`);
        return;
      }
      // console.log();

      // console.log(data);
      //
      dispatch(addChatMessage({ ...data }));
    } catch (error) {
      console.log(error);
    }
  };
  // console.log();
  // const [showChat, setShowChat] = useState(false);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat.messages]);
  // useEffect(() => {
  //   setShowChat(true);
  // }, [chat.isOpen]);
  // console.log(showChat);
  console.log(` is if chat ope true or not ${chat.isChatOpen}`);
  return (
    <Wrapper>
      {chat.chatOpen ? (
        <div className="">
          <div className="chat-box">
            <div className="head">
              {/* <h4>name</h4>

              <h4>{user.userName}</h4> */}
              <h4>{chat.receiverName || ""}</h4>
              <button onClick={() => dispatch(setChatClose())}>
                <GiFastBackwardButton />
              </button>
            </div>
            <div className="bg-container">
              <div className="messages">
                {chat.chatOpen ? (
                  <div>
                    {" "}
                    {chat.messages.length > 0
                      ? chat.messages.map((chatMessage, i) => {
                          return (
                            <article ref={scrollRef}>
                              <Message key={i} message={chatMessage} />
                            </article>
                          );
                        })
                      : "sorry no chats"}
                  </div>
                ) : (
                  <div>
                    <NothingChat />
                  </div>
                )}
              </div>

              <div className="text-editor">
                <textarea
                  name=""
                  placeholder="write something"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                ></textarea>
                <button onClick={handlMsgeSubmit}>
                  <IoSend />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NothingChat />
      )}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 90vh;
  width: 100%;
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  /* background-color: pink; */
  background-color: #292b36;

  /* overflow: hidden; */
  .head {
    display: flex;
    justify-content: center;
    text-align: center;
    color: white;
    position: relative;
    button {
      position: absolute;
      left: 0;
      background-color: transparent;
      border: 2px solid white;
      color: white;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      padding: 0.2rem 1rem;
      border-radius: 10px 10px;
    }
  }
  .bg-container {
    background-image: url(${bgImage});
    border-radius: 20px 20px;
    margin: 1rem 0rem;
    -webkit-box-shadow: 0px 3px 31px 0px rgba(255, 255, 255, 1);
    -moz-box-shadow: 0px 3px 31px 0px rgba(255, 255, 255, 1);
    box-shadow: 0px 3px 31px 0px rgba(255, 255, 255, 1);
    /* background: linear-gradient(
        to right top,
        #051937,
        #171228,
        #190a1a,
        #12040d,
        #000000
      )
      url(${bgImage}); */
    /* background-size: cover; */
  }
  .messages {
    overflow-y: scroll;
    height: 60vh;
    /* background-color: orange; */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none;
    border-radius: 20px 20px;
  }
  .messages::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  .text-editor {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    height: 20%;
    /* background-color: red; */
    padding: 1rem;
    gap: 1rem;
    textarea {
      width: 90%;
      height: 50px;
      padding: 0.5rem;
      border-radius: 20px 20px;
      resize: none;
    }
    button {
      height: fit-content;
      padding: 0.2rem 1rem;
      /* background-color: yellow; */
      color: black;
      font-size: 2rem;
      border: none;
      border-radius: 30px 30px;
      text-align: center;
    }
  }
`;
export default CurrentChat;
