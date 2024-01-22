import React from 'react'

const Button = ({cta}) => {
  return (
    <button className='rounded-full text-xs border-[1px] border-lightgrey px-4 py-2 bg-primary text-white'>{cta}</button>
  )
}

export default Button
