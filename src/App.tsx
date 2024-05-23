import { Divider, Toolbar } from "@mui/material";
import "./App.css";
import Hero from "./components/Hero";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Main />
      <Toolbar />
      <Divider />
      <Hero />
    </>
  );
}

export default App;
