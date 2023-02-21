import React from "react";
import styled from "styled-components";
import { FaHashtag } from "react-icons/fa";
const GroupChatCard = () => {
  return (
    <Wrapper>
      <div className="chat-card">
        <div className="icon">
          <FaHashtag />
        </div>
        <h5>group name</h5>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .chat-card {
    display: flex;
    align-items: center;
    gap: 2rem;
    border-radius: 20px 20px;
    margin: 5px 1rem;
    background-color: white;
    padding: 0.5rem;
    .icon {
      font-size: 2rem;
    }
  }
`;
export default GroupChatCard;
