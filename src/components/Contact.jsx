import styled from "styled-components";
import { BsCaretRightFill } from "react-icons/bs";
import { useFormik } from "formik";
import validationSchema from "../formik/validationSchema";

export const Contact = () => {
  const copyBtn = document.getElementById("copy-btn");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      try {
        fetch("https://formsubmit.co/kricho@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
      } catch (error) {
        console.error(error);
      }
      // abre modal de confirmacion de mensaje enviado
      //settimeout que cierre el modal a los 5 segundos
      formik.resetForm();
    },
  });

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
          <h2>Contactame</h2>
          <div className="email-section">
            <label>chmugione@gmail.com</label>
            <button id="copy-btn" onClick={copyMail}>
              Copy
            </button>
          </div>
        </div>
        <h4>or</h4>
        <form className="contact-form" onSubmit={formik.handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="error-msg">{formik.errors.name}</div>
            )}
          </div>
          <div className="form-row">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="E-Mail"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error-msg">{formik.errors.email}</div>
            )}
          </div>
          <div className="form-row">
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              {...formik.getFieldProps("message")}
            />
            {formik.touched.message && formik.errors.message && (
              <div className="error-msg">{formik.errors.message}</div>
            )}
          </div>
          <button type="submit">ENVIAR</button>
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
  align-items: flex-start;
  margin: 30px 0 0 0;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .form-row {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 50px;

    width: 80%;

    input {
      width: 100%;
      height: 30px;
    }

    textarea {
      width: 100%;
      height: 60px;
    }
  }

  .error-msg {
    font-size: 0.8em;
  }

  @media (min-width: 576px) {
    .container {
      /* max-width: 720px; */
    }
  }

  @media (min-width: 768px) {
    background-image: none;
    align-items: center;
    margin: 0;
    height: auto;
    padding: 30px 0;

    h2,
    p {
      text-align: left;
    }

    h4 {
      display: none;
    }

    h2 {
      font-size: 3em;
    }

    .container {
      /* max-width: 960px; */
      flex-direction: row;
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
      justify-content: flex-start;
    }

    .email-section {
    }

    .contact-form {
      width: 100%;
      display: flex;
      justify-content: center;
      /* background-color: darkblue; */
    }
  }
`;
