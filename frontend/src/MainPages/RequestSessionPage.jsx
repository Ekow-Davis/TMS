import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Link } from 'react-router-dom'
import StatusCards from '../Components/StatusCards'

const RequestSessionPage = () => {
  return (
    <>
    <div className='flex'>
      <Sidebar />
      <div className='flex-grow'>
        <Link to='./RequestSessionFormPage'>
        Request Session
        </Link>

        <div>
          <StatusCards
          
          />
        </div>
      </div>
    </div>
    
    </>
  )
}

export default RequestSessionPage