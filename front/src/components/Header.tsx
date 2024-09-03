import React, { useEffect, useState } from 'react'

import debol from '../assets/debol.jpg'
import user from '../assets/user.png'
import { NavLink } from 'react-router-dom'

type HeaderLinkTypes = { path: string, pageName: string, displayName: string }

export default function Header() {
  const [page, setPage] = useState("")
  

  const HeaderLink: React.FC<HeaderLinkTypes> = (props) => {

    return (<NavLink to={props.path}
      className={props.pageName === page ? "link active" : "link"}
      onClick={() => setPage(props.pageName)}>
      {props.displayName}
    </NavLink>)
  }


  return (
    <div className='header'>
      <div className='logo-area'>
        <NavLink to="/">
          <img src={debol} className='logo' />
        </NavLink>
        <span className='relative left-14 bottom-12'>DEBOL ENGINEERING </span>
      </div>

      <div className='links'>
        <HeaderLink path='/' pageName='home' displayName='Home' />
        <HeaderLink path='/notes' pageName='notes' displayName='Notes' />
        <HeaderLink path='/register' pageName='about' displayName='About Us' />
        <HeaderLink path='/contact' pageName='contact' displayName='Contact Us' />

      </div>

      <img src={user} className='profile' />
    </div>
  )
}


