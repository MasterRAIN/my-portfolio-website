import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

function Reveal({ children, axis = 'y', distance = -50, width = '100%', delay = 0 }) {
  const containerRef = useRef(null);
  const hasObserver = typeof window !== 'undefined' && 'IntersectionObserver' in window;
  const inView = useInView(containerRef, { triggerOnce: true, skip: !hasObserver });
  const mainControls = useAnimation();

  useEffect(() => {
    if (hasObserver) {
      if (inView) {
        mainControls.start('visible');
      } else {
        mainControls.start('hidden');
      }
    } else {
      mainControls.start('visible');
    }
  }, [hasObserver, inView, mainControls]);

  const variants = {
    visible: { opacity: 1, [axis]: 0 },
    hidden: { opacity: 0, [axis]: distance },
  };

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={mainControls}
      variants={variants}
      transition={{
        duration: 0.5,
        ease: [0.1, 0.8, 0.2, 0.9],
        delay: delay,
      }}
      style={{ width: width }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
