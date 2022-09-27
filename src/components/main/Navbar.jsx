import React, { useEffect, useRef, useState } from 'react'
import shortid from 'shortid'

export const Navbar = ({width}) => {
    const items = ['Inicio', "Acerca", "Portafolio", "Contacto"]

    const navBar = useRef()
    const list = useRef()

    const btnRef = useRef()
    
    const toggleMenu = (el, ref = null) => {
        navBar.current.classList.toggle('nav__list--toggle')
        list.current.classList.toggle('nav__list--Show')
        if(width <= 600) {
            if(ref) {
                el.closest('button').classList.toggle('btn__Menu--Height')
        
                setTimeout(() => {
                    el.closest('button').firstElementChild.classList.toggle('fa-bars')
                    el.closest('button').firstElementChild.classList.toggle('fa-xmark')
                }, 500);
                return
            }

            el.target.closest('button').classList.toggle('btn__Menu--Height')
    
            setTimeout(() => {
                el.target.closest('button').firstElementChild.classList.toggle('fa-bars')
                el.target.closest('button').firstElementChild.classList.toggle('fa-xmark')
            }, 500);
        }

    }

    const handleSection = (el) => {
        el.preventDefault()
        const element = document.querySelector(`${el.target.getAttribute('href')}`)

        let topView = 0

        width > 480 ? topView = element.offsetTop - 64
                    : topView = element.offsetTop - window.innerHeight

        window.scroll({
            top: topView,
            behavior: 'smooth'
        })

        toggleMenu(btnRef.current, true)
    }

    return (
        <nav className='nav' ref={navBar}>
            <ul className='nav__list' ref={list}>
                {items.map(item => <li 
                                        className='nav__item' 
                                        key={shortid.generate()}>
                                        <a 
                                            className='nav__link' 
                                            href={"#"+item}
                                            onClick={(el) => handleSection(el)} 
                                        >{item}</a>
                                    </li>)}
            </ul>
            {width <= 600 && <button 
                                className='btn__Menu'
                                onClick={(el) => toggleMenu(el)} 
                                ref={btnRef} 
                                type='button' 
                            ><i className='fas fa-bars'></i></button>}
        </nav>
    )
}