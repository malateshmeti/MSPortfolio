import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail, SiCodechef } from "react-icons/si";
import "./MsFooter.css";

const MsFooter = () => {
  return (
    <footer className="ms-footer-section">
      <div className="ms-footer-container">
        <div className="ms-footer-left">
          
          {/* Top Row: Name on left, Connect on right */}
          <div className="ms-footer-top-row">
            <div className="ms-footer-name">Malatesh Meti</div>
            <div className="ms-footer-connect-text">Connect</div>
          </div>

          {/* Bottom Row: Tagline on left, Social Links on right */}
          <div className="ms-footer-bottom-row">
            <div className="ms-footer-tagline">
              Passionate Software Developer building scalable & secure applications.
            </div>
            <div className="ms-footer-icons">
              <a
                href="https://www.linkedin.com/in/malatesh-meti-a68789228"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/malateshmeti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a href="mailto:malateshmeti01@gmail.com">
                <SiGmail />
              </a>
              <a
                href="https://www.codechef.com/users/msmeti4501"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiCodechef />
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="ms-footer-bottom">
        &copy; 2025 <span>Malatesh Meti</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default MsFooter;
