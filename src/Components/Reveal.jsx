import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

function Reveal({ children, axis = 'y', distance = -50, width = '100%', }) {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { triggerOnce: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [inView, mainControls]);

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
      }}
      style={{ width: width, overflow: 'hidden' }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
