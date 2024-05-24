import styled from "styled-components";
import { Project } from "./Project";
import { projectsData } from "../data/ProjectsData";

export const Portfolio = () => {
  return (
    <StyledSection>
      <h2>Mis Proyectos</h2>
      {/* <Project name="Hola" description="descripcion loca" /> */}
      <div className="container">
        {projectsData.map((data) => {
          return (
            <Project
              key={data.key}
              name={data.name}
              description={data.description}
              imageURL={data.imageURL}
              codeURL={data.codeURL}
              siteURL={data.siteURL}
            />
          );
        })}
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.main`
  position: relative;
  width: 100%;
  min-height: 80vh;
  color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 70px 0 0 0;
  box-sizing: border-box;
  /* border: 1px solid red; */

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-content: center;
    width: 100%;
    gap: 1vw;
    padding: 8px;
    box-sizing: border-box;

    /* @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr;
    } */
  }
`;
