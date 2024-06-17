import "./App.css";
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Contact } from "./components/Contact";
import { Portfolio } from "./components/Portfolio";
import { AppWrapper } from "./styles/AppWrapper";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <AppWrapper>
      <Header />
      <Routes>
        <Route path="/" exact element={<Hero />} />
        <Route path="/portfolio" exact element={<Portfolio />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
      <SpeedInsights />
    </AppWrapper>
  );
}

export default App;
