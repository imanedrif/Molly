import Image from 'next/image'
import React from 'react'

const PetAdviceItems = (props:any) => {
  return (
    <div className='carousel-item'>
        <Image src ={props.item.imagesrc}  width={150} height={150} alt='light' className='carousel-img'/>
        <div className='carousel-description'>{props.item.advice}</div>
    </div>
  )
}

export default PetAdviceItems