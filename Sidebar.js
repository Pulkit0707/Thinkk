import React from 'react'
import './Sidebar.css'
import PsychologyIcon from '@mui/icons-material/Psychology';
import SidebarOption from './SidebarOption';
import Button from '@mui/material/Button';


function Sidebar() {
  return (
    <div className='sidebar'>
      <PsychologyIcon className='sidebar_twitterIcon'/>
      <SidebarOption active text="Home"/>
      <SidebarOption text="Explore"/>
      <SidebarOption text="Notifications"/>
      <SidebarOption text="Messages"/>
      <SidebarOption text="Bookmarks"/>
      <SidebarOption text="Lists"/>
      <SidebarOption text="Profile"/>
      <SidebarOption text="More"/>
      {/*Tweet*/}
      <Button variant="outlined" className="sidebar_tweet" fullWidth>Share Thought</Button>
    </div>
  )
}

export default Sidebar;
