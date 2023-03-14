import * as React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {
  FolderRounded,
  HomeRounded,
  MailRounded,
  Person4Rounded,
} from '@mui/icons-material'

import useWindowDimensions from '../../hooks/useWindowDimension'

export default function BottomBar() {
  const [value, setValue] = React.useState('')
  const { width } = useWindowDimensions()
  const navigate = useNavigate()

  const handleChange = (event, newValue) => {
    setValue(newValue)
    navigate(`/${newValue}`)
    console.log(event)
  }

  return (
    <BottomNavigation
      sx={{
        width: width,
        background: 'rgba(150, 107, 183, 0.06)',
        boxShadow: '0px 4px 4px -2px rgba(150, 107, 183, 0.25)',
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Home"
        value=""
        icon={<HomeRounded />}
        style={{ color: '#967bb6' }}
      />
      <BottomNavigationAction
        label="About"
        value="about"
        icon={<Person4Rounded />}
        style={{ color: '#967bb6' }}
      />
      <BottomNavigationAction
        label="Projects"
        value="projects"
        icon={<FolderRounded />}
        style={{ color: '#967bb6' }}
      />
      <BottomNavigationAction
        label="Contact"
        value="contact"
        icon={<MailRounded />}
        style={{ color: '#967bb6' }}
      />
    </BottomNavigation>
  )
}
