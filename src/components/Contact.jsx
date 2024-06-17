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
    /* margin: 0; */
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

/*
<!--
// v0 by Vercel.
// https://v0.dev/t/NUc0wLihpIL
-->

<div class="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16 lg:py-20">
  <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
    <div class="space-y-4">
      <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
      <p class="text-gray-500 dark:text-gray-400">
        Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible.
        together? Fill out the form and
      </p>
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 w-5 text-gray-500 dark:text-gray-400"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            ></path>
          </svg>
          <span class="text-gray-500 dark:text-gray-400">123 Main St, Anytown USA</span>
        </div>
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 w-5 text-gray-500 dark:text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            ></path>
          </svg>
          <span class="text-gray-500 dark:text-gray-400">(123) 456-7890</span>
        </div>
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 w-5 text-gray-500 dark:text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            ></path>
          </svg>
          <span class="text-gray-500 dark:text-gray-400">info@example.com</span>
        </div>
      </div>
    </div>
    <div>
      <form class="space-y-4">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div class="space-y-2">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="name"
            >
              Name
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div class="space-y-2">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="email"
            >
              Email
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="email"
              placeholder="Enter your email"
              type="email"
            />
          </div>
        </div>
        <div class="space-y-2">
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="message"
          >
            Message
          </label>
        </div>
      </form>
    </div>
  </div>
</div>

*/
