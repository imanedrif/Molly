import UserCard from '@/components/UserCard'
import Header from '@/components/cors/Header'
import Footer from '@/components/cors/footer'
import { useSession } from 'next-auth/react'
import React from 'react'

const Profile = () => {
    const {data}=useSession()
  return (
    <div className='profile'>
        <Header/>
        <div className="profile-container">
            <h1>Hello! {data?.user.name} 👋</h1>
        </div>
        <Footer/>
    </div>
  )
}

export default Profile
{/* hello! {data?.user.name} */}