import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <StyledUl>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  /* background-color: aliceblue; */
  display: flex;
  list-style: none;
  padding-inline-start: 0;
  font-size: 1.2em;
  gap: 16px;

  a {
    color: #ffffffde;
    position: relative;
  }

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

  a:focus::after {
    display: block;
    position: absolute;

    left: 0;
    height: 2px;
    width: 100%;
    background-color: #9fd5df;
    content: "";
    transition: all 0.2s;
  }
`;
