import styled from "styled-components";
import { Project } from "./Project";
import { projectsData } from "../data/ProjectsData";

export const Portfolio = () => {
  return (
    <StyledSection id="trabajos">
      <main className="container">
        <h1>Trabajos Realizados</h1>
        {/* <Project name="Hola" description="descripcion loca" /> */}
        <div className="portfolio-container">
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
      </main>
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
  padding: 70px 0 0 0;
  box-sizing: border-box;
  background: var(--bg-1);
  /* border: 1px solid red; */

  h1 {
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: center;
    font-size: 2.5em;
    font-weight: 700;
    text-transform: uppercase;
  }

  .portfolio-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 1vw;
    padding: 8px;
    box-sizing: border-box;

    /* @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }*/
    /* @media (min-width: 992px) {
      flex-direction: row;
    } */
  }
`;
