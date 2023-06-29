import UserCard from '@/components/UserCard'
import Header from '@/components/cors/Header'
import Footer from '@/components/cors/footer'
import PetCard from '@/components/homePage/imports/PetCard'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const Profile = () => {
  const {data:session,data}=useSession()
  const [pets,setPets]=useState([] as any)

    useEffect(()=>{
      axios.get("http://127.0.0.1:8000/api/user-pets",{
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          "Authorization": `Bearer ${data?.user.token}`,
      },
      }).then((response)=>{
        console.log(response.data)
        setPets(response.data.data)
      }).catch((err) => {
        console.log(err);
    });
    },[])
  return (
    <div className='profile'>
        <Header/>
        <div className="profile-container">
          <div className="profile-head">
            <h1>Hello! {data?.user.name} 👋</h1>
          </div>
          <div className="profile-body">
            <div className="cards">
              {pets.map((pet:any) => (
                <PetCard pet={pet}/>
              ))}
            </div>
            
          </div>
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default Profile
{/* hello! {data?.user.name} */}