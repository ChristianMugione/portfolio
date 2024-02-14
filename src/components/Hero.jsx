import styled from "styled-components";
import christian from "/hero-coding-future.jpeg";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <StyledHero>
      <div className="container">
        <div className="text">
          <h1>Coding Future.</h1>
          <p>
            Hello! My name is Christian Mugione. I love programming. I have a
            knack for problem-solving and enjoy working in teams.
          </p>
          <div className="btns">
            <button onClick={() => navigate("/portfolio")}>Portfolio</button>
            <button onClick={() => navigate("/contact")}>Contact</button>
          </div>
        </div>
        <div className="image">
          <img src={christian} alt="" />
        </div>
      </div>
    </StyledHero>
  );
};

const StyledHero = styled.section`
  height: 100vh;
  color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-image: url("../../public/hero-coding-future.jpeg");
  background-size: cover;
  background-position: center;

  h1,
  p {
    text-align: center;
  }

  p {
    font-size: 18px;
  }

  .container {
    /* width: 90%; */
    /* max-width: 540px; */
    /* max-height: 500px; */
    display: flex;
    gap: 8px;
  }

  .text {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #000000cc;
    padding: 20px;
    box-sizing: border-box;
    height: 100%;
  }

  .btns {
    display: flex;
    justify-content: flex-start;
    gap: 8px;
    width: 100%;
    margin-top: 20px;
  }

  .image {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
    max-height: 80vh;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow-clip-margin: unset;
    overflow: hidden;
  }

  @media (min-width: 576px) {
    .container {
      /* max-width: 720px; */
    }
  }

  @media (min-width: 768px) {
    background-image: none;

    h1,
    p {
      text-align: left;
    }

    h1 {
      font-size: 3em;
    }

    .container {
      /* max-width: 960px; */
    }

    .text {
      position: relative;
      top: unset;
      left: unset;
      background-color: transparent;
      padding: 0;
      width: 50%;
      height: auto;
    }

    .image {
      display: flex;
      position: unset;
      width: 50%;
      z-index: 0;
      border-radius: 8px;

      & img {
        filter: unset;
        object-fit: cover;
      }
    }
  }

  @media (min-width: 992px) {
    .container {
      /* max-width: 1140px; */
    }
  }

  @media (min-width: 1200px) {
    .container {
      /* max-width: 1320px; */
    }
  }
`;
