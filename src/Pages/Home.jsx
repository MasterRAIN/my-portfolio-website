import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Reveal from '../Components/Reveal';
import { Link, scroller, animateScroll } from 'react-scroll';

const JobTitles = [" Full Stack Development", " Mobile Development", " Desktop Development"];

function Home() {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentJobIndex((prevIndex) => (prevIndex + 1) % JobTitles.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener('resize', handleResize);
    return() => {
      window.removeEventListener('resize', handleResize);
    }
  })

  const scrollAboutMe = () => {
    scroller.scrollTo('aboutme', {
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -50,
    });
  };

  return (
    <div className="relative w-full lg:py-10 lg:px-10 xs:py-10 xs:px-5 text-black dark:text-white">
      <div className="grid place-content-center lg:p-6 xs:pt-6 xs:pb-14">
        <img
          className="w-56 h-56 rounded-full"
          src={process.env.PUBLIC_URL + "/Images/my_pic.webp"}
          alt="My Picture"
          loading="lazy"
        />
      </div>
      <div className="lg:flex justify-center gap-3 xs:text-center lg:text-6xl xs:text-4xl font-black lg:p-6 my-name transition-colors duration-300">
        <span><Reveal distance={50}>Hi, My name is </Reveal></span>
        <span className="text-heat dark:text-pro transition-colors duration-300"><Reveal axis="x">Rainier</Reveal></span>
      </div>
      <div className="lg:flex justify-center gap-3 xs:text-center lg:text-4xl xs:text-lg lg:pb-8 transition-colors duration-300">
        <span><Reveal axis="x" distance={50}>I am into</Reveal></span>
        <span key={currentJobIndex} className="text-oxford dark:text-b font-black transition-colors duration-300">
          <Reveal distance={-50}>
            {JobTitles[currentJobIndex]}
          </Reveal>
        </span>
      </div>
      <Reveal>
        <div className="grid place-content-center p-6">
          {isMobile ? (
            <div>
              <button 
                onClick={scrollAboutMe}
                className="know-more flex items-center gap-2 rounded-full bg-oxford hover:bg-oxf-hover text-white px-8 py-3 font-bold dark:bg-g dark:hover:bg-h border border-oxford dark:border-g transition-colors duration-300">
                Know More
                <ion-icon
                name="arrow-down-circle-outline"
                class="text-xl icon-move transition-all ease-in-out duration-300"
                ></ion-icon>
              </button>
            </div>
          ) : (
            <NavLink to="about-me">
              <button 
                className="know-more flex items-center gap-2 rounded-full bg-oxford hover:bg-oxf-hover text-white px-8 py-3 font-bold dark:bg-g dark:hover:bg-h border border-oxford dark:border-g transition-colors duration-300">
                Know More
                <ion-icon
                name="arrow-forward-circle-outline"
                class="text-xl icon-move transition-all ease-in-out duration-300"
                ></ion-icon>
              </button>
            </NavLink>
          )}
        </div>
      </Reveal>
    </div>
  );
}

export default Home;
