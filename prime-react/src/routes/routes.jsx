import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Skills from '../views/Skills';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  );
}

export default AppRoutes;
