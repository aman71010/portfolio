import "./app.css"
import { useState } from "react";
import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Work from "./components/work/Work"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar 
        menuOpen = {menuOpen}
        setMenuOpen = {setMenuOpen}
      />
      <div className="sections">
        <Intro />
        <Work />
        <Portfolio />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
