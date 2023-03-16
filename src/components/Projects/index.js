import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import ProjectTile from '../ProjectTile'

import { mm, fundraiserr, todoozzz } from '../../assets/images'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowAltCircleDown,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faArrowAltCircleUp,
} from '@fortawesome/free-solid-svg-icons'
import useWindowDimensions from '../../hooks/useWindowDimension'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const { width } = useWindowDimensions()
  const PROJECTS = [
    {
      title: 'Fundraiserrr',
      snapshot: fundraiserr,
      techstack: ['Solidity', 'ReactJS', 'TailwindCss', 'Thirdweb'],
      link: 'https://fundraiserrr.netlify.app/',
    },

    {
      title: 'Todoozzz',
      snapshot: todoozzz,
      techstack: ['Solidity', 'ReactJS', 'TailwindCss', 'Thirdweb'],
      link: 'https://todoozzz.web.app/signin',
    },
    {
      title: 'Monday Morning',
      snapshot: mm,
      techstack: [ 'ReactJS', 'TailwindCss'],
      link: 'https://mondaymorning.nitrkl.ac.in/',
    },
  ]
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container projects-page">
        <div className="my-projects-title">
          <h1>
            <AnimatedLetters
              strArray={'My Projects'.split('')}
              letterClass={letterClass}
              idx={15}
            />
          </h1>
        </div>
        <div className="project-container-skeleton">
          <div className="projects-container">
            {PROJECTS.map((project, key) => (
              <ProjectTile
                title={project.title}
                techstack={project.techstack}
                snapshot={project.snapshot}
                link={project.link}
                key={key}
              />
            ))}
          </div>
          <div className="project-arrows">
            <FontAwesomeIcon
              icon={width > 480 ? faArrowAltCircleUp : faArrowAltCircleLeft}
              size={'xl'}
            />
            <FontAwesomeIcon
              icon={width > 480 ? faArrowAltCircleDown : faArrowAltCircleRight}
              size={'xl'}
            />
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
