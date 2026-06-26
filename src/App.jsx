import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Features from './pages/Features.jsx'
import Pricing from './pages/Pricing.jsx'
import Docs from './pages/Docs.jsx'
import About from './pages/About.jsx'
import Changelog from './pages/Changelog.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/about" element={<About />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}
