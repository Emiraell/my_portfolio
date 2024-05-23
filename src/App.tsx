import { Divider, Toolbar } from "@mui/material";
import "./App.css";
import Hero from "./components/Hero";
import Main from "./pages/Main";
import About from "./components/About";

function App() {
  return (
    <div className=" font-roboto text-gray-950">
      <Main />
      <Toolbar />
      <Divider />
      <Hero />
      <About />
    </div>
  );
}

export default App;
