import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./LoadingScreen.css";

const LoadingScreen = ({ onLoadComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onLoadComplete) {
        setTimeout(onLoadComplete, 500); // Wait for exit animation
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="loading-content">
            <motion.div
              className="loading-logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="logo-bracket">{"<"}</span>
              <span className="logo-text">FOXES</span>
              <span className="logo-bracket">{" />"}</span>
            </motion.div>

            <div className="loading-bar-container">
              <motion.div
                className="loading-bar"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>

            <motion.div
              className="loading-dots"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
