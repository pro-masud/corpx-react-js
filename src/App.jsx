import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LayoutOne from './components/LayoutOne'
import HeroOne from './pages/HomeOne/HeroOne'
import About from './pages/About'
import OurProject from './pages/OurProject'
import ProjectDetails from './pages/ProjectDetails'
import Team from './pages/Team'
import TeamDetails from './pages/TeamDetails'
import OurPricing from './pages/OurPricing'
import OurFaq from './pages/OurFaq'
import Service from './pages/Service'
import ServiceDetails from './pages/ServiceDetails'
import BlogGrid from './pages/BlogGrid'
import BlogStandard from './pages/BlogStandard'
import BlogDetails from './pages/BlogDetails'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* Home One Layout Routes */}
        <Route path="/" element={<LayoutOne />}>
          <Route index element={<HeroOne />} />
          <Route path='about' element={<About />} />
          <Route path='project' element={<OurProject />} />
          <Route path='project-details' element={<ProjectDetails />} />
          <Route path='team' element={<Team />} />
          <Route path='team-details' element={<TeamDetails />} />
          <Route path='pricing' element={<OurPricing />} />
          <Route path='faq' element={<OurFaq />} />
          {/* <Route path='404' element={<notFount404 />} /> */}
          <Route path='service' element={<Service />} />
          <Route path='blog' element={<BlogGrid />} />
          <Route path='service-standard' element={<BlogStandard />} />
          <Route path='service-details' element={<BlogDetails />} />
          <Route path='contact' element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
