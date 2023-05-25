import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { PrimaryButton } from '../cors/buttons'

const DesktopHeader = () => {
    const router = useRouter()
  return (
    <div className='Header'>
        <div className="Logo">
            <Link href='/'>
                <Image src="/logo.svg" width={100} height={40} alt='logo'/>
            </Link>
        </div>
        <div className="Menu">
            {router.pathname=='/'?(
                <>
                <Link href="/">
                    Home
                </Link>
                <Link href="#pets">
                    Pets
                </Link>
                <Link href="#services">
                    Services
                </Link>
                <Link href="#about">
                    About
                </Link>
                <Link href="#tips">
                    Tips
                </Link>
                </>
            ):(
                <>
                <Link href="/">
                    Home
                </Link>
                <Link href="/pets">
                    Pets
                </Link>
                <Link href="/services">
                    Services
                </Link>
                <Link href="/about">
                    About
                </Link>
                <Link href="/tips">
                    Tips
                </Link>
                </>
            )}
        </div>
        <div className="Actions">
            <Link href='/Login'>
            <PrimaryButton text="Login" />
            </Link>
        </div>
    </div>
  )
}

export default DesktopHeader