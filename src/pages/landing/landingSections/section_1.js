import styled from "styled-components";
import mobileImg from "../assets/home_appscreen_en-1.webp";

const Section1 = (props) => {
  return (
    <Wrapper>
      <div className="text-container">
        <h1>THE SOCIAL NETWORK OF SPORTS BETTING</h1>
        <h3>BE A PART OF A COMMUNITY THAT LOVES SPORTS AS MUCH AS YOU.</h3>
        <p>
          Wanna isn't your average sports betting platform. We take the
          entertainment of sports betting to another level with a community full
          of passionate and competitive fans. We love the emotions of each game,
          the excitement, the joy, the heartbreak, the victory cry, and of
          course, the pleasure of letting your rival fans know how much better
          your team is.
        </p>
        <br />
        <p>
          {/* We want you to feel like you took part in the game that you are
          watching. You should feel sore the next day from jumping, cheering and
          high-fiving. */}
        </p>
      </div>
      <div className="image-container">
        {/* <h2>trendest chat app</h2> */}
        <img src={mobileImg} alt="Phone" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 89vh;
  width: 100%;
  display: flex;
  @keyframes float {
    0% {
      /* box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6); */
      transform: translatey(0px);
    }
    50% {
      /* box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2); */
      transform: translatey(-20px);
    }
    100% {
      /* box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6); */
      transform: translatey(0px);
    }
  }
  .text-container {
    width: 55%;
    background-color: #7c1bd8;
    padding: 4rem;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    h1 {
      color: white;
    }
    h3 {
      color: yellow;
    }
    p {
      color: white;
    }
  }
  .image-container {
    width: 40%;
    h2 {
      text-align: center;
      color: white;
      /* margin: 1rem; */
    }
    img {
      height: 100%;
      transform: translatey(0px);
      animation: float 6s ease-in-out infinite;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    .image-container {
      width: 100%;
      display: flex;
      justify-content: center;
      img {
        height: 40vh;
      }
    }
    .text-container {
      width: 100%;
      height: 60vh;
      h2 {
        font-size: 1rem;
      }
      p {
        display: none;
      }
    }
  }
`;
export default Section1;
