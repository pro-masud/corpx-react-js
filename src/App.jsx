import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LayoutFour from "./components/LayoutFour";
import LayoutOne from "./components/LayoutOne";
import LayoutThree from "./components/LayoutThree";
import LayoutTwo from "./components/LayoutTwo";
import About from "./pages/About";
import BlogDetails from "./pages/BlogDetails";
import BlogGrid from "./pages/BlogGrid";
import BlogStandard from "./pages/BlogStandard";
import ContactUs from "./pages/ContactUs";
import HomeFour from "./pages/HomeFour/HomeFour";
import HeroOne from "./pages/HomeOne/HeroOne";
import HomeThree from "./pages/HomeThree/HomeThree";
import HomeTwo from "./pages/HomeTwo/HomeTwo";
import OurFaq from "./pages/OurFaq";
import OurPricing from "./pages/OurPricing";
import OurProject from "./pages/OurProject";
import ProjectDetails from "./pages/ProjectDetails";
import Service from "./pages/Service";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LayoutOne />}>
            <Route index element={<HeroOne />} />
            <Route path="about" element={<About />} />
            <Route path="project" element={<OurProject />} />
            <Route path="project-details" element={<ProjectDetails />} />
            <Route path="team" element={<Team />} />
            <Route path="team-details" element={<TeamDetails />} />
            <Route path="pricing" element={<OurPricing />} />
            <Route path="faq" element={<OurFaq />} />
            <Route path="service" element={<Service />} />
            <Route path="blog" element={<BlogGrid />} />
            <Route path="blog-standard" element={<BlogStandard />} />
            <Route path="blog-details" element={<BlogDetails />} />
            <Route path="contact" element={<ContactUs />} />
          </Route>

          <Route path="/home-two" element={<LayoutTwo />}>
            <Route index element={<HomeTwo />} />
            <Route path="about" element={<About />} />
            <Route path="project" element={<OurProject />} />
            <Route path="project-details" element={<ProjectDetails />} />
            <Route path="team" element={<Team />} />
            <Route path="team-details" element={<TeamDetails />} />
            <Route path="pricing" element={<OurPricing />} />
            <Route path="faq" element={<OurFaq />} />
            <Route path="service" element={<Service />} />
            <Route path="blog" element={<BlogGrid />} />
            <Route path="blog-standard" element={<BlogStandard />} />
            <Route path="blog-details" element={<BlogDetails />} />
            <Route path="contact" element={<ContactUs />} />
          </Route>

          <Route path="/home-three" element={<LayoutThree />}>
            <Route index element={<HomeThree />} />
            <Route path="about" element={<About />} />
            <Route path="project" element={<OurProject />} />
            <Route path="project-details" element={<ProjectDetails />} />
            <Route path="team" element={<Team />} />
            <Route path="team-details" element={<TeamDetails />} />
            <Route path="pricing" element={<OurPricing />} />
            <Route path="faq" element={<OurFaq />} />
            <Route path="service" element={<Service />} />
            <Route path="blog" element={<BlogGrid />} />
            <Route path="blog-standard" element={<BlogStandard />} />
            <Route path="blog-details" element={<BlogDetails />} />
            <Route path="contact" element={<ContactUs />} />
          </Route>

          <Route path="/home-four" element={<LayoutFour />}>
            <Route index element={<HomeFour />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
