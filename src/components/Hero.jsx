import styled from "styled-components";
import coder from "/hero-coding-future.jpeg";
import { useNavigate } from "react-router-dom";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <StyledHero>
        <div className="container">
          <div className="text">
            <h1>Codeando el Futuro</h1>
            <p>
              Hola! Mi nombre es Christian Mugione. Amo la programación. Tengo
              facilidad para resolver problemas y trabajar en equipo.
            </p>
            {/* <p>
            Hello! My name is Christian Mugione. I love programming. I have a
            knack for problem-solving and enjoy working in teams.
          </p> */}
            <div className="btns">
              <button onClick={() => navigate("/portfolio")}>Portfolio</button>
              <button onClick={() => navigate("/contact")}>Contacto</button>
            </div>
          </div>
          <div className="image">
            <img src={coder} alt="" />
            <span className="top"></span>
            <span className="bottom"></span>
            <span className="left"></span>
            <span className="right"></span>
          </div>
        </div>
      </StyledHero>
      <Portfolio />
      <Contact />
    </>
  );
};

const StyledHero = styled.section`
  height: 89dvh;
  color: var(--text-200);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 70px 0 0 0;
  background-image: url("/hero-coding-future.jpeg");
  background-size: cover;
  background-position: center;
  /* border: 1px solid white; */
  font-size: 18px;

  h1,
  p {
    text-align: center;
    color: var(--text);
  }

  h1 {
    font-size: 2em;
    line-height: 1;
    margin-bottom: 12px;
  }

  p {
    font-size: 0.8em;
    /* max-width: 290px; */
  }

  .container {
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
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    height: 100%;
    backdrop-filter: brightness(10%);
    text-align: left;
  }

  .text h1 {
    background: linear-gradient(90deg, #4e758a, #d2e8f0);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .btns {
    display: flex;
    justify-content: center;
    gap: 8px;
    width: 100%;
    margin-top: 20px;
  }

  .btns button,
  .btns button:first-child:hover {
    padding: 8px 10px;
    border: 1px solid #f0f0f0;
    background-color: transparent;
    color: #f0f0f0;
    border-radius: 6px;
    font-size: 0.8em;
    font-weight: 600;
    transition: all 0.2s ease;
  }

  .btns button:first-child,
  .btns button:hover {
    border: 1px solid transparent;
    background-color: #f0f0f0;
    color: #080607;
    transition: all 0.2s ease;
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

  .top,
  .bottom,
  .left,
  .right {
    position: absolute;
    background: white;
  }

  .top,
  .bottom {
    width: 100%;
    height: 5%;
  }

  .left,
  .right {
    width: 5%;
    height: 100%;
  }

  .top {
    top: 0;
    background: linear-gradient(0deg, transparent, var(--bg-dark));
  }

  .bottom {
    bottom: 0;
    background: linear-gradient(180deg, transparent, var(--bg-dark));
  }

  .left {
    left: 0;
    background: linear-gradient(270deg, transparent, var(--bg-dark));
  }

  .right {
    right: 0;
    background: linear-gradient(90deg, transparent, var(--bg-dark));
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
      font-size: 2.3em;
    }

    .container {
      /* max-width: 960px; */
    }

    .text {
      position: relative;
      top: unset;
      left: unset;
      padding: 0;
      width: 50%;
      height: auto;
      backdrop-filter: unset;
    }

    .btns {
      justify-content: flex-start;
    }

    .image {
      display: flex;
      position: relative;
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
    h1,
    p {
      text-align: left;
    }

    .text {
      align-items: flex-start;
      font-size: 1.5em;
    }

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
