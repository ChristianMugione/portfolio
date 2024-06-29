import "./App.css";
import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Contact } from "./components/Contact";
import { Portfolio } from "./components/Portfolio";
import { AppWrapper } from "./styles/AppWrapper";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { closeMenu } from "./redux/reducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Messages } from "./components/Messages";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <AppWrapper>
      <Header />
      <Routes>
        <Route path="/" exact element={<Hero />} />
        <Route path="/portfolio" exact element={<Portfolio />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
      <Messages />
      <SpeedInsights />
    </AppWrapper>
  );
}

export default App;
