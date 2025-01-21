import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <div style={{display: "flex", flexDirection: "column"}} >
        Navigation
        <NavLink className={({isActive}) => (isActive? "active": "")} to={"/"} >Home</NavLink>
        <NavLink className={({isActive}) => (isActive? "active": "")} to={"/about"} >About</NavLink>
        <NavLink className={({isActive}) => (isActive? "active": "")} to={"/table"} >Table</NavLink>
    </div>
  )
}
