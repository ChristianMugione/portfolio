import styled from "styled-components";
import { Navbar } from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, openMenu } from "../redux/reducer";
import { FaBars } from "react-icons/fa";
import { useEffect } from "react";

export const Header = () => {
  const menuOpened = useSelector((state) => state.menuReducer.menuOpened);
  const dispatch = useDispatch();
  const opened = { is: "flex" };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        dispatch(openMenu());
      } else {
        dispatch(closeMenu());
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  const toggleMenu = () => {};

  if (menuOpened) {
    opened.is = "flex";
  } else {
    opened.is = "none";
  }

  return (
    <StyledHeader opened={opened.is}>
      <div className="container">
        <div className="title">Christian Mugione</div>
        {menuOpened && <Navbar />}
        <div className="burger-btn">
          <FaBars onClick={toggleMenu} />
        </div>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#080607 85%, #08060700 100%);
  z-index: 1;

  /*  &::after {
    position: absolute;
    top: 60px;
    height: calc(100dvh - 60px);
    width: 100%;
    display: ${(props) => props.opened};
    
    // background-color: lightgray; 
    
    backdrop-filter: blur(4px);
    content: "";
  }*/

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;

    /* background-color: lightgray; */
  }

  .title {
    cursor: pointer;
    font-size: 1.2em;
    color: white;
  }

  @media (min-width: 768px) {
    .burger-btn {
      display: none;
    }
  }
`;
