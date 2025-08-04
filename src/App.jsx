import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeaderOne from './components/HeaderOne'
import Hero from './components/HomeOne/Hero'
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
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
