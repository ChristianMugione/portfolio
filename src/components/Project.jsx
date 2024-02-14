import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsBoxArrowUpRight } from "react-icons/bs";

export const Project = ({ name, description, imageURL, siteURL, codeURL }) => {
  return (
    <StyledProject>
      <div className="info">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="image">
          <img src={imageURL} alt={description} />
        </div>
        <div className="info-btns">
          <Link to={codeURL} target="_blank">
            View Code <BsBoxArrowUpRight />
          </Link>
          <Link to={siteURL} target="_blank">
            Visit Site <BsBoxArrowUpRight />
          </Link>
        </div>
      </div>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  display: flex;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 white;

  .info {
    width: 300px;
    background: linear-gradient(200deg, #111111, #333333);
    border-radius: 4px;
    padding: 8px;

    h2 {
      text-align: center;
    }

    p {
      min-height: 80px;
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
    height: 140px;
    overflow: hidden;
    padding: 0;
    border-radius: 4px;
    box-shadow: 0 0 5px black;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: top;
    transition: all 0.3s;
  }

  img:hover {
    transform: scale(1.03);
    transition: all 0.3s;
  }
`;
