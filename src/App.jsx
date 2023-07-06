import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
// import ScrollSign from "./components/ScrollSign";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />

          <div className="relative z-0 ">
            <Hero />
            <StarsCanvas />
            {/* <div className=" mt-[-180px] hidden lg:block ">
              <ScrollSign />
            </div> */}
          </div>

        </div>
        <About />
        {/* <Experience /> */}
        <Tech />
        <Works />

        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;