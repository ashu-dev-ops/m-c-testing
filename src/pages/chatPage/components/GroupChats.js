import React from "react";
import GroupChatCard from "./cards/GroupChatCard";
import styled from "styled-components";

const GroupChats = () => {
  return (
    <Wrapper>
      <GroupChatCard />
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default GroupChats;
