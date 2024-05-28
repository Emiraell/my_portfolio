import { Divider, Toolbar } from "@mui/material";
import Header from "../components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import TechStack from "./sections/stacks/TechStack";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/Contact";
import Footer from "../components/Footer";

export default function Main() {
  return (
    <div>
      <Header />
      <Toolbar />
      <Divider />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
