import React from 'react'
import { PrimaryButton } from '../cors/buttons'
import Image from 'next/image'

const Services = () => {
  return (
    <div className="Services" id='services'>
        <h1 className="Title">Discover our Services</h1>
        <div className='Cards'>
            <div className="Card">
                <Image src="/AdoptionSercice.png" width={700} height={200} alt='adoption-service' className='service-1'/>
                <div className="Right">
                    <p className="Title">Pet Adoption <Image src="/icons/pas.svg" width={28} height={28} alt='pasicon'/></p>
                    <p className="Description">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                    <PrimaryButton text="Discover"/>
                </div>
            </div>
            <div className="Card">
                <Image src="/SosService.png"  alt='sos-service' className='service-2' width={700} height={200} />
                <div className="Left">
                    <p className="Title">Pet SOS <Image src="/icons/sosicon.svg" width={36} height={36} alt='pasicon'/></p>
                    <p className="Description">Our service provides a dedicated platform for pet owners to add a distressing announcement if their pet has gone missing, or if they are in danger. Our community of animal lovers is always ready to assist in any way possible, and we offer a range of resources to help reunite pets with their owners.</p>
                    <PrimaryButton text="Add SOS"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services