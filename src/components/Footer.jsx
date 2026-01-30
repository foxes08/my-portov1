import { FiHeart, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <span className="logo-accent">{"<"}</span>
              Portfolio
              <span className="logo-accent">{" />"}</span>
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <nav>
              <a href="#hero">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="footer-links">
            <h4>Connect</h4>
            <div className="footer-socials">
              <a href="#" aria-label="GitHub">
                <FiGithub size={20} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Portfolio. Made with{" "}
            <FiHeart className="heart-icon" /> by John Doe
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
