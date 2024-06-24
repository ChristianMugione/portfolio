import styled from "styled-components";

export const AppWrapper = ({ children }) => {
  return <StyledAppWrapper>{children}</StyledAppWrapper>;
};

const StyledAppWrapper = styled.div`
  width: 100%;
  background-color: var(--bg-100);

  @media (max-width: 319px) {
    display: none;
  }

  .container {
    width: 98%;
    margin: 0 auto;

    @media (min-width: 576px) {
      width: 540px;
    }
    @media (min-width: 768px) {
      width: 720px;
    }
    @media (min-width: 992px) {
      width: 960px;
    }
    @media (min-width: 1200px) {
      width: 1140px;
    }
    @media (min-width: 1400px) {
      width: 1320px;
    }
  }
`;
