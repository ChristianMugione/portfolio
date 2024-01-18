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
  display: flex;
  list-style: none;
  padding-inline-start: 0;
  font-size: 1.2em;
  gap: 16px;

  a {
    color: #ffffffde;
    font-weight: 300;
    transition: 0.3s;
  }

  a:hover {
    color: #ffffff55;
    transition: 0.3s;
  }
`;
