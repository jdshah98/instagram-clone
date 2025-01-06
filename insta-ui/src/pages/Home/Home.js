import React from 'react'
import './Home.css'
import RotatingHomeImage from '../../components/RotatingHomeImage/RotatingHomeImage'
import LoginForm from '../../components/LoginForm/LoginForm'

const Home = () => {
  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-center mt-3'>
        <div className='left'>
          <RotatingHomeImage />
        </div>
        <div className='right'>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Home