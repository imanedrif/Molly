import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const PrimaryButton = (props:any) => {
  return (
        <button className='Primary Button'>
            {props.text}
        </button>
  )
}
export const PrimaryButtonIcon = (props:any) => {
  return (
        <button className='PrimaryIcon Button'>
            {props.text}
            {props.icon}
        </button>
  )
}
export const OutlineIconButton = (props:any) => {
  return (
        <button className='OutlineIcon Button' >
            {props.text}
            {props.icon}
        </button>
  )
}
export const SecondaryButton = (props:any) => {
  return (
        <button className='Secondary Button'>
            {props.text}
        </button>
  )
}

