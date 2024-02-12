import styled from "styled-components";
import { Project } from "./Project";

export const Portfolio = () => {
  return (
    <StyledSection>
      <h2>PORTFOLIO</h2>
      <Project title="Hola" description="descripcion loca" />
    </StyledSection>
  );
};

const StyledSection = styled.main`
  width: 100%;
  min-height: 80vh;
  color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 70px 0 0 0;
  box-sizing: border-box;
`;
