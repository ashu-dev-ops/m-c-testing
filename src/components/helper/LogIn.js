import React from "react";
import styled from "styled-components";
const LogIn = () => {
  return (
    <Wrapper>
      <h1>Log in</h1>
      <form>
        {/* <div className="form-row">
          <label htmlFor="">Name</label>
          <input type="text" className="form-input" />
        </div> */}
        <div className="form-row">
          <label htmlFor="">Email</label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-row">
          <label htmlFor="">Password</label>
          <input type="text" className="form-input" />
        </div>
        <button>submit</button>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  button {
    background-color: #f5cc45;
    color: #000016;
    padding: 0.2rem 1rem;
    font-size: 1rem;
    border-radius: 10px 10px;
    border: none;
    font-weight: bold;
  }
`;
export default LogIn;
