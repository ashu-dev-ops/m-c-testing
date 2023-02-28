import styled from "styled-components";
import mobileImg from "../assets/home_appscreen_en-1.webp";

const Section1 = (props) => {
  return (
    <Wrapper>
      <div className="tex-container">
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
          We want you to feel like you took part in the game that you are
          watching. You should feel sore the next day from jumping, cheering and
          high-fiving. This, we’ve decided, this is what sports betting should
          be, what it can do. Like books, sports give people a sense of having
          lived other lives, of taking part in other people's victories. And
          defeats. When sports are at their best, the spirit of the fan merges
          with the spirit of the athlete, this is the oneness that the mystics
          talk about.
        </p>
      </div>
      <div className="image-container">
        <img src={mobileImg} alt="Phone" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  .image-container {
    img {
      height: 10px;
    }
  }
`;
export default Section1;
