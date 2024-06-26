import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { closeMenu } from "../redux/reducer";

export const Navbar = () => {
  const dispatch = useDispatch();
  const isMenuOpened = useSelector((state) => state.menuReducer.mennuOpened);

  const closeMenuFnc = () => {
    dispatch(closeMenu());
  };
  return (
    <StyledUl>
      <li>
        <a href="#hero" onClick={closeMenuFnc}>
          Inicio
        </a>
      </li>
      <li>
        <a href="#trabajos" onClick={closeMenuFnc}>
          Trabajos
        </a>
      </li>
      <li>
        <a href="#contact" onClick={closeMenuFnc}>
          Contacto
        </a>
      </li>
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  background-color: #080607;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 40px;
  right: 50%;
  list-style: none;
  padding-inline-start: 0;
  font-size: 1.2em;
  gap: 16px;
  width: 100%;
  transform: translateX(50%);
  transition: all 0.2s;
  z-index: 1;

  a {
    color: #ffffffde;
    position: relative;
    height: 50px;

    /* border: 1px solid white; */
  }

  @media (min-width: 768px) {
    background-color: unset;
    display: flex;
    flex-direction: row;
    position: relative;
    width: unset;
    top: unset;
    right: unset;
    transform: unset;

    a::after {
      display: block;
      position: absolute;
      left: 50%;
      height: 2px;
      width: 0;
      background-color: #9fd5df;
      content: "";
      transition: all 0.2s;
    }

    a:hover::after {
      display: block;
      position: absolute;

      left: 0;
      height: 2px;
      width: 100%;
      background-color: #9fd5df;
      content: "";
      transition: all 0.2s;
    }
  }
`;
