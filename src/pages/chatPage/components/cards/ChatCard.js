import axios from "axios";
// import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dummuPic from "../../assets/dummy-pic.jpeg";
import { useSelector } from "react-redux";

const ChatCard = ({ name, Id }) => {
  console.log(name + " : " + Id);
  // const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  const onChat = async () => {
    try {
      console.log(user);
      const { data } = await axios.post("http://localhost:3000/api/chat", {
        senderId: user.userId,
        receiverId: Id,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <div className="person-card">
        <div className="detail">
          <img src={dummuPic} alt="" />
          <h5>{name}</h5>
        </div>

        <button onClick={onChat}>Add to Chat</button>
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
