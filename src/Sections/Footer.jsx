import React, {useState, useEffect} from 'react';

function Footer() {

  const techStack = [
    { name: 'Netlify', src: '/Images/Tech Logos/netlify_footer.svg', alt: 'netlify', size: 'h-6', translate: 'translate-y-1' },
    { name: 'React', src: '/Images/Tech Logos/react_footer.svg', alt: 'reactjs', size: 'h-4', translate: 'translate-y-2' },
    { name: 'Tailwind CSS', src: '/Images/Tech Logos/tailwindcss_footer.svg', alt: 'tailwind css', size: 'h-3', translate: 'translate-y-2.5' },
  ];
  const currentYear = new Date().getFullYear();
  const socialMedia = [
    { name: 'LinkedIn', icon: 'logo-linkedin', link: 'https://www.linkedin.com/in/rainier-barbacena-9a095a296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'GitHub', icon: 'logo-github', link: 'https://github.com/MasterRAIN' },
    { name: 'Facebook', icon: 'logo-facebook', link: 'https://web.facebook.com/rainier.barbacena/' },
    { name: 'Discord', icon: 'logo-discord', link: 'https://discord.com/users/masterrain26' },
  ];

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

  return (
    <>
      <footer className="w-full absolute">
        {isMobile ? (
          <div>
            <div className="h-24 w-full -mt-24 text-xs p-2 bg-white dark:bg-g dark:text-a shadow-inner transition-colors duration-300">
              <div className="flex gap-8 justify-center text-xl p-3">
                {socialMedia.map((social, index) => (
                  <a 
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ion-icon
                      name={social.icon}
                      class={`text-g dark:text-a hover:text-c dark:hover:text-c hover:-translate-y-1 transition-all duration-300`}
                    ></ion-icon>
                  </a>
                ))}
              </div>
              <h1 className="text-center">© {currentYear} All rights reserved | <span className="text-heat dark:text-pro">Rainier Conde Barbacena</span></h1>
            </div>
          </div>
        ) : (
          <div className="w-full grid place-content-center h-8 -mt-8 text-sm bg-white dark:bg-g dark:text-a shadow-inner transition-colors duration-300">
            <div className="flex gap-2 absolute xl:left-16 lg:left-10 md:left-6 xs:left-3">
              {techStack.map((tech, index) => (
                <img 
                  key={index} 
                  src={tech.src} 
                  alt={tech.alt} 
                  className={`${tech.size} ${tech.translate} dark:invert transition-all duration-300`}
                />
              ))}
            </div>
            <h1>© {currentYear} All rights reserved | <span className="text-heat dark:text-pro">Rainier Conde Barbacena</span></h1>
            <div className="flex gap-4 absolute xl:right-16 lg:right-10 md:right-6 xs:right-3 text-xl translate-y-1.5">
              {socialMedia.map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ion-icon
                    name={social.icon}
                    class={`text-g dark:text-a hover:text-c dark:hover:text-c hover:-translate-y-1 transition-all duration-300`}
                  ></ion-icon>
                </a>
              ))}
            </div>
          </div>
        )}
      </footer>
    </>
  );
}

export default Footer;
