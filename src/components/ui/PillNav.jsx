import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./PillNav.css";

const PillNav = ({ items, onNavClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pillStyle, setPillStyle] = useState({});
  const navRef = useRef(null);
  const itemRefs = useRef([]);

  // Update pill position when activeIndex changes
  useEffect(() => {
    const updatePillPosition = () => {
      const activeItem = itemRefs.current[activeIndex];
      if (activeItem && navRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        setPillStyle({
          left: itemRect.left - navRect.left,
          width: itemRect.width,
        });
      }
    };

    updatePillPosition();
    window.addEventListener("resize", updatePillPosition);
    return () => window.removeEventListener("resize", updatePillPosition);
  }, [activeIndex]);

  // Scroll spy - detect which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = items.length - 1; i >= 0; i--) {
        const section = document.getElementById(items[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            if (activeIndex !== i) {
              setActiveIndex(i);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items, activeIndex]);

  const handleClick = (index, item) => {
    setActiveIndex(index);
    if (onNavClick) {
      onNavClick(item.id);
    }
  };

  return (
    <nav className="pill-nav" ref={navRef}>
      <motion.div
        className="pill-indicator"
        animate={pillStyle}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
      {items.map((item, index) => (
        <button
          key={item.id}
          ref={(el) => (itemRefs.current[index] = el)}
          className={`pill-nav-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => handleClick(index, item)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default PillNav;
