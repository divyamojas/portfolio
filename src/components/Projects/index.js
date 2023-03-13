import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import ProjectTile from '../ProjectTile'
import fundraiserrr from '../../assets/images/fundraiserr-snapshot.png'

import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              letterClass={letterClass}
              idx={15}
            />
          </h1>
        </div>
        <div className="projects-container">
          hi
          <ProjectTile
            title="Fundraiserrr"
            snapshot={fundraiserrr}
            techstack={['Solidity', 'ReactJS', 'TailwindCss', 'Thirdweb']}
          />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
