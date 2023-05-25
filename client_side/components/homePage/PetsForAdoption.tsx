import React from 'react';
import PetCard from "./imports/PetCard";
import { SecondaryButton } from '../cors/buttons';
import Image from 'next/image';
import Link from 'next/link';
const PetsForAdoption = () => {
    return (
        <div className='PetsForAdoption' id='pets'>
            <h1>Some Pets For Adoption</h1>
            <Image src="/vectors/vector2.svg" width={330} height={330} alt='vector' className='vector1'/>
            <div className='Pets'>
                <PetCard gende="Male" city="Rabat" Age="1yo"/>
                <PetCard gende="Male" city="Rabat" Age="1yo"/>
                <PetCard gende="Male" city="Rabat" Age="1yo"/>
                <PetCard gende="Male" city="Rabat" Age="1yo"/>
                <PetCard gende="Male" city="Rabat" Age="1yo"/>
                <PetCard gende="Male" city="Rabat" Age="1yo"/>
            </div>
            <Image src="/vectors/cercle.svg" width={200} height={200} alt='cercle' className='vector2'/>
            <Link href='/pets'>
                <SecondaryButton text = "View More"/>
            </Link>
        </div>
    )
}

export default PetsForAdoption