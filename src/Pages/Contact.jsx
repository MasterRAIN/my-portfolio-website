import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '../Components/Reveal';
import PageSectionHeader from '../Components/PageSectionHeader';
import LinkProfileBadge from '../Components/LinkProfileBadge';

function Contact() {

  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error | null

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || import.meta.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // 🛡️ Anti-spam
    if (form.current?.bot_field?.value) return;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      return;
    }

    setLoading(true);
    setStatus(null);

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setStatus('success');
        form.current.reset();
      })
      .catch(() => {
        setStatus('error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // 🧠 Auto-hide toast
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const badgeData = [
    {
      profileUrl: 'https://www.linkedin.com/in/rainier-barbacena',
      name: 'Rainier Barbacena',
      description1: 'Programmer/Application Developer',
      description2: 'Tabaco, Bicol Region, Philippines',
      imageUrl: '/Images/corp_pic.webp',
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
  ];

  return (
    <>
      {/* 🔥 FLOATING TOAST */}
      <div className="fixed top-5 right-5 z-50">
        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="px-6 py-3 rounded-xl bg-green-500 text-white shadow-lg"
            >
              ✅ Message sent successfully!
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="px-6 py-3 rounded-xl bg-red-500 text-white shadow-lg"
            >
              ❌ Failed to send. Try again.
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div id="contact-sec" className="relative min-h-screen overflow-auto lg:-mt-16 lg:pt-16 text-g">

        <br /><br />

        <Reveal distance={50}>
          <PageSectionHeader  
            icon="mail"
            title="Contact"
            subtitle="Me"
            textColor="text-oxford dark:text-b"
            subtextColor="text-heat dark:text-pro"
          />
        </Reveal>

        <br /><br />

        <div className="md:px-40 sm:px-20 xs:px-4 my-3">

          {/* BADGES */}
          <Reveal distance={50} delay={0.2}>
            <div className="flex md:flex-row xs:flex-col justify-center md:items-stretch xs:items-center gap-12 my-3">
              {badgeData.map((badge, index) => (
                <LinkProfileBadge key={index} {...badge} />
              ))}
            </div>
          </Reveal>

          <br />

          <div className="flex-1">

            {/* FORM */}
            <form ref={form} onSubmit={sendEmail}>
              <Reveal distance={50} delay={0.2}>
                <div className="flex justify-center my-3">
                  <div className="xs:w-full lg:w-fit flex gap-12 rounded-md form-shadow backdrop-blur bg-opacity-25 dark:bg-opacity-25 xs:px-4 md:px-8 py-8">

                    {/* IMAGE */}
                    <div className="grid place-content-center md:block xs:hidden">
                      <img
                        className="h-72"
                        src="/Images/contact.svg"
                        alt="Contact"
                        loading="lazy"
                      />
                    </div>

                    {/* FORM FIELDS */}
                    <div className="text-g dark:text-white xs:w-full md:w-96">
                      <h1 className="text-xl transition-colors duration-300">Send me an email</h1>
                      <p className="text-sm text-f">Feel free to reach out, my inbox is always open.</p>

                      <br />

                      <div className="flex flex-col gap-4">

                        {/* 🛡️ Honeypot */}
                        <input type="text" name="bot_field" style={{ display: "none" }} />

                        <input
                          type="text"
                          name="from_name"
                          placeholder="Full Name *"
                          required
                          className="rounded-md py-3 px-4 bg-aa outline-none focus:ring-1 focus:ring-a dark:text-a dark:bg-g transition-colors duration-300"
                        />

                        <input
                          type="email"
                          name="from_email"
                          placeholder="Email *"
                          required
                          className="rounded-md py-3 px-4 bg-aa outline-none focus:ring-1 focus:ring-a dark:text-a dark:bg-g transition-colors duration-300"
                        />

                        <textarea
                          name="message"
                          placeholder="Message *"
                          rows="4"
                          required
                          className="rounded-md py-3 px-4 bg-aa outline-none focus:ring-1 focus:ring-a dark:text-a dark:bg-g transition-colors duration-300"
                        />

                      </div>
                    </div>

                  </div>
                </div>
              </Reveal>

              {/* 🔥 BUTTON WITH ANIMATION */}
              <div className="grid place-content-center p-3 mb-4">
                <Reveal delay={0.2}>
                  <div className="w-fit p-4">
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileTap={{ scale: 0.95 }}
                      animate={status === 'success' ? { scale: [1, 1.2, 1] } : {}}
                      className="know-more flex items-center gap-2 rounded-full border border-oxford dark:border-g bg-oxford hover:bg-oxf-hover text-white px-8 py-3 font-bold dark:bg-g dark:hover:bg-h transition-colors duration-300"
                    >
                      {loading ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          Sending...
                        </>
                      ) : status === 'success' ? (
                        <>
                          ✅ Sent!
                        </>
                      ) : (
                        <>
                          Send
                          <ion-icon
                            name="arrow-forward-circle-outline"
                            class="text-xl icon-move transition-all ease-in-out duration-300"
                          ></ion-icon>
                        </>
                      )}
                    </motion.button>
                  </div>
                </Reveal>
              </div>

            </form>

            {/* EMAIL TEXT */}
            <div className="text-center lg:mb-20 xs:mb-52 mt-6">
              <Reveal>
                <h1 className="text-sm dark:text-a">Or email me directly at</h1>
              </Reveal>
              <br />
              <Reveal>
                <h1 className="text-h dark:text-aa font-bold underline">
                  rainierbarbacena@gmail.com
                </h1>
              </Reveal>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;