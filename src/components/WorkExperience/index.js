import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faGraduationCap, faTrophy } from '@fortawesome/free-solid-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import useTitle from '../../hooks/useTitle'
import './index.scss'

const EXPERIENCE = [
  {
    company: 'Sprinklr India Pvt. Ltd',
    role: 'Senior Technical Support Engineer',
    subRole: 'Technical Support Engineer  ·  Sep 2023 – May 2026',
    period: 'Jun 2026 – Present',
    location: 'Remote, India',
    points: [
      'Resolved 35+ high-priority (Platinum-tier) enterprise production tickets per week across Conversational AI and automation modules, using logs, API traces, and database queries.',
      'Investigated complex platform issues with browser developer tools and platform-level debugging, improving stability and reducing ticket inflow by 15%.',
      'Cut average ticket resolution time by 20% through improved debugging workflows and faster root-cause identification.',
      'Partnered with engineering teams to pinpoint code-level bugs and turn recurring platform issues into permanent fixes.',
      'Configured AI workflows, bots, and marketing-automation journeys for enterprise clients across multiple modules.',
      'Authored debugging documentation and configuration guides, contributing ~40% of team knowledge-base content.',
    ],
  },
  {
    company: 'Cyfuture India Pvt. Ltd',
    role: 'Associate Software Engineer',
    subRole: null,
    period: 'Jun 2023 – Sep 2023',
    location: 'Noida, India',
    points: [
      'Developed backend services using Spring MVC and Hibernate for enterprise application modules.',
      'Implemented MSSQL integration for backend data persistence, and debugged application logic and integration issues.',
    ],
  },
]

const SKILLS = [
  { group: 'Languages',     items: ['JavaScript', 'SQL', 'Java'] },
  { group: 'Databases',     items: ['MongoDB', 'Elasticsearch', 'PostgreSQL', 'MySQL', 'MSSQL'] },
  { group: 'Backend & APIs',items: ['Node.js', 'REST APIs', 'Spring MVC', 'Hibernate'] },
  { group: 'Tools',         items: ['Postman', 'Git', 'Jira', 'Firebase', 'Cursor', 'Claude Code'] },
]

const LEADERSHIP = [
  {
    title: 'HackOdisha',
    sub: 'National Hackathon — Co-organizer',
    detail: 'Managed logistics for 3,500+ participants and coordinated 40+ sponsors across the event.',
  },
  {
    title: 'RITVIC Cultural Society',
    sub: 'Actor & Scriptwriter',
    detail: 'Performed in inter-college and national-level cultural competitions; wrote and directed scripts for stage productions.',
  },
]

const WorkExperience = () => {
  useTitle('Experience')
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container experience-page">
      <div className="exp-title">
        <h1>
          <AnimatedLetters
            strArray={'Experience'.split('')}
            letterClass={letterClass}
            idx={15}
          />
        </h1>
      </div>

      {/* ── Work Experience ──────────────────────────────────── */}
      <div className="experience-timeline">
        {EXPERIENCE.map((exp, i) => (
          <div key={i} className="experience-card">
            <div className="exp-header">
              <span className="exp-company">{exp.company}</span>
              <div className="exp-meta">
                <span className="exp-role">{exp.role}</span>
                {exp.subRole && (
                  <span className="exp-subrole">{exp.subRole}</span>
                )}
                <span className="exp-period">{exp.period}</span>
                <span className="exp-location">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> {exp.location}
                </span>
              </div>
            </div>
            <ul className="exp-points">
              {exp.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Skills & Tools ──────────────────────────────────── */}
      <div className="exp-section-label">
        <span className="section-icon"><FontAwesomeIcon icon={faTrophy} /></span>
        Operational Arsenal
      </div>
      <div className="skills-grid">
        {SKILLS.map((group, i) => (
          <div key={i} className="skill-group">
            <span className="skill-group-name">{group.group}</span>
            <div className="skill-chips">
              {group.items.map((item, j) => (
                <span key={j} className="skill-chip">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Education ───────────────────────────────────────── */}
      <div className="exp-section-label">
        <span className="section-icon"><FontAwesomeIcon icon={faGraduationCap} /></span>
        Training Dossier
      </div>
      <div className="experience-timeline">
        <div className="experience-card edu-card">
          <div className="exp-header">
            <span className="exp-company">National Institute of Technology, Rourkela</span>
            <div className="exp-meta">
              <span className="exp-role">B.Tech. in Mechanical Engineering</span>
              <span className="exp-period">Jul 2019 – Jun 2023</span>
              <span className="exp-location">
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Rourkela, India
              </span>
            </div>
          </div>
          <ul className="exp-points">
            <li>CGPA: 7.25 / 10</li>
          </ul>
        </div>
      </div>

      {/* ── Leadership & Activities ─────────────────────────── */}
      <div className="exp-section-label">
        <span className="section-icon">◈</span>
        Field Operations
      </div>
      <div className="leadership-grid">
        {LEADERSHIP.map((item, i) => (
          <div key={i} className="leadership-card">
            <span className="lc-title">{item.title}</span>
            <span className="lc-sub">{item.sub}</span>
            <p className="lc-detail">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkExperience
