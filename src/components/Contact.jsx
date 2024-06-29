import styled from "styled-components";
import { useFormik } from "formik";
import validationSchema from "../formik/validationSchema";
import { BsClipboard } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { openMessage } from "../redux/reducer";

export const Contact = () => {
  const copyBtn = document.getElementById("copy-btn");
  const dispatch = useDispatch();

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

        dispatch(
          openMessage({
            text: "Email sent successfully!",
            time: 3,
          })
        );
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
    <StyledContact id="contact">
      <div className="container">
        <div className="text">
          <h2>Contáctame</h2>
          <p>¿Tienes una pregunta o quieres trabajar juntos?</p>
          <div className="email-section">
            <label>chmugione@gmail.com</label>
            <BsClipboard id="copy-btn" onClick={copyMail} />
          </div>
        </div>

        <form className="contact-form" onSubmit={formik.handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
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
              placeholder="Email"
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
              placeholder="Su mensaje"
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
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 60px 0 0 0;
  color: #ddd;
  background: var(--bg-1);

  h2,
  p {
    text-align: center;
  }

  h2 {
    font-size: 2em;
    font-weight: 700;
    text-transform: uppercase;
    padding-top: 0;
    /* background: linear-gradient(90deg, #4e758a, #d2e8f0);
    background-clip: text;
    -webkit-text-fill-color: transparent; */
  }

  p {
    font-size: 1.5em;
    text-align: center;
  }

  .container {
    /* width: 90%; */
    /* max-width: 540px; */
    /* max-height: 500px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    gap: 1em;
  }

  button {
    padding: 0.3em 0.6em;
    border-radius: 4px;
  }

  .email-section {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    padding: 0.4em 1em;
    border: 1px solid darkgray;
    border-radius: 0.8em;

    label {
      font-size: 1.1em;
    }

    #copy-btn {
      cursor: pointer;
    }
  }

  .contact-form {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border: none;
    border-radius: 8px;
    padding: 16px 8px;
    background: #4e758a;

    & button {
      width: 80%;
      height: 30px;
      background-color: #ddd;
      border: none;

      &:hover {
        cursor: pointer;
        box-shadow: 0 0 5px #ddd;
      }

      &:active {
        transform: scale(0.98);
      }
    }
  }

  .form-row {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* min-height: 50px; */
    width: 100%;
    position: relative;
    border: none;

    & > * {
      border-radius: 4px;
      width: 100%;
      padding: 0.3em 0.6em;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 18px;

      &:focus {
        outline: none;
      }
    }

    input {
      width: 100%;
      height: 30px;
      border: none;

      &::placeholder {
        font-size: 0.8em;
      }
    }

    textarea {
      width: 100%;
      height: 60px;
    }
  }

  .error-msg {
    text-align: right;
    font-size: 0.8em;
    font-style: italic;
    position: absolute;
    top: 1px;
    right: 1px;
    color: #ff0000aa;
  }

  @media (min-width: 576px) {
    .container {
      /* max-width: 720px; */
    }
  }

  @media (min-width: 768px) {
    /* background-image: none; */
    align-items: center;
    /* margin: 0; */
    /* height: auto; */
    padding: 30px 0;

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
      width: 50%;
      display: flex;
      justify-content: center;
      padding-top: 1em;
      /* background-color: darkblue; */
    }
  }
`;
