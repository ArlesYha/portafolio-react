import React from 'react'
import '../../assets/styles/button.css'

export const Button = ({children, type, handleClick}) => {
    return <button type={type} className='button-Page' data-href="#Contacto" onClick={handleClick}>{children}</button>
}