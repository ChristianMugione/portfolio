import styled from "styled-components";
import { Navbar } from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, openMenu } from "../redux/reducer";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [opened, setOpened] = useState("flex");
  const menuOpened = useSelector((state) => state.menuReducer.menuOpened);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        dispatch(openMenu());
        setOpened("none");
      } else {
        dispatch(closeMenu());
        setOpened("flex");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  const toggleMenu = () => {
    if (!menuOpened) {
      dispatch(openMenu());
      setOpened("flex");
    } else {
      dispatch(closeMenu());
      setOpened("none");
    }
  };

  return (
    <StyledHeader opened={menuOpened}>
      <div className="container">
        <div className="title" onClick={() => navigate("/")}>
          Christian Mugione
        </div>
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

  &::after {
    position: absolute;
    top: 60px;
    height: calc(100dvh - 60px);
    width: 100%;
    display: ${(props) => (props.opened ? "flex" : "none")};

    backdrop-filter: blur(4px);
    content: "";
  }

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .title {
    cursor: pointer;
    font-size: 1.2em;
    color: white;
  }

  .burger-btn {
    position: absolute;
    right: 10px;
    cursor: pointer;
    color: white;
  }

  @media (min-width: 768px) {
    &::after {
      display: none;
    }
    .container {
      justify-content: space-between;
    }
    .burger-btn {
      display: none;
    }
  }
`;
