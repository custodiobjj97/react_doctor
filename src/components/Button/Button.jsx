import React from 'react'
import "./button.css"

const Button = ({text,icon,type,style}) => {
  return (
    <button style={style}  className='btn' type={type}>{icon} {text}</button>
  )
}

export default Button