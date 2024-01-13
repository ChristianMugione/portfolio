import styled from "styled-components";

export const NavBar = () => {
  return (
    <StyledNavBar>
      <div className="title">Christian Mugione</div>
      <div>Home Portfolio Contact</div>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 0 10px;
  border-bottom: 1px solid white;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
