import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dummuPic from "../../assets/dummy-pic.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { setChatId, setChatMessages } from "../../../../store/slices/chatSlice";



const PersonCard = (props) => {
  const dispatch = useDispatch();
  const [person, setPerson] = useState([]);
  const {user} = useSelector(store => store.user);


  const getUser = async () => {
    const otherUser = props.members[0] === user.userId ? props.members[1] : props.members[0];
    const { data } = await axios.get(
      `http://localhost:3000/api/user/update-user/${otherUser}`
    );
    setPerson(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  
  const fetchChat = async () => {
    dispatch(setChatId(props.chatId));
    try{
      const { data } = await axios.get(
        `http://localhost:3000/api/message/${props.chatId}`
      );
      dispatch(setChatMessages(data));
    } catch(err){
      console.log(err);
    }
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
