import styled from "styled-components";

export const Project = ({ title, description }) => {
  return (
    <>
      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="screenshots"></div>
    </>
  );
};

const StyledProject = styled.div`
  display: flex;
  width: 100%;
`;
