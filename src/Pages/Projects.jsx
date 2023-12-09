import React, { useEffect, useState } from "react";
import Reveal from "../Components/Reveal";
import PageSectionHeader from "../Components/PageSectionHeader";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Web');

  const categories = [
    { id: 0, text: 'Web' },
    { id: 1, text: 'Mobile' },
    { id: 2, text: 'Desktop' },
    { id: 3, text: 'Graphic' },
    { id: 4, text: 'All' },
  ];
  
  const stackButtonClick = (category) => {
    setSelectedCategory(category === 'All' ? null : category);
  };

  return (
    <div id="projects-sec" className="relative">
      <div className="min-h-screen overflow-auto lg:-mt-16 lg:pt-16 font-bold text-h dark:text-white transition-colors duration-300">
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
            <div className="w-fit lg:px-4 xs:px-2 py-2 flex lg:gap-4 xs:gap-1 justify-center bg-oxf-hover rounded-lg">
              {categories.map((category) => (
                <button
                key={category.id}
                onClick={() => stackButtonClick(category.text)}
                className={`px-4 xs:px-2 cursor-pointer transition-colors duration-300 ${selectedCategory === category.text || (category.text === 'All' && selectedCategory === null) ? 'text-pro border-b-2' : 'text-aa hover:text-pro'}`} >
                  {category.text}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

export default Projects;