import React from 'react'
import './index.scss'

const ProjectTile = ({ title, techstack, snapshot }) => {
  return (
    <div className="project-tile-container">
      <div className="project-title"></div>
      <div className="project-techstack"></div>
      <div className="project-snapshot">
        <img src={snapshot} alt="" />
      </div>
    </div>
  )
}

export default ProjectTile
