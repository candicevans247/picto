import Introduction from "../components/introduction/Introduction";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";

import Profession from "../components/profession/Profession";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-background">
        <div className="content">
          <Introduction />
        </div>
      </div>

      <div className="bg-soft-white pt-16">
        <WorkProcess />
      </div>

      <Portfolio />

      <div className="bg-gray-900">
        <WorkTogether />
      </div>

      <div className="bg-soft-white">
        <Profession />
      </div>

      
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
