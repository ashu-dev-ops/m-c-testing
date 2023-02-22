import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";


const Message = ({ message }) => {

  const { user } = useSelector((store) => store.user);
  const { text, senderId } = message;

  return (
    <Wrapper>
      <div className={`${senderId === user.userId ? "message own" : "message "} `}>
        <div className="msg-top">name</div>
        <div className="msg-bottom">{ text }</div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .message {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .own {
    align-items: flex-end;
    /* background-color: yellow; */
    .msg-bottom {
      background-color: yellow;
    }
  }
  .msg-bottom {
    background-color: gray;
    padding: 0.5rem 1rem;
    width: fit-content;
  }
`;
export default Message;
