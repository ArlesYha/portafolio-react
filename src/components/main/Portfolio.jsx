import React from 'react'
import { HeaderSection } from './../utilities/HeaderSection'
import portafolio from '../../images/portafolio.png'
import meeting_manager from '../../images/meeting_manager.png'

export const Portfolio = () => {
    
    return(
        <div className='portfolio' id="Portafolio">
            <div className="portfolio__Head">
                <HeaderSection>Portafolio</HeaderSection>
            </div>
            <div className="portfolio__Content">
                <div className="portfolio__Items">
                    <div className='portfolio__Item'>
                        <div className="portfolio__background">
                            <h4 className='portfolio__title'>Proyecto: Portafolio de presentación</h4>
                            <hr />
                            <p className='portfolio__description'>En este proyecto como presentación he implementado todos mis conocimientos en CSS, JS, HTML y React.</p>
                        </div>
                        <img className='presentation__image' src={portafolio} alt="portafolio" />
                    </div>
                    <div className='portfolio__Item'>
                        <div className="portfolio__background">
                            <h4 className='portfolio__title'>Proyecto: Meeting Manager</h4>
                            <hr />
                            <p className='portfolio__description'>Aplicación creada para mejorar y optimizar la organización de reuniones, orientado a la rama estudiantil.</p>
                        </div>
                        <img className='presentation__image' src={meeting_manager} alt="meeting_manager" />
                    </div>
                </div>
            </div>
        </div>
    )
}