import Reveal from '../Components/Reveal';
import PageSectionHeader from '../Components/PageSectionHeader';
import LinkProfileBadge from '../Components/LinkProfileBadge';

function Contact() {

  const badgeData = [
    {
      profileUrl: 'https://www.linkedin.com/in/rainier-barbacena',
      name: 'Rainier Barbacena',
      description1: 'Programmer/Application Developer',
      description2: 'LCC Group of Companies',
      imageUrl: '/Images/linkedin-dp.webp',
      logoUrl: '/Images/linkedin-logo.png',
    },
    {
      profileUrl: 'https://web.facebook.com/rainier.barbacena',
      name: 'Rainier Barbacena',
      description1: '3.3K friends',
      description2: 'Joined February 2013',
      imageUrl: '/Images/fb-dp.webp',
      logoUrl: '/Images/facebook-logo.png',
    },
    // Add more badge data as needed
  ];

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
        <br />
        <div className="md:px-40 sm:px-20 xs:px-4 my-3">
          <Reveal distance={50} delay={0.2}>
            <div className="flex md:flex-row xs:flex-col justify-center md:items-stretch xs:items-center gap-12 my-3">
                {badgeData.map((badge, index) => (
                  <LinkProfileBadge key={index} {...badge} />
                ))}
            </div>
          </Reveal>
          <br />
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
            <div className="text-center lg:mb-20 xs:mb-52">
              <Reveal>
                <h1 className="text-sm dark:text-a">Or email me directly at</h1>
              </Reveal>
              <br />
              <Reveal>
                <h1 className="text-h dark:text-aa font-bold underline">rainierbarbacena@gmail.com</h1>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;