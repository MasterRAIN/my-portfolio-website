import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Reveal from './Reveal';

function Navigations() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize);
    return() => {
      window.removeEventListener('resize', handleResize);
    }
  })

  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      {isMobile ? (
        <div>
          <div className="absolute top-3 right-3">
            <button onClick={toggleNav} className="rounded-full grid place-content-center h-10 w-10 text-3xl dark:text-white transition-all transform duration-300 hover:bg-aa dark:hover:bg-g">
              <ion-icon name={isOpen ? 'close' : 'menu'}></ion-icon>
            </button>
          </div>
          {isOpen ? (
              <Reveal axis="x" distance={50}>
                <div className="w-52 h-screen mt-16 bg-white dark:bg-g">
                  pota
                </div>
              </Reveal>
            ) : ("")}
        </div>
      ) : (
        <ul className="h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] flex gap-6 items-center overflow-x-scroll">
          <NavLink to="/">
            <button className={`flex items-center justify-center m-0 px-4 h-8 gap-2 rounded-md cusor-pointer transition-colors duration-300 hover:bg-aa font-bold dark:md:hover:bg-h ${location.pathname === '/' ? 'dark:text-white bg-aa dark:bg-h' : 'text-g dark:text-a'}`}>Home</button>
          </NavLink>
          <ion-icon name="ellipsis-vertical-outline" class="text-g dark:text-a transition-colors duration-300"></ion-icon>
          <NavLink to="about-me">
            <button className={`flex items-center justify-center m-0 px-4 h-8 gap-2 rounded-md cursor-pointer transition-colors duration-300 hover:bg-aa font-bold dark:md:hover:bg-h ${location.pathname === '/about-me' ? 'dark:text-white bg-aa dark:bg-h' : 'text-g dark:text-a'}`}>About Me</button>
          </NavLink>
          <ion-icon name="ellipsis-vertical-outline" class="text-g dark:text-a transition-colors duration-300"></ion-icon>
          <NavLink to="experience">
            <button className={`flex items-center justify-center m-0 px-4 h-8 gap-2 rounded-md cursor-pointer transition-colors duration-300 hover:bg-aa font-bold dark:md:hover:bg-h ${location.pathname === '/experience' ? 'dark:text-white bg-aa dark:bg-h' : 'text-g dark:text-a'}`}>Experience</button>
          </NavLink>
          <ion-icon name="ellipsis-vertical-outline" class="text-g dark:text-a transition-colors duration-300"></ion-icon>
          <NavLink to="projects">
            <button className={`flex items-center justify-center m-0 px-4 h-8 gap-2 rounded-md cursor-pointer transition-colors duration-300 hover:bg-aa font-bold dark:md:hover:bg-h ${location.pathname === '/projects' ? 'dark:text-white bg-aa dark:bg-h' : 'text-g dark:text-a'}`}>Projects</button>
          </NavLink>
          <ion-icon name="ellipsis-vertical-outline" class="text-g dark:text-a transition-colors duration-300"></ion-icon>
          <NavLink to="contact">
            <button className={`flex items-center justify-center m-0 px-4 h-8 gap-2 rounded-md cursor-pointer transition-colors duration-300 hover:bg-aa font-bold dark:md:hover:bg-h ${location.pathname === '/contact' ? 'dark:text-white bg-aa dark:bg-h' : 'text-g dark:text-a'}`}>Contact</button>
          </NavLink>
          <ion-icon name="ellipsis-vertical-outline" class="text-g dark:text-a transition-colors duration-300"></ion-icon>
          <NavLink to="blog">
            <button className={`flex items-center justify-center m-0 px-4 h-8 gap-2 rounded-md cusor-pointer transition-colors duration-300 hover:bg-aa font-bold dark:md:hover:bg-h ${location.pathname === '/blog' ? 'dark:text-white bg-aa dark:bg-h' : 'text-g dark:text-a'}`}>Blog</button>
          </NavLink>
        </ul>
      ) }
    </div>
  )
}


export default function HeaderButtons() {

  return (
    <div className="nav-wrapper flex gap-12">
      <Navigations />
    </div>
  )
}
