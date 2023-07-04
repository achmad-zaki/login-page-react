import React from 'react'

const Index = ({text, className, type}) => {
  return (
    <button
        type={type}
        className={className}
    >
        {text}
    </button>
  )
}

export default Index