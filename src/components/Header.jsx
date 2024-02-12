import styled from "styled-components";
import { Navbar } from "./NavBar";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <div className="title">Christian Mugione</div>
        <Navbar />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* background-color: lightgray; */
  }

  .title {
    cursor: pointer;
    font-size: 1.2em;
  }
`;
