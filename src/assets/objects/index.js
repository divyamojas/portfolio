const SCREENSHOT = (url) =>
  `https://s0.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=600&h=400`

const PROJECTS = [
  {
    title: 'Leaflet Books',
    snapshot: SCREENSHOT('https://leafletbooks.netlify.app/'),
    fallback: null,
    description:
      'A full-stack peer-to-peer book lending platform built to solve book-sharing within the workplace, shipped end-to-end to production. React frontend and Node.js backend integrating Supabase (PostgreSQL) and REST APIs for real-time book tracking and user interactions.',
    techstack: ['React', 'Node.js', 'Supabase', 'MUI'],
    live: 'https://leafletbooks.netlify.app/',
    github: 'https://github.com/divyamojas/project-nexus',
  },
  {
    title: 'Monday Morning',
    snapshot: SCREENSHOT('https://mondaymorning.nitrkl.ac.in/'),
    fallback: null,
    description:
      'UI components and admin dashboard features for a campus publication platform. Improved content publishing workflows and frontend performance using React and Redux.',
    techstack: ['React', 'Redux', 'JavaScript'],
    live: 'https://mondaymorning.nitrkl.ac.in/',
    github: 'https://github.com/divyamojas/project-tahiti',
  },
]

export { PROJECTS }
