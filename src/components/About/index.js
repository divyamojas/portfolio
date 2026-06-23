import { faJava, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { mdb, elasticsearch } from '../../assets/logos'
import useTitle from '../../hooks/useTitle'

import './index.scss'

const About = () => {
  useTitle('About')
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            letterClass={letterClass}
            idx={15}
          />
        </h1>
        <p>
          Hey there, I'm Divyam — welcome to the ops center. Pull up a chair;
          FRIDAY's already made coffee.
        </p>
        <p>
          I'm a Senior Technical Support Engineer at Sprinklr, where I untangle
          production incidents on enterprise CCaaS and Conversational AI
          platforms. In practice: API debugging, log dives, Elasticsearch and
          MongoDB queries — finding exactly what broke and why, before the client
          notices twice.
        </p>
        <p>
          Backend foundation in Node.js and Java (Spring MVC). On the side,
          I ship full-stack apps with React and Supabase. Think of me as the
          engineer who fixes things in the field <em>and</em> builds new ones
          in the lab. Got something worth building? I'm in.
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cube-circbg" aria-hidden="true" />
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faNodeJs} color="#5FA04E" />
          </div>
          <div className="face3">
            <img src={mdb} alt="MongoDB" />
          </div>
          <div className="face4">
            <img src={elasticsearch} alt="Elasticsearch" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faJava} color="#f89820" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
