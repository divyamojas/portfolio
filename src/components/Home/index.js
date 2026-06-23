import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { faJava, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AnimatedLetters from '../AnimatedLetters'
import { mdb, elasticsearch } from '../../assets/logos'
import useTitle from '../../hooks/useTitle'
import './index.scss'

/*
 * 6 tech tiles at the outer-ring nodes of a Dr. Strange mandala.
 * `origin` is the CSS transform-origin for the pendulum hover swing.
 */
const TILES = [
  { id: 0, icon: <FontAwesomeIcon icon={faJsSquare}  color="#EFD81D" />, label: 'JavaScript',   top: '6.7%',  left: '50%',   origin: '50% 100%', delay: '0s'    },
  { id: 1, icon: <FontAwesomeIcon icon={faNodeJs}    color="#5FA04E" />, label: 'Node.js',      top: '28.3%', left: '87.7%', origin: '0% 100%',  delay: '-0.8s' },
  { id: 2, icon: <img src={mdb}   alt="MongoDB"    />,                   label: 'MongoDB',      top: '71.7%', left: '87.7%', origin: '0% 0%',    delay: '-1.6s' },
  { id: 3, icon: <img src={elasticsearch} alt="Elasticsearch" />,        label: 'Elasticsearch',top: '93.3%', left: '50%',   origin: '50% 0%',   delay: '-2.4s' },
  { id: 4, icon: <FontAwesomeIcon icon={faJava}      color="#f89820" />, label: 'Java',         top: '71.7%', left: '12.3%', origin: '100% 0%',  delay: '-3.2s' },
  { id: 5, icon: <FontAwesomeIcon icon={faReact}     color="#5ED4F4" />, label: 'React',        top: '28.3%', left: '12.3%', origin: '100% 100%',delay: '-4.0s' },
]

/*
 * Dr. Strange–inspired sacred geometry mandala with dual counter-rotating layers.
 * The outer layer (spokes + outer polygon) spins CW; the inner rings spin CCW.
 */
const HomeMandala = () => (
  <div className="home-mandala" aria-label="Tech stack">
    <svg className="mnd-svg" viewBox="0 0 300 300" aria-hidden="true">
      {/* Outer layer — 6 spokes + outer hex + petal arcs — spins CW */}
      <g className="mnd-outer" stroke="var(--accent)" fill="none">
        {/* 6 spokes */}
        <line x1="150" y1="150" x2="150" y2="20"  strokeWidth="0.85"/>
        <line x1="150" y1="150" x2="263" y2="85"  strokeWidth="0.85"/>
        <line x1="150" y1="150" x2="263" y2="215" strokeWidth="0.85"/>
        <line x1="150" y1="150" x2="150" y2="280" strokeWidth="0.85"/>
        <line x1="150" y1="150" x2="37"  y2="215" strokeWidth="0.85"/>
        <line x1="150" y1="150" x2="37"  y2="85"  strokeWidth="0.85"/>
        {/* Outer hex r≈130 */}
        <polygon points="150,20 263,85 263,215 150,280 37,215 37,85" strokeWidth="0.85"/>
        {/* Outer petal arcs (mandala feel) */}
        <path d="M 150,20 Q 220,20 263,85"   strokeWidth="0.6" opacity="0.45"/>
        <path d="M 263,85 Q 296,150 263,215"  strokeWidth="0.6" opacity="0.45"/>
        <path d="M 263,215 Q 220,280 150,280" strokeWidth="0.6" opacity="0.45"/>
        <path d="M 150,280 Q 80,280 37,215"   strokeWidth="0.6" opacity="0.45"/>
        <path d="M 37,215 Q 4,150 37,85"      strokeWidth="0.6" opacity="0.45"/>
        <path d="M 37,85 Q 80,20 150,20"      strokeWidth="0.6" opacity="0.45"/>
        {/* Outer node circles (tile attachment points) */}
        <circle cx="150" cy="20"  r="3.5" fill="var(--accent)" strokeWidth="0" opacity="0.6"/>
        <circle cx="263" cy="85"  r="3.5" fill="var(--accent)" strokeWidth="0" opacity="0.6"/>
        <circle cx="263" cy="215" r="3.5" fill="var(--accent)" strokeWidth="0" opacity="0.6"/>
        <circle cx="150" cy="280" r="3.5" fill="var(--accent)" strokeWidth="0" opacity="0.6"/>
        <circle cx="37"  cy="215" r="3.5" fill="var(--accent)" strokeWidth="0" opacity="0.6"/>
        <circle cx="37"  cy="85"  r="3.5" fill="var(--accent)" strokeWidth="0" opacity="0.6"/>
      </g>

      {/* Inner layer — mid hex + inner hex + petal arcs + Eye ring — spins CCW */}
      <g className="mnd-inner" stroke="var(--accent)" fill="none">
        {/* Mid hex r≈75 */}
        <polygon points="150,75 215,113 215,188 150,225 85,188 85,113" strokeWidth="0.85"/>
        {/* Mid petal arcs */}
        <path d="M 150,75 Q 190,75 215,113"  strokeWidth="0.55" opacity="0.40"/>
        <path d="M 215,113 Q 235,150 215,188" strokeWidth="0.55" opacity="0.40"/>
        <path d="M 215,188 Q 190,225 150,225" strokeWidth="0.55" opacity="0.40"/>
        <path d="M 150,225 Q 110,225 85,188"  strokeWidth="0.55" opacity="0.40"/>
        <path d="M 85,188 Q 65,150 85,113"    strokeWidth="0.55" opacity="0.40"/>
        <path d="M 85,113 Q 110,75 150,75"    strokeWidth="0.55" opacity="0.40"/>
        {/* Inner hex r≈30 */}
        <polygon points="150,120 176,135 176,165 150,180 124,165 124,135" strokeWidth="0.85"/>
        {/* Eye of Agamotto rings */}
        <circle cx="150" cy="150" r="20" strokeWidth="0.9" opacity="0.55"/>
        <circle cx="150" cy="150" r="12" strokeWidth="0.7" opacity="0.40"/>
      </g>

      {/* Static centre dot */}
      <circle cx="150" cy="150" r="4" fill="var(--accent)" opacity="0.35"/>
    </svg>

    {TILES.map(t => (
      <div
        key={t.id}
        className="mnd-tile"
        style={{ top: t.top, left: t.left, '--origin': t.origin, animationDelay: t.delay }}
      >
        <div className="mnd-card">{t.icon}</div>
        <span className="mnd-label">{t.label}</span>
      </div>
    ))}
  </div>
)

const Home = () => {
  useTitle(null)
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray  = 'ivyam'.split('')
  const jobLine1   = 'Sr. Technical Support'.split('')
  const jobLine2   = 'Engineer.'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <div className="intro-text">
          <h1 aria-label="Hi, I'm Divyam. Senior Technical Support Engineer.">
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>'</span>
            <span className={`${letterClass} _16`}>m</span>

            <span className="d-initial"> D</span>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={17} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobLine1} idx={23} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobLine2} idx={45} />
          </h1>
        </div>
        <div className="cta-buttons">
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <Link to="/resume" className="flat-button secondary">
            VIEW RESUME
          </Link>
        </div>
      </div>
      <HomeMandala />
    </div>
  )
}

export default Home
