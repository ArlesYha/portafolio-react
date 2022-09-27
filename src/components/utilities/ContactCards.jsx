import React from 'react'
import '../../assets/styles/ContactCard.css'

export const ContactCard = ({icon, title, text}) => {
    return(
        <div className='contact-Card__Content'>
            <div className='contact__Icon'>
                <i className={icon}></i>
            </div>
            <div className='contact__Title-Card'>
                <h4>{title}</h4>
            </div>
            <div className='contact__Text-Card'>
                <p>{text}</p>
            </div>
        </div>
    )
}