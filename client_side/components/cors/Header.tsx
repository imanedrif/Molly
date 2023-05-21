import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { PrimaryButton } from './buttons'


const Header = () => {
  return (
    <div className='Header'>
        <div className="Logo">
            <Image src="/logo.svg" width={100} height={40} alt='logo'/>
        </div>
        <div className="Menu">
                <Link href="/">
                    Home
                </Link>
                <Link href="/pets">
                    Pets
                </Link>
                <Link href="/">
                    Services
                </Link>
                <Link href="/">
                    About
                </Link>
        </div>
        <div className="Actions">
            <PrimaryButton text="Sign Up" />
        </div>
    </div>
  )
}

export default Header