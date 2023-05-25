import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { PrimaryButton } from './buttons'
import { useRouter } from 'next/router'
import DesktopHeader from '../ResponsiveHeader/DesktopHeader'
import MobileHeader from '../ResponsiveHeader/MobileHeader'


const Header = () => {
    const [deviceWidth,setDevicewidth]=useState(0) 
    useEffect(()=>{
        const handleresize= ()=>{
            setDevicewidth(window.innerWidth)
        }
        window.addEventListener('resize',handleresize)
        setDevicewidth(window.innerWidth)
        
        return()=>{
            window.removeEventListener('resize',handleresize)
        }
    },[])   
  return deviceWidth >1000 ? <DesktopHeader/> : <MobileHeader/>;
}

export default Header