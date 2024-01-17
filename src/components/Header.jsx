import styled from "styled-components";
import { Navbar } from "./NavBar";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="header-container">
        <div className="title">Christian Mugione</div>
        {/* <div>Home Portfolio Contact</div> */}
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
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: gray; */

  .header-container {
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* background-color: lightgray; */
  }
`;
