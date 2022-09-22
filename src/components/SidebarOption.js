import React from 'react'
import "../components/SidebarOption.css"


function SidebarOption( {active, text, Icon}) {
  return (
<div className={`sidebarOption ${active && "sidebarOptions__active"}`}>
        <Icon />
        <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption