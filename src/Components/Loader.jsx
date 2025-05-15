import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from '../Screens/Home';
import introVideo from '../assets/Offshore 365 animation white on blue.mp4';

const Loader = () => {
  const videoRef = useRef(null);
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    // Backup timeout in case the video doesn't emit 'ended' (7 seconds)
    const timeout = setTimeout(() => {
      setShowHome(true);
    }, 7000);

    const handleEnded = () => {
      clearTimeout(timeout);
      setShowHome(true);
    };

    if (video) {
      video.addEventListener('ended', handleEnded);
    }

    return () => {
      if (video) video.removeEventListener('ended', handleEnded);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {!showHome ? (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <video
            ref={videoRef}
            src={introVideo}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Home />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
