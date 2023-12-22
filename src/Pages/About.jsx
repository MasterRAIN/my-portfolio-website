import React, { useEffect, useState, useMemo } from "react";
import { Link, scroller, animateScroll } from 'react-scroll';
import Reveal from "../Components/Reveal";
import PageSectionHeader from "../Components/PageSectionHeader";

function MyBackground() {
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
    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth <= 768);
    }, 200); 
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsMobile]);

  useEffect(() => {
    const topSection = document.getElementById('top-start');
    if (topSection) {
      topSection.scrollIntoView();
    }

    getAge();
  }, []);
  
  const debounce = (func, delay) => {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(func, delay);
    };
  };

  const aboutInfo = useMemo(() => {
    return {
    name: 'I\'m Rainier',
    title: 'Full Stack Developer',
    description: 'Currently I am working as an Application Developer at LCC Malls. I\'m a Passionate Full-Stack Developer who turns ideas into code with a combination of front-end delicacy and back-end precision. I enjoy learning new things and technologies, and I enjoy coding and creating projects related to web development that have a basic, minimalistic design.',
    personals: [`Age : ${age}`, 'Pronouns : He/Him', 'Residence : Bacacay, Albay, Philippines'],
    qoutes: ['"If it works, ', 'don\'t touch it."'],
    link: 'https://lcc.com.ph/',
    };
  }, [age]);

  const handleClick = () => {
    const pdfPath = process.env.PUBLIC_URL + "/assets/Barbacena, Rainier C. - Resume.pdf";
    window.open(pdfPath, '_blank');
  };

  return (
    <div id={isMobile ? "" : "top-start"} className="min-h-screen lg:-mt-16 lg:pt-16 xs:pb-8 font-bold text-h dark:text-white transition-colors duration-300">
      <br /><br />
      <Reveal distance={50}>
        <PageSectionHeader  
          icon="person"
          title="About"
          subtitle="Me"
          textColor="text-oxford dark:text-b"
          subtextColor="text-heat dark:text-pro"
        />
      </Reveal>
      <div className="lg:flex lg:py-10 lg:px-40">
        <div className="flex-auto"></div>
        <div className="lg:w-3/5 py-5">
          <Reveal axis="x" delay={0.2}>
            <h1 className="text-2xl my-name px-4 lg:text-left text-center">{aboutInfo.name}</h1>
          </Reveal>
          <Reveal axis="x" delay={0.2}>
            <h1 className="font-black px-4 lg:text-left text-center">{aboutInfo.title}</h1>
          </Reveal>
          <br />
          <Reveal axis="x" delay={0.2}>
            <p className="leading-relaxed text-sm font-medium px-4 lg:text-left text-justify">
              {aboutInfo.description.split('LCC Malls').map((text, index, array) => (
                index === array.length - 1 ? (
                  text
                ) : (
                  <React.Fragment key={index}>
                    {text}
                    <a
                      href={aboutInfo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-oxford dark:text-b font-bold transition-colors duration-300"
                    >
                      LCC Malls
                    </a>
                  </React.Fragment>
                )
              ))}
            </p>
          </Reveal>
          <br />
          <Reveal axis="x" delay={0.2}>
            {aboutInfo.personals.map((personal, index) => (
              <h1 key={index} className="text-sm text-f font-medium px-4">{personal}</h1>
            ))}
          </Reveal>
          <br />
          <Reveal axis="x" delay={0.2}>
            <p className="text-oxford dark:text-b transition-colors duration-300 px-4 lg:text-left text-center">
              {aboutInfo.qoutes[0]}<span className="text-heat dark:text-pro transition-colors duration-300">{aboutInfo.qoutes[1]}</span>
            </p>
          </Reveal>
          <br />
          <Reveal axis="x" delay={0.2}>
            <div className="flex justify-center lg:justify-start">
              <div className="w-fit px-4 py-2">
                <button onClick={handleClick} className="know-more flex items-center gap-2 rounded-full border border-oxford dark:border-g bg-oxford hover:bg-oxf-hover text-white px-8 py-3 font-bold dark:bg-g dark:hover:bg-h transition-colors duration-300">
                  Resume
                  <ion-icon
                  name="arrow-forward-circle-outline"
                  class="text-xl icon-move transition-all ease-in-out duration-300"
                  ></ion-icon>
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

function MyEducation() {

  const schools = [
    {
      college: [
        {
          degree: 'Bachelor of Science in Information Technology',
          name: 'Polytechnic Institute of Tabaco',
          location: '100 Panal, Tabaco City',
          sy: '2018 - 2022 | Graduate',
        },
      ],
      basic: [
        {
          name: 'Joroan National High School',
          location: 'Joroan, Tiwi, Albay',
          award: 'Salutatorian',
          sy: '2011 - 2015',
        },
        {
          name: 'Joroan Elementary School',
          location: 'Joroan, Tiwi, Albay',
          award: 'Salutatorian',
          sy: '2005 - 2011',
        },
      ],
    },
  ];

  return (
    <div id="educationSection" className="educ-sec bg-oxford text-white font-bold transition-colors duration-300">
      <br /><br />
      <Reveal distance={50}>
        <PageSectionHeader  
          icon="school"
          title="My"
          subtitle="Education"
          textColor="text-white"
          subtextColor="text-pro"
        />
      </Reveal>
      <div className="lg:flex py-10 lg:py-16 lg:px-40">
        <div className="flex-auto"></div>
        <div className="lg:w-3/5 px-4 grid grid-cols-2 gap-8">
          <div className="lg:h-52 shadow-md ring-1 rounded-lg lg:flex col-span-2 overflow-hidden transition-colors duration-300">
            <img className="lg:h-full" src={process.env.PUBLIC_URL + "/Images/PITA.webp"} alt="PITA Building" loading="lazy" />
            {schools[0].college.map((item) => (
            <div key={item.degree} className="px-6 py-5">
              <Reveal axis="x"><h1 className="text-pro text-xl my-name">{item.degree}</h1></Reveal>
              <Reveal axis="x"><h1 className="text-md my-name">{item.name}</h1></Reveal>
              <Reveal axis="x"><h1 className="text-sm font-medium">{item.location}</h1></Reveal>
              <Reveal axis="x"><h1 className="w-fit text-sm text-f border rounded px-2 py-1 mt-2">{item.sy}</h1></Reveal>
            </div>
            ))}
          </div>
          {schools[0].basic.map((item, index) => (
            <div key={index} className="h-36 px-6 py-5 shadow-md ring-1 rounded-lg lg:col-span-1 xs:col-span-2 transition-colors duration-300">
              <Reveal axis="x"><h1 className="text-md my-name">{item.name}</h1></Reveal>
              <Reveal axis="x"><h1 className="text-a text-sm font-medium">{item.location}</h1></Reveal>
              <Reveal axis="x"><h1 className="text-pro text-sm my-name">{item.award}</h1></Reveal>
              <Reveal axis="x"><h1 className="w-fit text-sm text-f border rounded px-2 py-1 mt-2">{item.sy}</h1></Reveal>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function About() {

  return (
    <div id="about-sec" className="relative">
      <MyBackground />
      <Link to="educationSection" spy={true} smooth={'easeInOutQuart'} duration={1000} offset={-50}>
        <div className="flex justify-center">
          <img className="lg:fixed left-60 top-52 w-80 mb-10 selfie-img rounded-xl cursor-pointer" src={process.env.PUBLIC_URL + "/Images/grad_pic.webp"} alt="" loading="lazy" />
        </div>
      </Link>
      <MyEducation />
    </div>
  )
}

export default About;