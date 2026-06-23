import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import useTitle from '../../hooks/useTitle'
import './index.scss'

const RESUME_URL = 'https://drive.google.com/file/d/1gzxPIcqWbJT2DC_A56tIwF_O4N0N9fMx'

const Resume = () => {
  useTitle('Resume')
  const [letterClass, setLetterClass] = useState('text-animate')
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const iframeRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  /* Fallback: if iframe hasn't fired onLoad within 10s, show it anyway */
  useEffect(() => {
    const fallback = setTimeout(() => setIframeLoaded(true), 10000)
    return () => clearTimeout(fallback)
  }, [])

  return (
    <div className="container resume-page">
      <div className="resume-header">
        <h1>
          <AnimatedLetters
            strArray={'Resume'.split('')}
            letterClass={letterClass}
            idx={15}
          />
        </h1>
        <a
          href={`${RESUME_URL}/view?usp=sharing`}
          target="_blank"
          rel="noreferrer"
          className="flat-button"
        >
          OPEN FULL SCREEN&nbsp;
          <FontAwesomeIcon icon={faUpRightFromSquare} size="xs" />
        </a>
      </div>
      <div className="resume-preview">
        {!iframeLoaded && (
          <div className="resume-skeleton" aria-label="Loading resume…">
            <div className="resume-skeleton-inner">
              <div className="sk-arc-loader">
                <div className="arc-loader loader-active" style={{ position: 'static', transform: 'none', opacity: 1, transition: 'none' }}>
                  <svg viewBox="0 0 60 60" width="48" height="48" aria-hidden="true">
                    <g className="al-outer">
                      <circle cx="30" cy="30" r="26" fill="none" stroke="var(--arc)" strokeWidth="0.8" opacity="0.55"/>
                      <line x1="51" y1="30" x2="56" y2="30" stroke="var(--arc)" strokeWidth="1.2" strokeLinecap="round"/>
                      <line x1="44.85" y1="44.85" x2="48.38" y2="48.38" stroke="var(--arc)" strokeWidth="1.2" strokeLinecap="round"/>
                      <line x1="30" y1="51" x2="30" y2="56" stroke="var(--arc)" strokeWidth="1.2" strokeLinecap="round"/>
                      <line x1="15.15" y1="44.85" x2="11.62" y2="48.38" stroke="var(--arc)" strokeWidth="1.2" strokeLinecap="round"/>
                      <line x1="9" y1="30" x2="4" y2="30" stroke="var(--arc)" strokeWidth="1.2" strokeLinecap="round"/>
                      <line x1="15.15" y1="15.15" x2="11.62" y2="11.62" stroke="var(--arc)" strokeWidth="1.2" strokeLinecap="round"/>
                      <line x1="30" y1="9" x2="30" y2="4" stroke="var(--arc)" strokeWidth="1.2" strokeLinecap="round"/>
                      <line x1="44.85" y1="15.15" x2="48.38" y2="11.62" stroke="var(--arc)" strokeWidth="1.2" strokeLinecap="round"/>
                      <polygon points="30,14 43.8,22 43.8,38 30,46 16.2,38 16.2,22" fill="none" stroke="var(--arc)" strokeWidth="0.9" opacity="0.55"/>
                    </g>
                    <g className="al-inner">
                      <polygon points="30,20 38.66,35 21.34,35" fill="none" stroke="var(--arc)" strokeWidth="1.1"/>
                      <circle cx="30" cy="30" r="6" fill="none" stroke="var(--arc)" strokeWidth="0.9" opacity="0.75"/>
                    </g>
                    <circle cx="30" cy="30" r="26" className="al-pulse"/>
                    <circle cx="30" cy="30" r="3.5" className="al-core"/>
                  </svg>
                </div>
              </div>
              <p>FRIDAY — decrypting dossier…</p>
            </div>
          </div>
        )}
        <iframe
          ref={iframeRef}
          src={`${RESUME_URL}/preview`}
          title="Divyam Ojas Resume"
          frameBorder="0"
          allowFullScreen
          onLoad={() => setIframeLoaded(true)}
          style={{ opacity: iframeLoaded ? 1 : 0 }}
        />
      </div>
    </div>
  )
}

export default Resume
