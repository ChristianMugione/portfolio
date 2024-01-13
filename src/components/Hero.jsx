import styled from "styled-components";

export const Hero = () => {
  return (
    <StyledHero>
      <div className="hero-container">
        <div className="text">
          <h1>Coding Future.</h1>
          <p>
            Hello! My name is Christian Mugione. I love programming. I have a
            knack for problem-solving and enjoy working in teams.
          </p>
        </div>
        <div className="image">
          <img src="/hero-coding-future.jpeg" alt="" />
        </div>
      </div>
    </StyledHero>
  );
};

const StyledHero = styled.section`
  color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 100vh;

  h1,
  p {
    text-align: center;
  }

  p {
    font-size: 18px;
  }

  .hero-container {
    width: 90%;
    max-width: 540px;
    max-height: 500px;
    display: flex;
    gap: 8px;
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .image {
    /* display: none; */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
    border-radius: 8px;
    box-shadow: 0 0 15px -3px cyan;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(10%);
  }

  @media (min-width: 576px) {
    .hero-container {
      max-width: 720px;
    }
  }

  @media (min-width: 768px) {
    background-color: #080607;

    h1,
    p {
      text-align: left;
    }

    h1 {
      font-size: 3em;
    }

    .hero-container {
      max-width: 960px;
    }

    .text {
      width: 50%;
    }

    .image {
      position: unset;
      width: 50%;
      z-index: 0;

      & img {
        filter: unset;
      }
    }
  }

  @media (min-width: 992px) {
    .hero-container {
      max-width: 1140px;
    }
  }

  @media (min-width: 1200px) {
    .hero-container {
      max-width: 1320px;
    }
  }
`;
