import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoS from "../../assets/images/D-logo-24px.svg";
import LogoSubtitle from "../../assets/images/Divyam-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faEnvelope,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodon" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        
        <NavLink
          exact="true"
          activeclassname="active"
          className="projects-link"
          to="/projects"
        >
          <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer" // used to not pass the refererrer, i.e. don't tell linkedin that I come from my website ..maybe
            href="https://www.linkedin.com/in/divyamojas/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer" // used to not pass the refererrer, i.e. don't tell linkedin that I come from my website ..maybe
            href="https://www.linkedin.com/in/divyamojas/"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        {/* For Youtube or some other link */}
        {/* <li>
          <a
            target="_blank"
            rel="noreferrer" // used to not pass the refererrer, i.e. don't tell linkedin that I come from my website ..maybe
            href="https://github.com/divyamojas"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
