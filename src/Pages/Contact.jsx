import React, { useEffect } from 'react';
import Reveal from '../Components/Reveal';
import PageSectionHeader from '../Components/PageSectionHeader';

function Contact() {

  useEffect(() => {
    // Load the LinkedIn badge script dynamically
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const facebookProfileUrl = 'https://web.facebook.com/rainier.barbacena';

  return (
    <>
      <div id="contact-sec" className="relative min-h-screen overflow-auto lg:-mt-16 lg:pt-16 text-g">
        <br />
        <br />
        <Reveal distance={50}>
          <PageSectionHeader  
            icon="mail"
            title="Contact"
            subtitle="Me"
            textColor="text-oxford dark:text-b"
            subtextColor="text-heat dark:text-pro"
          />
        </Reveal>
        <br />
        <div className="flex flex-row gap-10 md:px-40 sm:px-20 xs:px-6">
          <div className="flex-1">
            <Reveal distance={50} delay={0.2}>
              <div className="flex justify-center my-3">
                <div className="xs:w-full lg:w-fit flex gap-12 rounded-md form-shadow backdrop-blur bg-opacity-25 dark:bg-opacity-25 xs:px-4 md:px-8 py-8">
                  <div className="grid place-content-center md:block xs:hidden">
                    <img className="h-72" src={process.env.PUBLIC_URL + "/Images/contact.svg"} alt="Contact Picture" loading="lazy" />
                  </div>
                  <div className="text-g dark:text-white xs:w-full md:w-96">
                    <h1 className="text-xl transition-colors duration-300">Send me an email</h1>
                    <p className="text-sm text-f">Feel free to reach out, my inbox is always open.</p>
                    <br />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <input type="text" placeholder="Full Name *" id="fullname" className="h-10 rounded-md py-1 px-4 bg-aa outline-none focus:ring-1 focus:ring-a dark:text-a dark:bg-g transition-colors duration-300" />
                      </div>
                      <div className="flex flex-col">
                        <input type="email" placeholder="Email *" id="email" className="h-10 rounded-md py-1 px-4 bg-aa outline-none focus:ring-1 focus:ring-a dark:text-a dark:bg-g transition-colors duration-300" />
                      </div>
                      <div className="flex flex-col">
                        <textarea name="message" placeholder="Message *" id="message" rows="4" className="rounded-md py-3 px-4 bg-aa outline-none focus:ring-1 focus:ring-a dark:text-a dark:bg-g transition-colors duration-300"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="grid place-content-center p-3 mb-4">
              <Reveal delay={0.2}>
                <a href="/contact" rel="noopener noreferrer">
                  <div className="w-fit p-4">
                      <button className="know-more flex items-center gap-2 rounded-full border border-oxford dark:border-g bg-oxford hover:bg-oxf-hover text-white px-8 py-3 font-bold dark:bg-g dark:hover:bg-h transition-colors duration-300">
                        Send
                        <ion-icon
                        name="arrow-forward-circle-outline"
                        class="text-xl icon-move transition-all ease-in-out duration-300"
                        ></ion-icon>
                      </button>
                  </div>
                </a>
              </Reveal>
            </div>
            <div className="text-center lg:mb-20 xs:mb-36">
              <Reveal>
                <h1 className="text-sm dark:text-a">Or email me directly at</h1>
              </Reveal>
              <br />
              <Reveal>
                <h1 className="text-h dark:text-aa font-bold underline">rainierbarbacena@gmail.com</h1>
              </Reveal>
            </div>
          </div>
          <div>
            <div className="badge-base LI-profile-badge my-3" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="rainier-barbacena-9a095a296" data-version="v1">
              <a className="badge-base__link LI-simple-link" href="https://ph.linkedin.com/in/rainier-barbacena-9a095a296?trk=profile-badge"></a>
            </div>
            <div className="fb-badge bg-white shadow">
              <div className="badge-head flex gap-1 px-4 items-center">
                <img className="h-5" src={process.env.PUBLIC_URL + "/Images/fb-logo.png"} alt="fb-logo" loading="lazy" />
                <img className="h-4" src={process.env.PUBLIC_URL + "/Images/facebook.png"} alt="facebook" loading="lazy" />
              </div>
              <div className="p-4">
                <img className="h-14 rounded-full" src={process.env.PUBLIC_URL + "/Images/fb-dp.jpg"} alt="facebook" loading="lazy" />
                <h1 className="pt-3 font-sans text-black font-semibold hover:underline"><a href={facebookProfileUrl} target="_blank" rel="noopener noreferrer">Rainier Barbacena</a></h1>
                <h1 className="pt-1 font-sans text-black text-sm">3.3K friends</h1>
                <h1 className="pt-1 pb-2 font-sans text-black text-xs">Joined February 2013</h1>
                <button className="font-sans px-4 py-1 rounded-full border"><a href={facebookProfileUrl} target="_blank" rel="noopener noreferrer">View profile</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;