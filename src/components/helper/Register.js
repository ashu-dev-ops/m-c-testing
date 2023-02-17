import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../feature/userPageSlice";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../feature/userPageSlice";
// import FormRow from "../functional/FormRow";
const Register = () => {
  let initialState = {
    name: "",
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const [values, setValue] = useState(initialState);
  const navigate = useNavigate();
  const { logIn } = useSelector((store) => store.user);
  console.log(values);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setValue({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    // e.target().preventDefault();
    e.preventDefault();
    console.log(values);
    dispatch(registerUser({ ...values }));
  };
  useEffect(() => {
    {
      logIn && navigate("/chat-page");
    }
  }, [logIn]);
  return (
    <Wrapper>
      <h1>register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="form-input"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="">Email</label>
          <input
            type="text"
            className="form-input"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="">Password</label>
          <input
            type="text"
            className="form-input"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
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
export default Register;
