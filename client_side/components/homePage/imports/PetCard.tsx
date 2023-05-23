import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Image from 'next/image';

const PetCard = (props:any) => {
  return (
    <div className="Pet">
                    <Image className="Image" src="/img/pet1.svg" width={200} height={250} alt="Pet Image" />
                    <div>

                    <p className='Name'>
                        Imane
                    </p>
                    <div className='Infos'>
                        <div className="Row">
                        <p className="Info">Genre : <span>Male</span></p>
                        <p className="Info">Age : <span>2 Months</span></p><br/>
                        </div>
                        <p className="Info">City : <span className='C3'>Rabat</span></p>
                    </div>
                    <div className="Actions">
                        <FavoriteBorderIcon/>
                        <RemoveRedEyeIcon/>
                    </div>
                    </div>
    </div>
  )
}

export default PetCard