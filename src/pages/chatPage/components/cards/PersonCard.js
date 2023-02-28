import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dummuPic from "../../assets/dummy-pic.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { setChatId, setChatMessages } from "../../../../store/slices/chatSlice";
import { socket } from "../../../../util/socket-client";
import { toast } from "react-toastify";
import { setReceiverId } from "../../../../store/slices/chatSlice";
import { setChatOpen } from "../../../../store/slices/chatSlice";
import { setReceiverName } from "../../../../store/slices/chatSlice";
const PersonCard = (props) => {
  const dispatch = useDispatch();
  const [person, setPerson] = useState([]);
  const { user } = useSelector((store) => store.user);
  // const [active, setActive] = useState(false);
  // const { setChatOpen } = useSelector((store) => store.chat);
  // const fetchChatId = async () => {
  //   console.log(props.chatId);
  //   const { data } = await axios.get(
  //     `http://localhost:3000/api/chat/chat-by/${props.chatId}`
  //   );
  //   console.log("data 2 comming");
  //   console.log(data);
  //   console.log("data 2 end");
  // };
  const getUser = async () => {
    console.log("on click member");
    console.log(props.members);
    console.log(`this should be same ${props.chatId}`);
    try {
      const otherUser =
        props.members[0] === user.userId ? props.members[1] : props.members[0];
      console.log(props.chatId);
      // fetchChatId();
      let data2 = await axios.get(
        `http://localhost:3000/api/chat/chat-by/${props.chatId}`
      );
      console.log("data 2 comming");
      // console.log(data2.data.members);
      // data2 = { data2 };
      // console.log(data2);
      console.log(props.chatId);
      console.log(data2.data.data);

      console.log("data 2 end");
      const { data } = await axios.get(
        `http://localhost:3000/api/user/update-user/${otherUser}`
      );
      setPerson(data);
      // console.log(data);
      console.log("member yaha par hai");

      console.log(props.members);
      // console.log();
      // dispatch(setReceiverId(otherUser));
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);
  // const [tempChat, setTempChat] = useState(null);
  const getOtherUser = (arr) => {
    let b = arr.filter((i) => i !== user.userId);
    console.log("here");
    // console.log(arr);
    // console.log(user.userId);
    console.log(b);

    return b[0];
  };
  const fetchChat = async () => {
    // getUser();
    dispatch(setChatOpen());
    console.log("from here");
    console.log(`ye chat id hai ${props.chatId}`);
    // console.log(props.members);
    const id2 = getOtherUser(props.members);
    console.log(id2);
    dispatch(setReceiverId(id2));
    dispatch(setReceiverName(person.name));

    // console.log(otherUser);

    dispatch(setChatId(props.chatId));
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/message/${props.chatId}`
      );
      // setTempChat(data);
      dispatch(setChatMessages(data));
      console.log(data);
      socket.emit("joinChat", props.chatId);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Wrapper>
      <div
        // className={active ? `person-card active` : `person-card`}
        className={`person-card`}
        onClick={fetchChat}
      >
        <img src={dummuPic} alt="" />
        <h5>{person.name}</h5>
        {/* <h5>{props.chatId}</h5> */}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .person-card {
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: white;
    border-radius: 20px 20px;
    margin: 0.6rem auto;
    width: 80%;
    /* margin: auto; */
    img {
      height: 4rem;
      width: 4rem;
      border-radius: 50%;
    }
  }
  .active {
    -webkit-box-shadow: 0px 3px 31px 0px rgba(255, 255, 255, 1);
    -moz-box-shadow: 0px 3px 31px 0px rgba(255, 255, 255, 1);
    box-shadow: 0px 3px 31px 0px rgba(255, 255, 255, 1);
  }
`;
export default PersonCard;
