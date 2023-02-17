import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dummuPic from "../../assets/dummy-pic.jpeg";
import { setCurrentChats } from "../../feature/ChatPageSlice";
import { useDispatch, useSelector } from "react-redux";
const ChatCard = ({ data: n2 }) => {
  console.log(n2._id);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  // console.log(data.members[1]);
  //   const [person, setPerson] = useState([]);
  // console.log(data[0]);
  //   const getUser = async () => {
  //     const { data } = await axios.get(
  //       `http://localhost:3000/api/user/update-user/${n1.members[0]}`
  //     );
  //     setPerson(data);
  //     console.log(n1._id);
  //   };
  //   useEffect(() => {
  //     getUser();
  //   }, []);
  // console.log(data[1]);
  //   const fetchChat = async () => {
  //     const { data } = await axios.get(
  //       `http://localhost:3000/api/message/${n1._id}`
  //     );
  //     // console.log(data);
  //     dispatch(setCurrentChats(data));
  //   };
  console.log("ye chal raha")
  console.log(n2._id);
  const onChat = async () => {
    try {
      const { data } = await axios.post("http://localhost:3000/api/chat", {
        senderId: user.user.id,
        receiverId: n2._id,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <div
        className="person-card"
        //   onClick={fetchChat}
      >
        <div className="detail">
          <img src={dummuPic} alt="" />
          <h5>{n2.name}</h5>
        </div>

        <button onClick={onChat}>chat</button>
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
    margin: 5px 1rem;
    justify-content: space-between;
    padding: 0.2rem 1rem;
    .detail {
      display: flex;
      align-items: center;
    }
    img {
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
    }
  }
`;
export default ChatCard;