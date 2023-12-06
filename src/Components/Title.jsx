import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { scroller, animateScroll } from 'react-scroll';

function Title() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 1000,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div className="my-logo group cursor-pointer absolute top-5 xs:left-3 md:left-16">
      {isMobile ? (
        <div onClick={scrollToTop}>
          <h4 className="text-xl font-black flex items-center">
            <span className="grid place-center text-c group-hover:text-heat dark:group-hover:text-pro group-hover:translate-x-[-4px] transition-all duration-300"><ion-icon name="chevron-back-outline"></ion-icon></span><span className="text-black dark:text-white group-hover:text-heat dark:group-hover:text-pro transition-colors duration-300">rcb</span>&nbsp;&nbsp;<span className="text-heat dark:text-pro group-hover:text-heat dark:group-hover:text-pro group-hover:translate-x-1 transition-all duration-300">/</span><span className="grid place-center text-c group-hover:text-heat dark:group-hover:text-pro group-hover:translate-x-1 transition-all duration-300"><ion-icon name="chevron-forward-outline"></ion-icon></span>
          </h4>
        </div>
      ) : (
      <Link to="/">
        <h4 className="text-xl font-black flex items-center">
          <span className="grid place-center text-c group-hover:text-heat dark:group-hover:text-pro group-hover:translate-x-[-4px] transition-all duration-300"><ion-icon name="chevron-back-outline"></ion-icon></span><span className="text-black dark:text-white group-hover:text-heat dark:group-hover:text-pro transition-colors duration-300">rcb</span>&nbsp;&nbsp;<span className="text-heat dark:text-pro group-hover:text-heat dark:group-hover:text-pro group-hover:translate-x-1 transition-all duration-300">/</span><span className="grid place-center text-c group-hover:text-heat dark:group-hover:text-pro group-hover:translate-x-1 transition-all duration-300"><ion-icon name="chevron-forward-outline"></ion-icon></span>
        </h4>
      </Link>
      )}
    </div>
  )
}

export default Title;