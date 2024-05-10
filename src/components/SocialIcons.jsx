import React from 'react'
import { NavLink } from 'react-router-dom'

function SocialIcons({className, img, link}) {
  return (
    <div className={className}>
        <NavLink to={link}>
            <img src={img}/>
        </NavLink>
    </div>
  )
}

export default SocialIcons