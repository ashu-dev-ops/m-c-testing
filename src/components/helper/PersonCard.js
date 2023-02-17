import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dummuPic from "../../assets/dummy-pic.jpeg";
import { setCurrentChats } from "../../feature/ChatPageSlice";
import { useDispatch } from "react-redux";
const PersonCard = ({ data: n1 }) => {
  const dispatch = useDispatch();
  // console.log(data.members[1]);
  const [person, setPerson] = useState([]);
  // console.log(data[0]);
  // console.log(n1._id);
  const getUser = async () => {
    console.log(n1._id);
    const { data } = await axios.get(
      `http://localhost:3000/api/user/update-user/${n1._id}`
    );
    setPerson(data);
    // console.log(n1._id);
  };
  useEffect(() => {
    getUser();
  }, []);
  // console.log(data[1]);
  const fetchChat = async () => {
    console.log("run");
    const { data } = await axios.get(
      `http://localhost:3000/api/message/${n1._id}`
    );
    console.log(data);
    dispatch(setCurrentChats(data));
  };
  return (
    <Wrapper>
      <div className="person-card" onClick={fetchChat}>
        <img src={dummuPic} alt="" />
        <h5>{person.name}</h5>
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
    img {
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
    }
  }
`;
export default PersonCard;
