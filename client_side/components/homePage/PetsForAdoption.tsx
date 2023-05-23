import React from 'react';
import PetCard from "./imports/PetCard";
import { SecondaryButton } from '../cors/buttons';
import Image from 'next/image';
const PetsForAdoption = () => {
    return (
        <div className='PetsForAdoption' id='pets'>
            <h1>Some Pets For Adoption</h1>
            <Image src="/vectors/vector2.svg" width={330} height={330} alt='vector' className='vector1'/>
            <div className='Pets'>
                <PetCard />
                <PetCard />
                <PetCard />
                <PetCard />
                <PetCard />
                <PetCard />
            </div>
            <Image src="/vectors/cercle.svg" width={200} height={200} alt='cercle' className='vector2'/>
            <SecondaryButton text = "View More"/>
        </div>
    )
}

export default PetsForAdoption