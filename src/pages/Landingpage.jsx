import About from "../components/About";
import Everything from "../components/Everything";
import Header from "../components/Header";
import Support from "../components/Support";
import Testimonial from "../components/Testimonial";
import WhatWeDo from "../components/WhatWeDo";

const Landingpage = () => {
  return (
    <div className="landing-page">
      <Header />
      <WhatWeDo />
      <Everything />
      <About />
      <Testimonial />
      <Support />
    </div>
  );
};

export default Landingpage;
