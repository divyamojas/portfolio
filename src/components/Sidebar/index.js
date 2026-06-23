import { Link } from 'react-router-dom'
import {
  faBriefcase,
  faEnvelope,
  faFileAlt,
  faFolder,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ThemeToggle from '../ThemeToggle'
import TransitionLink from '../TransitionLink'
import './index.scss'

/*
 * DO mark — "D" over "O" with Iron Man circuit-trace divider
 * (circuit right-angle traces + node squares instead of web strands)
 */
const DOMark = () => (
  <svg
    width="44"
    height="46"
    viewBox="0 0 44 46"
    fill="none"
    className="do-mark"
    aria-label="Divyam Ojas"
  >
    <text
      x="22" y="14"
      textAnchor="middle"
      dominantBaseline="middle"
      fontFamily="'Space Grotesk', system-ui, sans-serif"
      fontWeight="700"
      fontSize="21"
      fill="var(--accent)"
    >D</text>

    {/* Divider with circuit-board traces */}
    <rect x="8" y="21.5" width="28" height="1" rx="0.5" fill="var(--accent)" opacity="0.22"/>
    {/* Left traces — right-angle turns */}
    <polyline points="8,21.5 4,21.5 4,16" stroke="var(--accent)" strokeWidth="0.5" opacity="0.20" fill="none"/>
    <polyline points="8,21.5 2,21.5 2,26" stroke="var(--accent)" strokeWidth="0.5" opacity="0.14" fill="none"/>
    {/* Right traces */}
    <polyline points="36,21.5 40,21.5 40,16" stroke="var(--accent)" strokeWidth="0.5" opacity="0.20" fill="none"/>
    <polyline points="36,21.5 42,21.5 42,26" stroke="var(--accent)" strokeWidth="0.5" opacity="0.14" fill="none"/>
    {/* Circuit node squares */}
    <rect x="3" y="14.5" width="2" height="2" fill="var(--accent)" opacity="0.20"/>
    <rect x="1" y="24.5" width="2" height="2" fill="var(--accent)" opacity="0.14"/>
    <rect x="39" y="14.5" width="2" height="2" fill="var(--accent)" opacity="0.20"/>
    <rect x="41" y="24.5" width="2" height="2" fill="var(--accent)" opacity="0.14"/>

    <text
      x="22" y="33"
      textAnchor="middle"
      dominantBaseline="middle"
      fontFamily="'Space Grotesk', system-ui, sans-serif"
      fontWeight="700"
      fontSize="21"
      fill="var(--accent)"
    >O</text>
  </svg>
)

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <DOMark />
      </Link>
      <nav>
        <TransitionLink to="/">
          <FontAwesomeIcon icon={faHome} />
        </TransitionLink>
        <TransitionLink to="/about" className="about-link">
          <FontAwesomeIcon icon={faUser} />
        </TransitionLink>
        <TransitionLink to="/experience" className="experience-link">
          <FontAwesomeIcon icon={faBriefcase} />
        </TransitionLink>
        <TransitionLink to="/projects" className="projects-link">
          <FontAwesomeIcon icon={faFolder} />
        </TransitionLink>
        <TransitionLink to="/contact" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} />
        </TransitionLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/divyamojas/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/divyamojas">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1gzxPIcqWbJT2DC_A56tIwF_O4N0N9fMx/view?usp=sharing">
            <FontAwesomeIcon icon={faFileAlt} />
          </a>
        </li>
      </ul>
      <div className="theme-toggle-wrap">
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Sidebar
