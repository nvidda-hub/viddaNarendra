import { useState } from "react";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Topbar from "./components/Topbar";
import Work from "./components/Work";
import Menu from "./components/Menu"

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className="h-screen ">

      {/* top bar */}
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

      {/* menu */}
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

      {/* sections */}
      <div className="scroll-smooth w-full overflow-x-hidden h-[calc(100vh_-_64px)] bg-orange-600 relative top-16 overflow-y-scroll snap-mandatory snap-y no-scrollbar">
          <Intro />

          <Portfolio />

          <Work />

          <Testimonials />

          <Contact />
      </div>
      
        
    </div>
  );
}

export default App;
