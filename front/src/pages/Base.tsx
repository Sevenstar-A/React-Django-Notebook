import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Base({children}) {
  return (
    <div className='layout'>
        <Header/>
        
        <div className='px-10 py-5'>
          {children}
        </div>
        
        <Footer />
    </div>
  )
}
