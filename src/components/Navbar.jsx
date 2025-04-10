import { useState } from 'react';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faWrench, faFolder, faEnvelope, faCircleArrowDown, faSun, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className={`navbar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="navbar-left">
        <div 
          className={`animated-square ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        ></div>
        <div className="name-title">
          <h2>Brandon C. Pico</h2>
          <p>Simulator Technician I</p>
        </div>
      </div>

      <div className="navbar-center">
        <ul>
          <li>
            <button>
              <FontAwesomeIcon icon={faHome} />
              <span>Home</span>
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon={faUser} />
              <span>About</span>
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon={faWrench} />
              <span>Services</span>
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon={faFolder} />
              <span>Portfolio</span>
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Contact</span>
            </button>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <button className="icon-button">
          <FontAwesomeIcon icon={faCircleArrowDown} />
        </button>
        <button className="icon-button">
          <FontAwesomeIcon icon={faSun} />
        </button>
        <button className="icon-button toggle-button" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;