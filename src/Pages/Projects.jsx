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

  const projects = [
    {
      id: 0,
      title: 'Personal Portfolio',
      icon: 'globe-outline',
      image: process.env.PUBLIC_URL + "/Images/Projects/personal-portfolio.webp",
      category: 'Web',
      stacks: ["React JS", "Tailwind CSS", "Netlify"],
      link: 'https://rainiercondebarbacena.netlify.app/',
    },
    {
      id: 1,
      title: 'TODO List',
      icon: 'globe-outline',
      image: process.env.PUBLIC_URL + "/Images/Projects/todo-list.webp",
      category: 'Web',
      stacks: ["React JS", "CSS", "Netlify"],
      link: 'https://rainier-todolist.netlify.app/',
    },
    {
      id: 2,
      title: 'COVIK Tabaco',
      icon: 'globe-outline',
      image: process.env.PUBLIC_URL + "/Images/Projects/covik-tabaco.webp",
      category: 'Web',
      stacks: ["HTML, CSS", "Vanilla JS", "JQuery", "PHP", "MySQL"],
      link: '',
    },
    {
      id: 3,
      title: 'Tic Tac Toe Game',
      icon: 'phone-portrait-outline',
      image: process.env.PUBLIC_URL + "/Images/Projects/tic-tac-toe.webp",
      category: 'Mobile',
      stacks: ["Java", "GUI"],
      link: '',
    },
    {
      id: 4,
      title: 'PRIMOZ Logo',
      icon: 'brush-outline',
      image: process.env.PUBLIC_URL + "/Images/Projects/primoz-logo.webp",
      category: 'Design',
      stacks: ["Inkscape"],
      link: process.env.PUBLIC_URL + "/Images/Projects/primoz-logo.svg",
    },
    {
      id: 5,
      title: '60th Birthday Logo',
      icon: 'brush-outline',
      image: process.env.PUBLIC_URL + "/Images/Projects/60th-bday.webp",
      category: 'Design',
      stacks: ["Inkscape"],
      link: process.env.PUBLIC_URL + "/Images/Projects/60th-bday.svg",
    },
    {
      id: 6,
      title: 'Game Avatar',
      icon: 'brush-outline',
      image: process.env.PUBLIC_URL + "/Images/Projects/master-rain.webp",
      category: 'Design',
      stacks: ["Inkscape"],
      link: process.env.PUBLIC_URL + "/Images/Projects/master-rain.png",
    },
    {
      id: 7,
      title: 'BAPA Logo',
      icon: 'brush-outline',
      image: process.env.PUBLIC_URL + "/Images/Projects/bapa-logo.webp",
      category: 'Design',
      stacks: ["Inkscape"],
      link: '',
    },
  ]
  
  const stackButtonClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div id="projects-sec" className="relative">
      <div className="min-h-screen pb-8 lg:-mt-16 lg:pt-16 font-bold text-h dark:text-white transition-colors duration-300">
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
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 xs:grid-cols-1 gap-10 py-10 md:px-44 p-3">
          {projects.filter((project) => selectedCategory === null || project.category === selectedCategory).map((project) => (
            <Reveal distance={50} delay={0.2} key={project.id}>
              <div className="rounded-lg form-shadow group bg-oxford dark:bg-g text-white overflow-hidden">
                <div className="flex gap-4 items-center px-6 py-3">
                  <ion-icon name={project.icon} class="text-xl"></ion-icon>
                  <h1 className="my-name">{project.title}</h1>
                  {/* <h1 className="my-name">{project.title.split(' ').slice(0, -1).join(' ')} <span className="text-pro">{project.title.split(' ').slice(-1)}</span></h1> */}
                </div>
                <div className="relative">
                  <div className="absolute flex flex-col h-full w-1/2 bg-oxford dark:bg-g px-6 py-3 -translate-x-full group-hover:-translate-x-0 ease-in-out transition-all duration-300">
                    <h1 className="my-name text-sm text-aa">Tech Stack: </h1>
                    <ul className="text-xs font-normal text-a list-disc px-4 flex-auto">
                      {project.stacks.map((stack, index) => (
                        <li key={index}>{stack}</li>
                      ))}
                    </ul>
                    <div className="flex gap-2 text-pro">
                      <ion-icon name="link-outline"></ion-icon>
                      {project.link ? (
                        <h1 className="text-xs font-normal border-b-2">
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            Link
                          </a>
                        </h1>
                      ) : (
                        <p className="text-xs font-normal text-gray-500">Not Available</p>
                      )}
                    </div>
                  </div>
                  <img src={project.image} alt="" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects;