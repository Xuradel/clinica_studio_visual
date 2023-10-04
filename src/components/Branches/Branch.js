import React from 'react'
import { FaSquarePhone } from 'react-icons/fa6'

const Branch = ({location, description, number, number2}) => {
  return (
    <div className='branch'>
        <div className='branch-location'>
            {location}
        </div>
        <div className='branch-description'>
            {description}
        </div>
        <div className='branch-number'>
            <FaSquarePhone size={18}/> {number}/{number2 ? number2 : null}
        </div>
    </div>
  )
}

export default Branch