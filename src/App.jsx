import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  // Resume,
  Footer,
  Experience,
  Hero,
  Navbar,
  Skills,
  Projects,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          {/* <Resume /> */}
        </div>
        <About />
        <Experience />
        <Skills />
        <Projects />
        {/* <Resume /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
