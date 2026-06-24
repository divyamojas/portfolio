import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import useWindowDimensions from '../../hooks/useWindowDimension'
import Sidebar from '../Sidebar'
import BottomBar from '../BottomBar'
import ThemeToggle from '../ThemeToggle'
import './index.scss'

/*
 * Iron Man HUD corner — L-bracket + circuit traces that draw themselves in.
 * Sits in the top-right corner of every page as a recurring visual motif.
 */
const HUDCornerDecor = () => (
  <svg className="hud-corner-decor" viewBox="0 0 110 110" aria-hidden="true">
    <g stroke="var(--accent)" fill="none">
      {/* Outer L-bracket */}
      <polyline points="0,44 0,0 44,0" strokeWidth="0.9"/>
      {/* Inner L-bracket */}
      <polyline points="0,32 9,32 9,9 32,9" strokeWidth="0.7" strokeOpacity="0.55"/>
      {/* Circuit traces */}
      <line x1="22" y1="0" x2="22" y2="18" strokeWidth="0.6" strokeOpacity="0.40"/>
      <line x1="0"  y1="22" x2="18" y2="22" strokeWidth="0.6" strokeOpacity="0.40"/>
      <line x1="55" y1="0" x2="55" y2="9"  strokeWidth="0.5" strokeOpacity="0.28"/>
      <line x1="0"  y1="55" x2="9"  y2="55" strokeWidth="0.5" strokeOpacity="0.28"/>
      {/* Corner dot */}
      <rect x="0" y="0" width="4" height="4" fill="var(--accent)" strokeWidth="0" opacity="0.85"/>
      {/* Circuit junction dots */}
      <circle cx="22" cy="18" r="1.5" fill="var(--accent)" strokeWidth="0" opacity="0.45"/>
      <circle cx="18" cy="22" r="1.5" fill="var(--accent)" strokeWidth="0" opacity="0.45"/>
    </g>
  </svg>
)

/*
 * Arc-reactor page-transition loader.
 * Outer ring (8 fins + hex ring) spins CW, inner triangle spins CCW.
 * Pulse ring expands & fades. Core dot throbs.
 */
const ArcReactorLoader = ({ active }) => (
  <div className={`arc-loader ${active ? 'loader-active' : 'loader-hidden'}`}>
    <svg viewBox="0 0 60 60" width="60" height="60" aria-hidden="true">
      {/* Outer: ring + 8 fins + hex ring — spins CW */}
      <g className="al-outer">
        <circle cx="30" cy="30" r="26" fill="none" stroke="var(--arc)" strokeWidth="0.8" opacity="0.55"/>
        {/* 8 fins at 45° intervals */}
        <line x1="51"    y1="30"    x2="56"    y2="30"    stroke="var(--arc)" strokeWidth="1.2" strokeLinecap="round" opacity="0.65"/>
        <line x1="44.85" y1="44.85" x2="48.38" y2="48.38" stroke="var(--arc)" strokeWidth="1.2" strokeLinecap="round" opacity="0.65"/>
        <line x1="30"    y1="51"    x2="30"    y2="56"    stroke="var(--arc)" strokeWidth="1.2" strokeLinecap="round" opacity="0.65"/>
        <line x1="15.15" y1="44.85" x2="11.62" y2="48.38" stroke="var(--arc)" strokeWidth="1.2" strokeLinecap="round" opacity="0.65"/>
        <line x1="9"     y1="30"    x2="4"     y2="30"    stroke="var(--arc)" strokeWidth="1.2" strokeLinecap="round" opacity="0.65"/>
        <line x1="15.15" y1="15.15" x2="11.62" y2="11.62" stroke="var(--arc)" strokeWidth="1.2" strokeLinecap="round" opacity="0.65"/>
        <line x1="30"    y1="9"     x2="30"    y2="4"     stroke="var(--arc)" strokeWidth="1.2" strokeLinecap="round" opacity="0.65"/>
        <line x1="44.85" y1="15.15" x2="48.38" y2="11.62" stroke="var(--arc)" strokeWidth="1.2" strokeLinecap="round" opacity="0.65"/>
        {/* Hex ring r≈16 */}
        <polygon points="30,14 43.8,22 43.8,38 30,46 16.2,38 16.2,22"
          fill="none" stroke="var(--arc)" strokeWidth="0.9" strokeLinejoin="round" opacity="0.55"/>
      </g>
      {/* Inner: triangle + inner circle — spins CCW */}
      <g className="al-inner">
        {/* Triangle pointing up, vertices at r=10 */}
        <polygon points="30,20 38.66,35 21.34,35"
          fill="none" stroke="var(--arc)" strokeWidth="1.1" strokeLinejoin="round"/>
        <circle cx="30" cy="30" r="6" fill="none" stroke="var(--arc)" strokeWidth="0.9" opacity="0.75"/>
      </g>
      {/* Pulse ring */}
      <circle cx="30" cy="30" r="26" className="al-pulse"/>
      {/* Core */}
      <circle cx="30" cy="30" r="3.5" className="al-core"/>
    </svg>
  </div>
)

const Layout = () => {
  const { width } = useWindowDimensions()
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const t = setTimeout(() => setIsLoading(false), 450)
    return () => clearTimeout(t)
  }, [location.pathname])

  return (
    <div className="app">
      <HUDCornerDecor key={location.pathname} />
      <div className="navbar">
        {width > 480 && <Sidebar />}
        {width <= 480 && <BottomBar />}
        {width <= 480 && (
          <div style={{ position: 'fixed', top: 14, right: 14, zIndex: 1001 }}>
            <ThemeToggle />
          </div>
        )}
      </div>
      <div className="page">
        <span className="tags top-tags">
          <span className="top-tag-doctype"> &lt;!-- arc reactor: online --&gt;</span>
          <br />
          <span className="top-tag-html"> &lt;html lang="en"&gt;</span>
          <br />
          <span className="body-tag"> &lt;body data-suit="mark-l"&gt;</span>
        </span>

        <Outlet />

        <span className="tags bottom-tags">
          <span className="body-tag"> &lt;/body&gt;</span>
          <br />
          <span className="bottom-tag-html"> &lt;/html&gt;</span>
          <br />
          <span className="bottom-thanks"> &#47;&#47; FRIDAY: all systems nominal — standing by.</span>
        </span>
      </div>
      <ArcReactorLoader active={isLoading} />
    </div>
  )
}

export default Layout
