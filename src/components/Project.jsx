import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsBoxArrowUpRight } from "react-icons/bs";

export const Project = ({ name, description, imageURL, siteURL, codeURL }) => {
  return (
    <StyledProject>
      <div className="image">
        <img src={imageURL} alt={description} />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="info-btns">
          <Link to={codeURL} target="_blank">
            Ver código <BsBoxArrowUpRight />
          </Link>
          <Link to={siteURL} target="_blank">
            Visitar <BsBoxArrowUpRight />
          </Link>
        </div>
      </div>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* aspect-ratio: 1/2; */
  border-radius: 8px;
  box-shadow: 1px 1px 3px grey;
  overflow: hidden;

  .info {
    background: linear-gradient(200deg, #111111, #333333);
    border-radius: 4px;
    padding: 1% 3%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h2 {
      text-align: center;
      background: transparent;
    }

    p {
      min-height: 50%;
    }
  }

  .info-btns {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;

    a {
      color: #fafafa;
    }
    a:hover {
      color: #afafaf;
    }
  }

  .image {
    aspect-ratio: 2/1;
    overflow: hidden;
    padding: 0;
    /* border-radius: 8px; */
    box-shadow: 0 0 5px black;
  }

  img {
    width: 100%;
    transition: all 0.3s ease-out;
  }

  img:hover {
    transform: scale(1.03);
    transition: all 0.3s ease-out;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    max-height: 50vh;

    .info {
      width: 48vw;

      & h2 {
        text-align: start;
        border-bottom: 2px solid #555555;
      }

      & .info-btns {
        display: flex;
        justify-content: flex-start;
        margin-top: 8px;
        gap: 12px;

        a {
          color: #fafafa;
        }
        a:hover {
          color: #afafaf;
        }
      }
    }

    .image {
      width: 48vw;
      aspect-ratio: unset;
    }

    img {
      width: 100%;

      transition: all 0.3s;
    }
  }
`;
