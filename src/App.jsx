import "./App.css";
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Contact } from "./components/Contact";
import { Portfolio } from "./components/Portfolio";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Hero />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
