import Reveal from '../Components/Reveal';
import PageSectionHeader from '../Components/PageSectionHeader';

function Contact() {
  return (
    <>
      <div className="relative text-g">
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
        <div className="flex justify-center px-40">
          <div className="w-fit flex gap-12 rounded-md form-shadow backdrop-blur bg-opacity-25 dark:bg-opacity-25 px-8 py-8">
            <div className="">
              <img className="w-52" src={process.env.PUBLIC_URL + "/Images/contact.png"} alt="" loading="lazy" />
            </div>
            <div className="text-g dark:text-white">
              <h1 className="text-xl transition-colors duration-300">Send me an email</h1>
              <p className="text-sm text-f">Feel free to reach out, my inbox is always open.</p>
              <br />
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <input type="text" placeholder="Full Name *" id="fullname" className="h-10 rounded-md py-1 px-4 bg-a outline-none focus:ring-1 focus:ring-b dark:text-a dark:bg-g transition-colors duration-300" />
                </div>
                <div className="flex flex-col">
                  <input type="email" placeholder="Email *" id="email" className="h-10 rounded-md py-1 px-4 bg-a outline-none focus:ring-1 focus:ring-b dark:text-a dark:bg-g transition-colors duration-300" />
                </div>
                <div className="flex flex-col">
                  <textarea name="message" placeholder="Message *" id="message" cols="40" rows="4"className="rounded-md py-3 px-4 bg-a outline-none focus:ring-1 focus:ring-b dark:text-a dark:bg-g transition-colors duration-300"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid place-content-center p-3">
          <Reveal>
            <a href="/contact" target="_blank" rel="noopener noreferrer">
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
      </div>
    </>
  )
}

export default Contact;