import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{ height: '300px' }} className='mt-5 container w-100'>
      <div className="d-flex justify-content-between">
        {/* Intro */}
        <div style={{ width: '400px' }}>
          <h5><i className="fa-solid fa-music me-2"></i>
            Media Player</h5>
          <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        {/* Links */}
        <div className="d-flex flex-column">
          <h5>Links</h5>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Landing Page</Link>
          <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>Home Page</Link>
          <Link to={'/history'} style={{ textDecoration: 'none', color: 'white' }}>Watch History Page</Link>
        </div>
        {/* Guides */}
        <div className="d-flex flex-column">
          <h5>Guides</h5>
          <a style={{ textDecoration: 'none', color: 'white' }} href="https://react.dev/" target='_blank'>React</a>
          <a style={{ textDecoration: 'none', color: 'white' }} href="https://react-bootstrap.netlify.app/" target='_blank'>React Bootstrap</a>
          <a style={{ textDecoration: 'none', color: 'white' }} href="https://reactrouter.com/" target='_blank'>React Router</a>
        </div>
        {/* Contact */}
        <div className="d-flex flex-column">
          <h5>Contact</h5>
          <div className="d-flex">
            <input className='form-control me-2' type="email" name="" id="" placeholder='Enter your email here' />
            <button className='btn btn-info'><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-twitter"></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-instagram"></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-facebook"></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-brands fa-github"></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i class="fa-solid fa-phone"></i></a>
          </div>
        </div>
      </div>
      <p className='text-center'>Copyright &copy; 2024</p>
    </div>
  )
}

export default Footer