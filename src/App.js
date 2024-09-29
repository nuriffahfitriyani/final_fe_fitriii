import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Overview from './pages/Overview/Overview';
import SkilldanPengalaman from './pages/SkilldanPengalaman/SkilldanPengalaman';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
      <Router>
        <Navbar />
        <Routes>  

          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Overview" element={<Overview />} />
          <Route path="/SkilldanPengalaman" element={<SkilldanPengalaman />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Footer" element={<Footer />} />
        
        </Routes>
        <Footer />
      </Router>
    );
}
export default App;
