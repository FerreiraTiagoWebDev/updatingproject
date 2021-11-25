import Topbar from "./Components/topbar/Topbar";
import Intro from "./Components/intro/Intro";
import Portfolio from "./Components/portfolio/Portfolio";
import Certifications from "./Components/certifications/Certifications";
// import Testimonials from "./Components/testimonials/Testimonials";
import Contact from "./Components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./Components/menu/Menu";
import About from "./Components/about/About";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro
          className="intro"
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <About />
        <Portfolio className="portfolio" />
        <Certifications className="works" />
        {/* <Testimonials className="testimonials" /> */}
        <Contact className="contact" />
      </div>
    </div>
  );
}

export default App;
