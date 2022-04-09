import React from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Buttons() {
  return (
    
      <div className = 'row ' >
          <div className='col-2 '></div>

          <div className='col '>
              <Button className="mx-5" ><Link to="/Books" className='text-light text-decoration-none'>SHOP NOW</Link></Button>
          </div>
          <div className='col-2 '></div>
          <div className ="col  ">
              <Button className="mx-5"><Link to="/Games" className='text-light text-decoration-none'>SHOP NOW</Link></Button>
          </div>
      </div>

    
  )
}
