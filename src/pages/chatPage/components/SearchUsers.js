import React, { useEffect, useState } from "react";
// import PersonCard from "../../components/helper/PersonCard";
import styled from "styled-components";
import axios from "axios";
import ChatCard from "./cards/ChatCard";

const SearchUsers = () => {
  const [users, setUsers] = useState([]);
  const getAllUser = async () => {
    const { data } = await axios.get("http://localhost:3000/api/user/get-all/");
    setUsers(data);
    console.log(users);
  };

  useEffect(() => {
    getAllUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <div className="search-bar-user">
        <input />
        <button>search</button>
      </div>
      {users.map(({ name, _id }, i) => {
        return <ChatCard key={i} name={name} Id={_id} />;
      })}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .search-bar-user {
    display: flex;
    /* background-color: red; */
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem auto;

    input {
      border: none;
      border-radius: 2px 2px;
      padding: 0.2 1rem;
      font-size: 1.2rem;
    }
    button {
      padding: 0.2rem 1rem;
      border-radius: 10px 10px;
      border: none;
      font-size: 1rem;
    }
    button:hover {
    }
  }
`;
export default SearchUsers;
