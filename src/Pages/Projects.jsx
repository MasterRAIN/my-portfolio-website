import React, { useEffect, useState } from "react";
import Reveal from "../Components/Reveal";
import PageSectionHeader from "../Components/PageSectionHeader";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Web');

  const categories = [
    { id: 0, text: 'Web' },
    { id: 1, text: 'Mobile' },
    { id: 2, text: 'Desktop' },
    { id: 3, text: 'Design' },
  ];
  
  const stackButtonClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div id="projects-sec" className="relative">
      <div className="min-h-screen pb-8 overflow-auto lg:-mt-16 lg:pt-16 font-bold text-h dark:text-white transition-colors duration-300">
        <br /><br />
        <Reveal distance={50}>
          <PageSectionHeader  
            icon="bug"
            title="My"
            subtitle="Projects"
            textColor="text-oxford dark:text-b"
            subtextColor="text-heat dark:text-pro"
          />
        </Reveal>
        <br />
        <div className="grid place-content-center">
          <Reveal distance={50}>
            <div className="w-fit md:px-8 xs:px-2 py-2 flex md:gap-8 xs:gap-1 justify-center rounded-lg">
              {categories.map((category) => (
                <button
                key={category.id}
                onClick={() => stackButtonClick(category.text)}
                className={`px-4 xs:px-2 cursor-pointer transition-colors duration-300 ${selectedCategory === category.text ? 'text-heat dark:text-pro border-b-2' : 'text-g dark:text-a font-medium hover:text-heat dark:hover:text-pro'}`} >
                  {category.text}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 xs:grid-cols-1 gap-10 lg:py-10 md:px-44">
          <div className="rounded-lg form-shadow group bg-oxford dark:bg-g text-aa overflow-hidden">
            <div className="flex gap-4 items-center px-6 py-3">
              <ion-icon name="globe-outline" class="text-xl"></ion-icon>
              <h1 className="my-name">Personal Portfolio</h1>
            </div>
            <div className="relative">
              <div className="absolute flex flex-col h-full w-1/2 bg-white text-h z-50 px-6 py-3 -translate-x-full group-hover:-translate-x-0 transition-all duration-300">
                <h1 className="my-name text-sm">Tech Stack: </h1>
                <ul className="text-xs list-disc px-4 flex-auto">
                  <li>React JS</li>
                  <li>Tailwind CSS</li>
                  <li>Netlify</li>
                </ul>
                <div className="flex gap-2 text-c">
                  <ion-icon name="link-outline"></ion-icon>
                  <h1 className="text-xs border-b-2">
                    <a href="https://rainiercondebarbacena.netlify.app/" target="_blank" rel="noopener noreferrer">Live</a>
                  </h1>
                </div>
              </div>
              <img src={process.env.PUBLIC_URL + "/Images/Projects/personal-portfolio.webp"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;