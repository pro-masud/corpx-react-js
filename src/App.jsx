import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LayoutOne from './components/LayoutOne'
import HeroOne from './pages/HomeOne/HeroOne'

function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* Home One Layout Routes */}
        <Route path="/" element={<LayoutOne />}>
          <Route index element={<HeroOne />} />
          <Route path='about' element={<HeroOne />} />
          <Route path='service-single' element={<HeroOne />} />
          <Route path='service-details' element={<HeroOne />} />
          <Route path='projects' element={<HeroOne />} />
          <Route path='project-details' element={<HeroOne />} />
          <Route path='blog' element={<HeroOne />} />
          <Route path='blog-details' element={<HeroOne />} />
          <Route path='blog-single' element={<HeroOne />} />
          <Route path='contact' element={<HeroOne />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
