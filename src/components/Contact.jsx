import styled from "styled-components";
import { BsArrowRightShort } from "react-icons/bs";
import { BsCaretRightFill } from "react-icons/bs";

export const Contact = () => {
  const copyBtn = document.getElementById("copy-btn");

  const copyMail = () => {
    navigator.clipboard.writeText("chmugione@gmail.com");
    copyBtn.innerHTML = "COPIED!";
    setTimeout(() => {
      copyBtn.innerHTML = "Copy";
    }, 3000);
  };

  return (
    <StyledContact>
      <div className="container">
        <div className="text">
          <h2>Contact me</h2>
          <div className="email-section">
            <label>chmugione@gmail.com</label>
            <button id="copy-btn" onClick={copyMail}>
              Copy
            </button>
          </div>
        </div>
        <h4>or</h4>
        <form className="contact-form">
          <div className="form-row">
            <BsCaretRightFill />
            <input type="text" id="name" placeholder="Name" />
          </div>
        </form>
      </div>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 70px 0 0 0;
  color: #ddd;

  h2,
  h4,
  p {
    text-align: center;
  }

  p {
    font-size: 18px;
  }

  .container {
    /* width: 90%; */
    /* max-width: 540px; */
    /* max-height: 500px; */
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .text {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
  }

  .email-section {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;

    label {
      font-size: 1.1em;
    }

    button {
      padding: 0.3em 0.6em;
      border-radius: 4px;
    }
  }

  .contact-form {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .form-row {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  @media (min-width: 576px) {
    .container {
      /* max-width: 720px; */
    }
  }

  @media (min-width: 768px) {
    background-image: none;

    h2,
    h4,
    p {
      text-align: left;
    }

    h2 {
      font-size: 3em;
    }

    .container {
      /* max-width: 960px; */
    }

    .text {
      position: relative;
      top: unset;
      left: unset;
      background-color: transparent;
      padding: 0;
      width: 50%;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .email-section {
    }

    .contact-form {
      width: 100%;
      display: flex;
      justify-content: center;
      background-color: darkblue;
    }
  }
`;
