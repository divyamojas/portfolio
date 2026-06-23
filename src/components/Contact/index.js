import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Backdrop } from '@mui/material'
import AnimatedLetters from '../AnimatedLetters'
import useTitle from '../../hooks/useTitle'
import './index.scss'

/* Arc Reactor SVG — used in the JARVIS success overlay */
const ReactorSVG = () => (
  <svg viewBox="0 0 120 120" className="reactor-svg" aria-hidden="true">
    <g className="jr-outer">
      <circle cx="60" cy="60" r="52" fill="none" stroke="var(--arc)" strokeWidth="1.5" opacity="0.5"/>
      {/* 8 fins */}
      <line x1="106" y1="60"   x2="112" y2="60"   stroke="var(--arc)" strokeWidth="2" strokeLinecap="round"/>
      <line x1="92.7" y1="92.7" x2="96.9" y2="96.9" stroke="var(--arc)" strokeWidth="2" strokeLinecap="round"/>
      <line x1="60"  y1="106"  x2="60"  y2="112"  stroke="var(--arc)" strokeWidth="2" strokeLinecap="round"/>
      <line x1="27.3" y1="92.7" x2="23.1" y2="96.9" stroke="var(--arc)" strokeWidth="2" strokeLinecap="round"/>
      <line x1="14"  y1="60"   x2="8"   y2="60"   stroke="var(--arc)" strokeWidth="2" strokeLinecap="round"/>
      <line x1="27.3" y1="27.3" x2="23.1" y2="23.1" stroke="var(--arc)" strokeWidth="2" strokeLinecap="round"/>
      <line x1="60"  y1="14"   x2="60"  y2="8"    stroke="var(--arc)" strokeWidth="2" strokeLinecap="round"/>
      <line x1="92.7" y1="27.3" x2="96.9" y2="23.1" stroke="var(--arc)" strokeWidth="2" strokeLinecap="round"/>
      {/* Hex ring r=38 */}
      <polygon points="98,60 79,92.9 41,92.9 22,60 41,27.1 79,27.1"
        fill="none" stroke="var(--arc)" strokeWidth="1.2" strokeLinejoin="round" opacity="0.40"/>
    </g>
    <g className="jr-inner">
      {/* Triangle pointing up, r=20 */}
      <polygon points="60,40 77.3,70 42.7,70"
        fill="none" stroke="var(--arc)" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="60" cy="60" r="12" fill="none" stroke="var(--arc)" strokeWidth="1.2" opacity="0.8"/>
      <circle cx="60" cy="60" r="7"  fill="none" stroke="var(--arc)" strokeWidth="0.8" opacity="0.6"/>
    </g>
    <circle cx="60" cy="60" r="52" fill="none" stroke="var(--arc)" strokeWidth="1.5" className="jr-pulse"/>
    <circle cx="60" cy="60" r="5" fill="var(--arc)" className="jr-core"/>
  </svg>
)

/* Iron Man HUD corner bracket for the JARVIS overlay */
const HUDCorner = ({ className }) => (
  <svg className={`jarvis-corner ${className}`} viewBox="0 0 60 60" aria-hidden="true">
    <g stroke="var(--arc)" fill="none">
      <polyline points="0,25 0,0 25,0" strokeWidth="1.5"/>
      <polyline points="6,20 6,6 20,6" strokeWidth="1" opacity="0.6"/>
      <rect x="0" y="0" width="4" height="4" fill="var(--arc)" strokeWidth="0"/>
    </g>
  </svg>
)

const JARVISScreen = ({ onClose }) => {
  useEffect(() => {
    const t = setTimeout(onClose, 8000)
    return () => clearTimeout(t)
  }, [onClose])

  return (
    <div className="jarvis-overlay" onClick={onClose}>
      {/* HUD hex grid texture */}
      <div className="jarvis-hex-bg" aria-hidden="true"/>

      {/* HUD corner brackets */}
      <HUDCorner className="jarvis-corner--tl" />
      <HUDCorner className="jarvis-corner--tr" />
      <HUDCorner className="jarvis-corner--bl" />
      <HUDCorner className="jarvis-corner--br" />

      {/* Arc reactor in centre */}
      <div className="jarvis-reactor">
        <ReactorSVG />
      </div>

      {/* Protocol label */}
      <p className="jarvis-protocol">F·R·I·D·A·Y&nbsp;&nbsp;PROTOCOL</p>

      {/* Message */}
      <div className="jarvis-content">
        <p className="jarvis-tagline">tony stark's personal ai, at your service</p>
        <h2 className="jarvis-heading">Transmission Received.</h2>
        <p className="jarvis-sub">I'll have him get back to you — once he's done tinkering.</p>
        <p className="jarvis-dismiss">tap anywhere to dismiss</p>
      </div>
    </div>
  )
}

/* FRIDAY error quips — because plain red boxes are beneath us */
const FRIDAY_QUIPS = [
  { line: `"Yeah, the antenna's definitely fried."`, attr: '— T. Stark, probably' },
  { line: `"I've run seventeen diagnostics. The issue isn't on our end."`, attr: '— FRIDAY, logging it anyway' },
  { line: `"Have you tried turning it off and on again?" "That's not how arc reactors work." "Same principle."`, attr: '— FRIDAY & Tony, 2014' },
  { line: `"The Sanctum's wards are blocking the signal. Or EmailJS is down. Hard to say."`, attr: '— Dr. Strange, unhelpfully' },
]

const DISMISS_SECS = 10

const FRIDAYOverlay = ({ error, onRetry, onDismiss }) => {
  const [quip] = useState(() => FRIDAY_QUIPS[Math.floor(Math.random() * FRIDAY_QUIPS.length)])
  const [countdown, setCountdown] = useState(DISMISS_SECS)
  const timestamp = useRef(new Date().toISOString().replace('T', ' ').slice(0, 19)).current

  useEffect(() => {
    const t = setInterval(() => {
      setCountdown(c => {
        if (c <= 1) { onDismiss(); return 0 }
        return c - 1
      })
    }, 1000)
    return () => clearInterval(t)
  }, [onDismiss])

  return (
    <div className="friday-overlay" role="alertdialog" aria-modal="true" aria-label="FRIDAY transmission error">
      {/* Full-height scanline */}
      <div className="fo-scanline" aria-hidden="true" />

      {/* Rotating reactor watermark */}
      <div className="fo-reactor-bg" aria-hidden="true">
        <svg viewBox="0 0 300 300" fill="none">
          <g stroke="var(--energy)">
            <circle cx="150" cy="150" r="130" strokeWidth="0.7" opacity="0.12"/>
            <polygon points="150,20 263,85 263,215 150,280 37,215 37,85" strokeWidth="0.7" opacity="0.18"/>
            <polygon points="150,58 228,103 228,197 150,242 72,197 72,103" strokeWidth="0.5" opacity="0.14"/>
            <circle cx="150" cy="150" r="55" strokeWidth="0.7" opacity="0.18"/>
            <polygon points="150,98 193,122 193,178 150,202 107,178 107,122" strokeWidth="0.6" opacity="0.15"/>
            <circle cx="150" cy="150" r="20" strokeWidth="0.7" opacity="0.22"/>
            <circle cx="150" cy="150" r="6" fill="var(--energy)" strokeWidth="0" opacity="0.20"/>
          </g>
        </svg>
      </div>

      {/* Main panel */}
      <div className="fo-panel">
        {/* Corner brackets */}
        <span className="fo-corner fo-tl" aria-hidden="true" />
        <span className="fo-corner fo-tr" aria-hidden="true" />
        <span className="fo-corner fo-bl" aria-hidden="true" />
        <span className="fo-corner fo-br" aria-hidden="true" />

        {/* Header */}
        <div className="fo-header">
          <span className="fo-warn" aria-hidden="true">⚠</span>
          <span className="fo-title">F·R·I·D·A·Y&nbsp;&nbsp;DIAGNOSTIC</span>
          <span className="fo-dot" aria-hidden="true" />
          <span className="fo-status">ERR_TRANSMISSION_FAILURE</span>
        </div>

        <div className="fo-rule" aria-hidden="true" />

        {/* Data table */}
        <div className="fo-body">
          <div className="fo-row">
            <span className="fo-key">TIMESTAMP</span>
            <span className="fo-val">{timestamp} UTC</span>
          </div>
          <div className="fo-row">
            <span className="fo-key">CHANNEL</span>
            <span className="fo-val">EmailJS / {process.env.REACT_APP_EMAILJS_SERVICE_ID || 'myriad_emails'}</span>
          </div>
          <div className="fo-row fo-row--fault">
            <span className="fo-key">FAULT</span>
            <span className="fo-val fo-val--error">{error}</span>
          </div>
        </div>

        {/* Quip */}
        <blockquote className="fo-quip">
          <p>{quip.line}</p>
          <cite>{quip.attr}</cite>
        </blockquote>

        {/* Countdown */}
        <div className="fo-countdown">
          <div className="fo-cd-track">
            <div className="fo-cd-fill" style={{ animationDuration: `${DISMISS_SECS}s` }} />
          </div>
          <span className="fo-cd-label">AUTO-DISMISS IN {countdown}s</span>
        </div>

        {/* Actions */}
        <div className="fo-actions">
          <button className="fo-btn fo-btn--retry" onClick={onRetry}>↺&nbsp;RETRY TRANSMISSION</button>
          <button className="fo-btn fo-btn--dismiss" onClick={onDismiss}>✕&nbsp;CLOSE DIAGNOSTIC</button>
        </div>
      </div>
    </div>
  )
}

const Contact = () => {
  useTitle('Contact')
  const [letterClass, setLetterClass] = useState('text-animate')
  const [loading, setLoading] = React.useState(false)
  const [sent, setSent] = React.useState(false)
  const [sendError, setSendError] = React.useState(null)
  const refForm = useRef()

  useEffect(() => {
    const timer = setTimeout(() => setLetterClass('text-animate-hover'), 3000)
    return () => clearTimeout(timer)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    setSendError(null)
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID  || 'myriad_emails',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'portfolio',
        refForm.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY  || 'wWU_Kle6cWQFmDvGm'
      )
      .then(
        () => {
          setLoading(false)
          setSent(true)
          refForm.current.reset()
        },
        (err) => {
          setLoading(false)
          const detail = err?.text || err?.message || `status ${err?.status}` || JSON.stringify(err)
          setSendError(detail)
          console.error('[EmailJS]', err)
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={'Contact me'.split('')}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            Open a channel. Whether it's a question, a collab idea, or just
            wanting to geek out about something — FRIDAY's listening.
          </p>
          <div className="contact-form">
            <form onSubmit={sendEmail} ref={refForm}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Your alias" required />
                </li>
                <li className="half">
                  <input type="email" name="email" placeholder="Secure comms channel" required />
                </li>
                <li>
                  <input type="text" name="subject" placeholder="Mission brief" required />
                </li>
                <li>
                  <textarea placeholder="Your intel" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="TRANSMIT" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="contact-info">
          <p className="connect-label">or open a direct channel</p>
          <div className="contact-items">
            <a href="https://www.linkedin.com/in/divyamojas/" target="_blank" rel="noreferrer" className="contact-item">
              <div className="item-icon"><FontAwesomeIcon icon={faLinkedin} /></div>
              <div className="item-text">
                <span className="item-label">LinkedIn</span>
                <span className="item-value">divyamojas</span>
              </div>
            </a>
            <a href="https://github.com/divyamojas" target="_blank" rel="noreferrer" className="contact-item">
              <div className="item-icon"><FontAwesomeIcon icon={faGithub} /></div>
              <div className="item-text">
                <span className="item-label">GitHub</span>
                <span className="item-value">divyamojas</span>
              </div>
            </a>
            <div className="contact-item static">
              <div className="item-icon"><FontAwesomeIcon icon={faLocationDot} /></div>
              <div className="item-text">
                <span className="item-label">Location</span>
                <span className="item-value">Remote, India</span>
              </div>
            </div>
          </div>
          <div className="availability">
            <span className="availability-dot" />
            Open to new opportunities
          </div>
        </div>
      </div>

      {/* Arc reactor loading backdrop */}
      <Backdrop sx={{ background: 'rgba(8,12,20,0.80)', backdropFilter: 'blur(8px)', zIndex: 1400 }} open={loading}>
        <div className="arc-loader loader-active" style={{ position: 'static', transform: 'none', opacity: 1, transition: 'none' }}>
          <svg viewBox="0 0 60 60" width="64" height="64" aria-hidden="true">
            <g className="al-outer">
              <circle cx="30" cy="30" r="26" fill="none" stroke="var(--arc)" strokeWidth="0.8" opacity="0.55"/>
              <line x1="51" y1="30" x2="56" y2="30" stroke="var(--arc)" strokeWidth="1.2" strokeLinecap="round" opacity="0.65"/>
              <line x1="44.85" y1="44.85" x2="48.38" y2="48.38" stroke="var(--arc)" strokeWidth="1.2" strokeLinecap="round" opacity="0.65"/>
              <line x1="30" y1="51" x2="30" y2="56" stroke="var(--arc)" strokeWidth="1.2" strokeLinecap="round" opacity="0.65"/>
              <line x1="15.15" y1="44.85" x2="11.62" y2="48.38" stroke="var(--arc)" strokeWidth="1.2" strokeLinecap="round" opacity="0.65"/>
              <line x1="9" y1="30" x2="4" y2="30" stroke="var(--arc)" strokeWidth="1.2" strokeLinecap="round" opacity="0.65"/>
              <line x1="15.15" y1="15.15" x2="11.62" y2="11.62" stroke="var(--arc)" strokeWidth="1.2" strokeLinecap="round" opacity="0.65"/>
              <line x1="30" y1="9" x2="30" y2="4" stroke="var(--arc)" strokeWidth="1.2" strokeLinecap="round" opacity="0.65"/>
              <line x1="44.85" y1="15.15" x2="48.38" y2="11.62" stroke="var(--arc)" strokeWidth="1.2" strokeLinecap="round" opacity="0.65"/>
              <polygon points="30,14 43.8,22 43.8,38 30,46 16.2,38 16.2,22" fill="none" stroke="var(--arc)" strokeWidth="0.9" strokeLinejoin="round" opacity="0.55"/>
            </g>
            <g className="al-inner">
              <polygon points="30,20 38.66,35 21.34,35" fill="none" stroke="var(--arc)" strokeWidth="1.1" strokeLinejoin="round"/>
              <circle cx="30" cy="30" r="6" fill="none" stroke="var(--arc)" strokeWidth="0.9" opacity="0.75"/>
            </g>
            <circle cx="30" cy="30" r="26" className="al-pulse"/>
            <circle cx="30" cy="30" r="3.5" className="al-core"/>
          </svg>
        </div>
      </Backdrop>

      {sent && <JARVISScreen onClose={() => setSent(false)} />}
      {sendError && (
        <FRIDAYOverlay
          error={sendError}
          onRetry={() => { setSendError(null); refForm.current?.requestSubmit() }}
          onDismiss={() => setSendError(null)}
        />
      )}
    </>
  )
}

export default Contact
