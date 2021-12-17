import "./App.css"
import { useState } from "react";
import Topbar from "./components/topbar/Topbar"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Portfolio from "./components/portfolio/Portfolio"
import Skills from "./components/skills/Skills"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import Footer from "./components/footer/footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar 
        menuOpen = {menuOpen}
        setMenuOpen = {setMenuOpen}
      />
      <Menu 
        menuOpen = {menuOpen}
        setMenuOpen = {setMenuOpen}
      />
      <div className="sections">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
