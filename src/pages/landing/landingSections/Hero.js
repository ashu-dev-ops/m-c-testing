import React, { useEffect } from "react";
import axios from "axios";
const Hero = () => {
  const dataFetchTry = async () => {
    const { data } = await axios.get(
      "http://localhost:3000/api/user/update-user/63ecbea4b720762024e15e27"
    );
    console.log(data);
  };
  useEffect(() => {
    dataFetchTry();
  }, []);

  return (
    <div>
      <h1 style={{ color: "white" }}>CHAT-PAGE</h1>
    </div>
  );
};

export default Hero;
