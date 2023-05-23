import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className='left'>
            <div className="head">
                <p>Who</p><span>we are ?</span>
            </div>
            <div className='description'>
            <p>
            Welcome to <span>Molly</span>, the online platform for pet adoption and support
            we believe that every pet deserves a loving home, and we strongly discourage the buying of pets. Instead, we offer a user-friendly platform where you can search for and adopt pets of all kinds, from dogs and cats to birds and small animals. Our adoption process is designed to be transparent and easy to navigate, so you can find the perfect pet to join your family.
            we also offer a community support section, where anyone can ask for help if their pet is missing, sick, or in need of other assistance. Our team of volunteers and partners is dedicated to providing reliable and compassionate support to pet owners in times of need.
            </p>
            </div>
        </div>
        <div className="right">
            <Image src="/img/about-img.svg" width={500} height={500} alt='about' className='about-img'/>
        </div>
    </div>
  )
}

export default About