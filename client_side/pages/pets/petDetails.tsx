import UserCard from '@/components/UserCard'
import Footer from '@/components/cors/Footer'
import Header from '@/components/cors/Header'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Card, CardContent, CardHeader, IconButton, Input, InputAdornment, TextField } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'

const PetDetails = () => {
    return (
        <>
        <Header />
        <div className='petdetails'>
            <div className="contents">
                <div className="left">
                    <div className="title">
                        <p>Pet details</p>
                    </div>
                    <Image src='/img/pet3.png' width={100} height={100} alt='pet' />
                    <div className="details">
                        <div className="D1">
                            <div>
                                <p>Name : </p> <span> Leo</span>
                            </div>
                            <hr />
                            <div>
                                <p>Gender :</p><span>Male</span>
                            </div>
                        </div>
                        <div className="D2">
                            <p>City :</p> <span>Rabat</span>
                        </div>
                        <div className="D3">
                            <p>Description</p>
                            <span>leo  would be perfect for someone with dog experience who wants a true companion. he is intelligent, sweet, quiet, and very protective. Since his adoption he has been well loved, and he knows how to give it in return! We feel safe keeping our doors unlocked at night, as he has a loud warning bark, and would be perfect in a setting with enclosed outdoor space.</span>
                        </div>
                        <div className="D4">
                            <p>Status :</p>
                            <span>Available</span>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <UserCard/>
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default PetDetails