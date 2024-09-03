import React, { ReactNode } from 'react'
import "../../styles/auth.css"
import { useNavigate } from 'react-router-dom';

interface MyComponentProps {
  children: ReactNode;
  // Add other props if needed
}

const AuthBase : React.FC<MyComponentProps>= ({children})=> {
  const navigate = useNavigate()
  const msg= ""
  return (
    <div className='anonyms-parent '>
        <div className='w-full px-20 fixed'>
          <button className='w-32' onClick={()=>{navigate('/')}}> {msg} Home</button>

        </div>
        <div className='auth'>
          {children}
        </div>
    </div>
  )
}
export default AuthBase
