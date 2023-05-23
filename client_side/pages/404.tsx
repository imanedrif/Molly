import Image from 'next/image'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='error'>
        <div className='shape1'></div>
        <div className='code'>
            <Image src='/vectors/vector4.svg' width={150} height={150} alt='pas-vector' className='vector'/>
            <p>4<span>0</span>4</p>
        </div>
        <div className='message'>
            <p>Page not found</p>
        </div>
        <div className='shape2'></div>
    </div>
  )
}

export default NotFoundPage