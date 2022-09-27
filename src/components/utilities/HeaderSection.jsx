import React from 'react'
import '../../assets/styles/HeaderSection.css';

export const HeaderSection = ({children}) => {
    return (
        <div className='header__Section'>
            <h2>{children}</h2>
        </div>
    )
}