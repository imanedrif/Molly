import UserCard from '@/components/UserCard'
import Header from '@/components/cors/Header'
import PetCard from '@/components/homePage/imports/PetCard'
import React from 'react'

const Wishlist = () => {
  return (
    <div className='wishlist'>
        <Header/>
        <div className="wishlist-content">
            <div className="left">
                <p>My wishlist</p>
                <div className='Wishlist-slide'>
                    <PetCard/>
                </div>
            </div>
            <div className="right">
                <UserCard/>
            </div>
        </div>
    </div>
  )
}

export default Wishlist