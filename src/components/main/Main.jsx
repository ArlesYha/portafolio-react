import React from 'react'
import presentacion from '../../images/presentacion-desktop.jpg'
import { Button } from './../utilities/Button'

export const Main = ({width}) => {
    const handleSection = (el) => {
        const element = document.querySelector(el.target.attributes.getNamedItem('data-href').value)
        let topView = 0

        width > 480 ? topView = element.offsetTop - 64
                    : topView = element.offsetTop - window.innerHeight

        window.scroll({
            top: topView,
            behavior: 'smooth'
        })
    }
    return(
        <div className="header" id='Inicio'>
            <div className='presentation__container'>
                <div className='item__container'>
                    <h1 className='main__title'>Bienvenidos a mi <br /> página</h1>
                    <Button type='button' handleClick={handleSection}>Contáctame</Button>
                </div>
                <img className='presentation__image' src={presentacion} alt="Presentacion" />
            </div>
        </div>
    )
}