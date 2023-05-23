import { TextField } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='left'>
          <div className='section'>
            <h4>Pets</h4>
            <p>Cats</p>
            <p>Dogs</p>
            <p>Birds</p>
          </div>
          <div className='section'>
            <h4>Services</h4>
            <p>Adopt</p>
            <p>SOS</p>
          </div>
          <div className='section'>
            <h4>Explore</h4>
            <p>About</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className='right'>
          <h4>Contact us</h4>
          <TextField
            size="small"
            label="Haley@gmail.com" 
            sx={{
              width: '35%',
            }}
          />
        </div>
      </div>
      <div className="buttom">
            <hr />
            <div className='under-line'>
              <span className='text'>© 2022 Monito. All rights reserved.</span>
              <Image src="/logo.svg" width={100} height={100} alt='logo'/>
              <div className='text'>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Footer