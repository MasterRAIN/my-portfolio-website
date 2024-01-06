import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Reveal from './Reveal';
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

function Navigations() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home-sec');
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    Events.scrollEvent.register('begin', () => console.log('begin', arguments));
    Events.scrollEvent.register('end', () => console.log('end', arguments));

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveSection(to);
  }

  return (
    <div className="">
      {isMobile ? (
        <div>
          <div className="absolute top-3 right-3">
            <button onClick={toggleNav} className="rounded-full grid place-content-center h-10 w-10 text-3xl dark:text-white transition-all transform duration-300 hover:bg-aa dark:hover:bg-g">
              <ion-icon name={isOpen ? 'close' : 'menu'}></ion-icon>
            </button>
          </div>
          {isOpen && (
            <Reveal axis="x" distance={50}>
              <div className="w-screen h-screen ml-half mt-16 bg-oxford text-white bg-opacity-90">
                <ul className="h-full py-6 xs:px-6 sm:px-12">
                  <Link to="home-sec" spy={true} smooth={'easeInOutQuart'} duration={1000} offset={-50} onSetActive={() => handleSetActive('home-sec')}>
                    <button className={`h-20 flex items-center gap-4 w-full font-bold text-start`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75)' }}>
                    Home {activeSection === 'home-sec' && <ion-icon name="bug" class="text-xl icon-move transition-all ease-in-out duration-300" />}
                    </button>
                  </Link>
                  <Link to="about-sec" spy={true} smooth={'easeInOutQuart'} duration={1000} offset={-50} onSetActive={() => handleSetActive('about-sec')}>
                    <button className={`h-20 flex items-center gap-4 w-full font-bold text-start`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75)' }}>
                      About Me {activeSection === 'about-sec' && <ion-icon name="bug" class="text-xl icon-move transition-all ease-in-out duration-300" />}
                    </button>
                  </Link>
                  <Link to="experience-sec" spy={true} smooth={'easeInOutQuart'} duration={1000} offset={-50} onSetActive={() => handleSetActive('experience-sec')}>
                    <button className={`h-20 flex items-center gap-4 w-full font-bold text-start`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75)' }}>
                      Experience {activeSection === 'experience-sec' && <ion-icon name="bug" class="text-xl icon-move transition-all ease-in-out duration-300" />}
                  </button>
                  </Link>
                  <Link to="projects-sec" spy={true} smooth={'easeInOutQuart'} duration={1000} offset={-50} onSetActive={() => handleSetActive('projects-sec')}>
                    <button className={`h-20 flex items-center gap-4 w-full font-bold text-start`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75)' }}>
                      Projects {activeSection === 'projects-sec' && <ion-icon name="bug" class="text-xl icon-move transition-all ease-in-out duration-300" />}
                    </button>
                  </Link>
                  <Link to="contact-sec" spy={true} smooth={'easeInOutQuart'} duration={1000} offset={-50} onSetActive={() => handleSetActive('contact-sec')}>
                    <button className={`h-20 flex items-center gap-4 w-full font-bold text-start`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75)' }}>
                      Contact {activeSection === 'contact-sec' && <ion-icon name="bug" class="text-xl icon-move transition-all ease-in-out duration-300" />}
                    </button>
                  </Link>
                  <Link to="blog">
                    <button className={`h-20 w-full font-bold text-start`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75)' }}>Blog</button>
                  </Link>
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      ) : (
        <ul className="h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] flex xl:gap-6 lg:gap-3 md:gap-1 items-center overflow-x-scroll">
          <NavLink to="/">
            <button className={`flex items-center justify-center m-0 px-4 h-8 gap-2 rounded-md cursor-pointer transition-colors duration-300 hover:bg-aa font-bold dark:md:hover:bg-h ${location.pathname === '/' ? 'dark:text-white bg-aa dark:bg-h' : 'text-g dark:text-a'}`}>Home</button>
          </NavLink>
          <ion-icon name="ellipsis-vertical-outline" class="text-g dark:text-a transition-colors duration-300 lg:block md:hidden"></ion-icon>
          <NavLink to="about-me">
            <button className={`flex items-center justify-center m-0 px-4 h-8 gap-2 rounded-md cursor-pointer transition-colors duration-300 hover:bg-aa font-bold dark:md:hover:bg-h ${location.pathname === '/about-me' ? 'dark:text-white bg-aa dark:bg-h' : 'text-g dark:text-a'}`}>About Me</button>
          </NavLink>
          <ion-icon name="ellipsis-vertical-outline" class="text-g dark:text-a transition-colors duration-300 lg:block md:hidden"></ion-icon>
          <NavLink to="experience">
            <button className={`flex items-center justify-center m-0 px-4 h-8 gap-2 rounded-md cursor-pointer transition-colors duration-300 hover:bg-aa font-bold dark:md:hover:bg-h ${location.pathname === '/experience' ? 'dark:text-white bg-aa dark:bg-h' : 'text-g dark:text-a'}`}>Experience</button>
          </NavLink>
          <ion-icon name="ellipsis-vertical-outline" class="text-g dark:text-a transition-colors duration-300 lg:block md:hidden"></ion-icon>
          <NavLink to="projects">
            <button className={`flex items-center justify-center m-0 px-4 h-8 gap-2 rounded-md cursor-pointer transition-colors duration-300 hover:bg-aa font-bold dark:md:hover:bg-h ${location.pathname === '/projects' ? 'dark:text-white bg-aa dark:bg-h' : 'text-g dark:text-a'}`}>Projects</button>
          </NavLink>
          <ion-icon name="ellipsis-vertical-outline" class="text-g dark:text-a transition-colors duration-300 lg:block md:hidden"></ion-icon>
          <NavLink to="contact">
            <button className={`flex items-center justify-center m-0 px-4 h-8 gap-2 rounded-md cursor-pointer transition-colors duration-300 hover:bg-aa font-bold dark:md:hover:bg-h ${location.pathname === '/contact' ? 'dark:text-white bg-aa dark:bg-h' : 'text-g dark:text-a'}`}>Contact</button>
          </NavLink>
          <ion-icon name="ellipsis-vertical-outline" class="text-g dark:text-a transition-colors duration-300 lg:block md:hidden"></ion-icon>
          <NavLink to="blog">
            <button className={`flex items-center justify-center m-0 px-4 h-8 gap-2 rounded-md cursor-pointer transition-colors duration-300 hover:bg-aa font-bold dark:md:hover:bg-h ${location.pathname === '/blog' ? 'dark:text-white bg-aa dark:bg-h' : 'text-g dark:text-a'}`}>Blog</button>
          </NavLink>
        </ul>
      )}
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
