import React, { useEffect, useState } from "react";
import Reveal from "../Components/Reveal";
import PageSectionHeader from "../Components/PageSectionHeader";

const jobExperiences = [
  {
    id: 1,
    title: "Application Developer",
    company: "LCC Malls",
    website: "https://lcc.com.ph/",
    employmentDate: "September 2022 - Present",
    responsibilities: [
      "Designed and developed In-House Applications based on software requirements to automate business processes for internal use, utilizing agile development methodologies.",
      "Converted desktop application to web using Javascript, PHP and MySQL and Windows CE PDT application to mobile android application using Xamarin C# and SQLite. ",
      "Enhanced, modified, repaired and expanded existing software and generic applications.",
      "Regular bug solving and feature development.",
    ],
    skills: ["HTML", "CSS", "Javascript", "PHP", "Laravel", "MySQL", "C#", "Xamarin", "VB.NET", "MSSQL Server"],
  },
  {
    id: 2,
    title: "Front-End Web Developer",
    company: "Freelance",
    employmentDate: "April 2022 - July 2022",
    responsibilities: [
      "Contributed to the design and responsiveness of business website pages.",
      "Conceptualized and crafted a distinctive business logo for use on the website.",
    ],
    skills: ["HTML", "CSS", "Bootstrap", "Javascript", "JQuery"],
  },
];
  
function Work() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [age, setAge] = useState("");
  const yearOfBirth = 1997;

  const getAge = () => {
    const today = new Date();
    const birthDate = new Date(yearOfBirth, 9, 1); // 9 represents October
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();

    if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
      calculatedAge -= 1;
    }
    setAge(calculatedAge);
  };

  useEffect(() => {
    const topSection = document.getElementById('top-start');
    if (topSection) {
      topSection.scrollIntoView();
    }

    getAge();
  }, []);

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth <= 768);
    }, 200); // Debounce time in milliseconds
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsMobile]);

  const debounce = (func, delay) => {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(func, delay);
    };
  };

  return (
    <div id={isMobile ? "" : "top-start"} className="min-h-screen overflow-auto lg:-mt-16 lg:pt-16 font-bold text-h dark:text-white transition-colors duration-300">
      <br /><br />
      <Reveal distance={50}>        
        <PageSectionHeader  
          icon="briefcase"
          title="My"
          subtitle="Experience"
          textColor="text-oxford dark:text-b"
          subtextColor="text-heat dark:text-pro"
        />
      </Reveal>
      <br />
      {isMobile ? (
        <div className="px-6 flex">
          <div className="min-h-screen my-5 border border-oxford dark:border-b transition-colors duration-300"></div>
          <div className="relative pb-6">
          {jobExperiences.map((experience, index) => {
            return (
            <div key={index} className={`flex items-start gap-2`}>
              <span className={`flex items-center justify-center w-6 h-6 mt-4 -ml-3 rounded-full text-heat dark:text-pro ring-8 ring-white dark:ring-h bg-white dark:bg-g backdrop-blur bg-opacity-25 dark:bg-opacity-25 transition-all duration-300`}>
                <ion-icon name="briefcase"></ion-icon>
              </span>
              <div className={`w-full`}>
              <Reveal axis="x" distance={-50}>
                <div className="rounded-lg p-3 backdrop-blur bg-opacity-25 dark:bg-opacity-25">
                  <h1 className="text-2xl my-name">{experience.title}</h1>
                  <p className="font-black">
                    {experience.website ? (
                      <a href={experience.website} target="_blank" rel="noopener noreferrer" className="text-oxford dark:text-b transition-all duration-300">
                        {experience.company}
                      </a>
                    ) : (
                      experience.company
                    )} | {" "}
                    <span className={experience.employmentDate.includes("Present") ? "text-heat dark:text-pro transition-all duration-300" : ""}>
                      {experience.employmentDate}
                    </span>
                  </p>
                  <ul className="text-sm text-oxford dark:text-b font-medium mt-2 ml-4 list-disc transition-all duration-300">
                    {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="mb-0.5">{responsibility}</li>
                    ))}
                    <li className="mb-0.5">Skills : {experience.skills.join(" · ")}</li>
                  </ul>
                </div>
              </Reveal>
              </div>
            </div>
            );
          })}
          </div>
        </div>
      ) : (
        <div className="relative h-fit px-40">
          <div className="absolute left-1/2 border border-oxford dark:border-b h-full m-auto transition-colors duration-300"></div>
          <div className="relative wrap overflow-hidden md:pb-10 md:px-0">
          {jobExperiences.map((experience, index) => {
            const isOddIndex = index % 2 === 1;
            const orderClass1 = isOddIndex ? 'order-3' : 'order-1';
            const orderClass2 = isOddIndex ? 'order-2' : 'order-2';
            const orderClass3 = isOddIndex ? 'order-1' : 'order-3';
            const hiddenDistance = index % 2 === 0 ? 50 : -50;

            return (
            <div key={index} className={`flex md:justify-between items-center w-full md:flex-row-reverse left-timeline`}>
              <div className={`${orderClass1} md:w-5/12`}></div>
              <span className={`flex items-center ${orderClass2} justify-center w-6 h-6 md:w-9 md:h-9 rounded-full text-heat dark:text-pro ring-4 md:ring-8 ring-white dark:ring-h bg-white dark:bg-g backdrop-blur bg-opacity-25 dark:bg-opacity-25 transition-all duration-300`}>
                <ion-icon name="briefcase"></ion-icon>
              </span>
              <div className={`${orderClass3} w-full ml-3 md:ml-0 md:w-5/12 md:px-4 md:py-4`}>
              <Reveal axis="x" distance={hiddenDistance} delay={0.2}>
                <div className="rounded-lg p-3 backdrop-blur bg-opacity-25 dark:bg-opacity-25">
                  <h1 className="text-2xl my-name">{experience.title}</h1>
                  <p className="font-black">
                    {experience.website ? (
                      <a href={experience.website} target="_blank" rel="noopener noreferrer" className="text-oxford dark:text-b transition-all duration-300">
                        {experience.company}
                      </a>
                    ) : (
                      experience.company
                    )} | {" "}
                    <span className={experience.employmentDate.includes("Present") ? "text-heat dark:text-pro transition-all duration-300" : ""}>
                      {experience.employmentDate}
                    </span>
                  </p>
                  <ul className="text-sm text-oxford dark:text-b font-medium mt-2 ml-4 list-disc transition-all duration-300">
                    {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="mb-0.5">{responsibility}</li>
                    ))}
                    <li className="mb-0.5">Skills : {experience.skills.join(" · ")}</li>
                  </ul>
                </div>
              </Reveal>
              </div>
            </div>
            );
          })}
          </div>
        </div>
      )}
    </div>
  );
}

function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState('Front End');

  const categories = [
    { id: 1, text: 'Front End' },
    { id: 2, text: 'Back End' },
    { id: 3, text: 'Others' },
    { id: 4, text: 'All' },
  ];

  const items = [
    { id: 1, category: 'Front End', name: 'HTML5', logo: process.env.PUBLIC_URL + "/Images/Tech Logos/html5.svg", size: "h-12 w-12", bg: "bg-oxf-hover", },
    { id: 2, category: 'Front End', name: 'CSS3', logo: process.env.PUBLIC_URL + "/Images/Tech Logos/css3.svg", size: "h-12 w-12", bg: "bg-oxf-hover", },
    { id: 3, category: 'Front End', name: 'Javascript', logo: process.env.PUBLIC_URL + "/Images/Tech Logos/js.svg", size: "h-12 w-12", bg: "bg-oxf-hover", },
    { id: 4, category: 'Back End', name: 'PHP', logo: process.env.PUBLIC_URL + "/Images/Tech Logos/php.svg", size: "h-16 w-16", bg: "bg-oxf-hover", },
    { id: 5, category: 'Back End', name: 'MySQL', logo: process.env.PUBLIC_URL + "/Images/Tech Logos/mysql.svg", size: "h-20 w-20", bg: "bg-oxf-hover", },
    { id: 6, category: 'Front End', name: 'Bootstrap', logo: process.env.PUBLIC_URL + "/Images/Tech Logos/bootstrap.svg", size: "h-12 w-12", bg: "bg-oxf-hover", },
    { id: 7, category: 'Front End', name: 'JQuery', logo: process.env.PUBLIC_URL + "/Images/Tech Logos/jquery.svg", size: "h-12 w-12", bg: "bg-oxf-hover", },
    { id: 8, category: 'Back End', name: 'Laravel', logo: process.env.PUBLIC_URL + "/Images/Tech Logos/laravel.svg", size: "h-12 w-12", bg: "bg-oxf-hover", },
    { id: 9, category: 'Others', name: 'Xamarin', logo: process.env.PUBLIC_URL + "/Images/Tech Logos/xamarin.svg", size: "h-14 w-14", bg: "bg-oxf-hover", },
    { id: 10, category: 'Back End', name: 'C#', logo: process.env.PUBLIC_URL + "/Images/Tech Logos/csharp.svg", size: "h-14 w-14", bg: "bg-oxf-hover", },
    { id: 11, category: 'Back End', name: 'Java', logo: process.env.PUBLIC_URL + "/Images/Tech Logos/java.svg", size: "h-14 w-14", bg: "bg-oxf-hover", },
    { id: 12, category: 'Front End', name: 'React', logo: process.env.PUBLIC_URL + "/Images/Tech Logos/react.svg", size: "h-14 w-14", bg: "bg-oxf-hover", },
    { id: 13, category: 'Front End', name: 'Tailwind CSS', logo: process.env.PUBLIC_URL + "/Images/Tech Logos/tailwind.svg", size: "h-16 w-16", bg: "bg-oxf-hover", },
    { id: 14, category: 'Others', name: 'Git', logo: process.env.PUBLIC_URL + "/Images/Tech Logos/git.svg", size: "h-12 w-12", bg: "bg-oxf-hover", },
    { id: 15, category: 'Others', name: 'GitHub', logo: process.env.PUBLIC_URL + "/Images/Tech Logos/github.svg", size: "h-14 w-14", bg: "bg-oxf-hover", },
    { id: 16, category: 'Others', name: 'GIMP', logo: process.env.PUBLIC_URL + "/Images/Tech Logos/gimp.svg", size: "h-14 w-14", bg: "bg-b", },
    { id: 17, category: 'Others', name: 'Inkscape', logo: process.env.PUBLIC_URL + "/Images/Tech Logos/inkscape.svg", size: "h-12 w-12", bg: "bg-b", },
    { id: 18, category: 'Others', name: 'Netlify', logo: process.env.PUBLIC_URL + "/Images/Tech Logos/netlify.svg", size: "h-14 w-14", bg: "bg-oxf-hover", },
    { id: 19, category: 'Back End', name: 'SQLite', logo: process.env.PUBLIC_URL + "/Images/Tech Logos/sqlite.svg", size: "h-12 w-12", bg: "bg-oxf-hover", },
  ];

  const stackButtonClick = (category) => {
    setSelectedCategory(category === 'All' ? null : category);
  };

  return (
    <div className="educ-sec pb-16 bg-oxford text-white font-bold transition-colors duration-300">
      <br /><br />
      <Reveal distance={50}>
        <PageSectionHeader  
          icon="logo-buffer"
          title="Tech"
          subtitle="Stack"
          textColor="text-white"
          subtextColor="text-pro"
        />
      </Reveal>
      <br />
      <div className="grid place-content-center">
        <Reveal distance={50}>
          <div className="w-fit lg:px-8 xs:px-2 py-2 flex lg:gap-8 xs:gap-1 justify-center bg-oxf-hover rounded-lg">
            {categories.map((category) => (
              <button
              key={category.id}
              onClick={() => stackButtonClick(category.text)}
              className={`px-4 xs:px-2 cursor-pointer transition-colors duration-300 ${selectedCategory === category.text || (category.text === 'All' && selectedCategory === null) ? 'text-pro border-b-2' : 'text-f hover:text-pro'}`} >
                {category.text}
              </button>
            ))}
          </div>
        </Reveal>
      </div>
      <br />
      <br />
      <div className="grid place-content-center">
        <div className="grid lg:grid-cols-5 lg:gap-5 xs:grid-cols-3 xs:gap-5">
          {items.filter((item) => selectedCategory === null || item.category === selectedCategory).map((item) => (
            <Reveal distance={50} key={item.id}>
              <div className="lg:h-40 lg:w-40 xs:w-24 flex flex-col gap-3 items-center justify-center">
                <div className={`h-24 w-24 grid place-content-center rounded-full ${item.bg}`}>
                  <img className={item.size} src={item.logo} alt="" loading="lazy" />
                </div>
                <h1 className="text-center">{item.name}</h1>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <br />
    </div>
  );
}


function Experience() {

  return (
    <div id="experience-sec" className="relative">
      <Work />
      <TechStack />
    </div>
  )
}

export default Experience;