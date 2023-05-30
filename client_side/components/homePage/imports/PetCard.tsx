import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Image from 'next/image';
// import snth from '../../../../server-side/storage/app/public/'
const PetCard = (props: any) => {
  return (
    <div className="Pet">
      <img  src={`${process.env.NEXT_PUBLIC_APP_URL}/images/TYVN1ZbitSZXfiBPg3jn.jpg`} width={200} height={250} alt="Pet Image" />
      <div>
        <p className='Name'>
          {props.name}
        </p>
        <div className='Infos'>
          <div className="Row">
            <p className="Info">Genre : <span>{props.gender}</span></p>
            <p className="Info">Age : <span>{props.Age}</span></p><br />
          </div>
          <p className="Info">City : <span className='C3'>{props.city}</span></p>
        </div>
        <div className="Actions">
          <FavoriteBorderIcon />
          <RemoveRedEyeIcon />
        </div>
      </div>
    </div>
  )
}

export default PetCard