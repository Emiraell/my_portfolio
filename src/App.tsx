import { Divider, Toolbar } from "@mui/material";
import "./App.css";
import Hero from "./components/Hero";
import Main from "./pages/Main";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";

function App() {
  return (
    <div className=" font-roboto text-gray-950">
      <Main />
      <Toolbar />
      <Divider />
      <Hero />
      <About />
      <TechStack />
      <Projects />
    </div>
  );
}

export default App;
