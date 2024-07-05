import About from "../components/About";
import Everything from "../components/Everything";
import Header from "../components/Header";
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
    </div>
  );
};

export default Landingpage;
