import React from 'react'
import { OutlineIconButton, PrimaryButton } from '../cors/buttons'
import Image from 'next/image'
import Link from 'next/link'
import { AddCircleOutline } from '@mui/icons-material'

const Hero = () => {
  return (
  <div className='Hero' >
    {/* <div> */}
    <div className='left-side'>
      <div className='Shape2'></div>
      <div>
      <p className='title'>ONE MORE FRIEND</p>
      <p className='desription-1'>Thousands more fun!</p>
      </div>
      <p className='description-2'>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
      <div className='buttons'>
      <Link href='/AddAnnounce' style={{ textDecoration: 'none' }}>
        <OutlineIconButton text="Add announcement" icon={<AddCircleOutline/>} />
      </Link>
      <Link href='/Register'>
        <PrimaryButton text = "Join us"/>
      </Link>
      </div>
      <div className="shape5"></div>
    </div>
    <div className='Right-side'>
      <Image src="/img/heropic.svg" width={700} height={800} alt='hero_image'/>
      <div className="Shape3"></div>
      <div className="Shape4"></div>
    </div>
    {/* </div> */}
  </div>
  )
}

export default Hero