import React from 'react'

const Label = ({htmlFor, children}) => {
  return (
    <label
        htmlFor={htmlFor}
        className='block text-primary font-normal'
    >
        {children}
    </label>
  )
}

export default Label