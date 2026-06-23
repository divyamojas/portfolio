import React from 'react'
import { Link } from 'react-router-dom'
import useTitle from '../../hooks/useTitle'
import './index.scss'

const NotFound = () => {
  useTitle('404')
  return (
    <div className="container notfound-page">
      <div className="nf-content">
        <p className="nf-code">E R R · 4 0 4</p>
        <h1 className="nf-heading">Sector Not Found.</h1>
        <p className="nf-sub">
          <em>"FRIDAY, where does that URL go?"</em><br />
          <em>"Nowhere, boss. It doesn't exist."</em><br />
          <em>"Could be a sorcerer thing."</em><br /><br />
          This route was destroyed, relocated, or only exists
          in the Mirror Dimension.
        </p>
        <Link to="/" className="flat-button nf-btn">
          ← RETURN TO BASE
        </Link>
      </div>
      <div className="nf-reactor" aria-hidden="true">
        <svg viewBox="0 0 120 120">
          <g className="nf-outer">
            <circle cx="60" cy="60" r="52" fill="none" stroke="var(--arc)" strokeWidth="1.2" opacity="0.35"/>
            <polygon points="98,60 79,92.9 41,92.9 22,60 41,27.1 79,27.1"
              fill="none" stroke="var(--arc)" strokeWidth="1" opacity="0.30"/>
          </g>
          <g className="nf-inner">
            <polygon points="60,40 77.3,70 42.7,70"
              fill="none" stroke="var(--energy)" strokeWidth="1.4"/>
            <circle cx="60" cy="60" r="11" fill="none" stroke="var(--energy)" strokeWidth="1.1" opacity="0.7"/>
          </g>
          <circle cx="60" cy="60" r="52" fill="none" stroke="var(--arc)" strokeWidth="1.2" className="nf-pulse"/>
          <circle cx="60" cy="60" r="5" fill="var(--energy)" className="nf-core"/>
        </svg>
      </div>
    </div>
  )
}

export default NotFound
