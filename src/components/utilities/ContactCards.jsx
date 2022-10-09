import React from 'react'
import '../../assets/styles/ContactCard.css'

export const ContactCard = ({icon, title, text, iconMedia}) => {
    return(
        <div className='contact-Card__Content'>
            <div className='contact__Icon'>
                <i className={icon}></i>
            </div>
            <div className='contact__Title-Card'>
                <h4>{title}</h4>
            </div>
            <div className='contact__Text-Card'>
                {text && <p>{text}</p>}
                {iconMedia && <a href='https://wa.me/51960232657' target={"_blank"}><i className={iconMedia}></i></a>}
            </div>
        </div>
    )
}