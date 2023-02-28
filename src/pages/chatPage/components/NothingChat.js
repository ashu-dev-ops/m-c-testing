import React from "react";
import mainImg from "../../../assests/auth-img-2.png";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
const NothingChat = () => {
  return (
    <Wrapper>
      <div className="text-container">
        <h2>
          <Typewriter
            options={{
              strings: [
                "Felling lonely start the chat",
                "share feeling about the latest t20 match",
                "virat vs kholi ",
              ],
              autoStart: true,
              loop: true,
              fontSize: "3rem",
            }}
          />
        </h2>
      </div>

      <div className="image-container">
        <img src={mainImg} alt="" />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /* padding: 5rem 5rem; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 90vh;
  .text-container {
    height: 20vh;
  }
  h2 {
    color: white;
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
  }
  .image-container {
    /* margin: 0 5rem;
     */
    align-self: flex-end;
    margin: auto;
  }
`;
export default NothingChat;
