import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Message = ({ own, data }) => {
  //   if (data) {
  //     const { text } = data[0];
  //   }
  const { user } = useSelector((store) => store.user);
  console.log(data);
  const { text, senderId } = data;
  if (senderId === user.user.id) {
    return (
      <Wrapper>
        <div className="message own">
          {/* <div className="msg-top">name</div> */}
          <div className="msg-bottom">{data ? text : ""}</div>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className={`${own ? "message own" : "message "} `}>
        <div className="msg-top">name</div>
        <div className="msg-bottom">{data ? text : ""}</div>
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
