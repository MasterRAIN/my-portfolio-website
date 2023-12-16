import React, { useState, useLayoutEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from './Sections/Header';
import Footer from './Sections/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Blog from './Pages/Blog';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Register from './Pages/Register';
import Login from './Pages/Login';
import PageNotFound from './Pages/PageNotFound';
import Preloader from './Components/Preloader';
import Particle from './Components/Particle';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Simulate an asynchronous operation (e.g., fetching data) with a setTimeout
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <div className="relative bg-white dark:bg-h transition-colors duration-300 overflow-hidden">
      {isLoading ? (
        <Preloader />
      ) : (
        <Router>
          <Header />
          <Particle />
          <div id="home-sec" className="pt-16 min-h-screen transition-colors duration-300">
            {isMobile ? (
              <div>
                <Home />
                <About />
                <Experience />
                <Projects />
                <Contact />
              </div>
            ) : (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            )}
          </div>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
