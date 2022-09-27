import React from 'react'
import { HeaderSection } from './../utilities//HeaderSection'
import avatarUser from '../../images/avatar-user.jpg'
import { ToggleMenu } from './../utilities//ToggleMenu'
import shortid from 'shortid'
import { Button } from './../utilities//Button'

import PDF from '../../documents/CV_ ARLESY.pdf'

export const About = _ => {
    const titles = ['Desarrollo Web Front End', 'Diseño Web', 'Desarrollo Web Back End']

    const handleDownloadPDF = () => {
        let alink = document.createElement('a');
        alink.target = '_blank';
        alink.href = PDF;
        alink.click();
    }

    return (
        <div className='about' id='Acerca'>
            <div className="about__Head">
                <HeaderSection>Acerca de</HeaderSection>
            </div>
            <div className="about__Content">
                <div className="about__Me">
                    <h3>Arles Yha</h3>
                    <h5>Programador</h5>
                    <img className='about__Image' src={avatarUser} alt="Avatar de Usuario" />
                    <p>Hola mi nombre es Arles y la programación es mi pasión. <br></br><br></br>
                    Desde pequeño me apasiona la tecnología, como funciona cada componente en nuestros equipos, hasta la lógica del software que hace realidad tantos sueños.<br></br><br></br>
                    Cuando tuve la oportunidad de encaminarme en este grandioso mundo de la programación no lo dudé ni por un segundo.<br></br><br></br>
                    Poco a poco fui ganando experiencia y desarrollando proyectos a medida.</p>
                    <Button type='button' handleClick={handleDownloadPDF}>Descargar CV</Button>
                </div>
                <div className="about__Skills">
                    <h3>Mis Habilidades</h3>
                    <div className="about__Skill__Content">
                        {titles.map((title, index) => {
                            return <ToggleMenu
                                        index={index}
                                        key={shortid.generate()} 
                                        title={title}
                                        id={`toggle-${index}`}
                                    ></ToggleMenu>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}