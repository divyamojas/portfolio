import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'

import LogoTitle from '../../assets/images/D-logo-32px.svg'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = 'ivyam'.split('')
  const jobArray = 'Web Developer.'.split('')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <div className="intro-text">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i</span>
              <span className={`${letterClass} _13`}>,</span>
              <br />
              <span className={`${letterClass} _14`}>I</span>
              <span className={`${letterClass} _15`}>'</span>
              <span className={`${letterClass} _16`}>m</span>

              <img src={LogoTitle} alt="developer" />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={17}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={24}
              />
            </h1>
          </div>
          <h2>
            Frontend / Backend / Javascript / <br /> Blockchain / Database /
            Salesforce
            {/* / UI/UX */}
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
