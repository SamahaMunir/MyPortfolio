import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="bg-white text-black min-h-screen px-6 py-8 font-sans">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          {/*<Route path="/contact" element={<Contact />} />*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
