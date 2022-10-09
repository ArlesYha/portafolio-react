import React from 'react'
import { Button } from './../utilities/Button'
import { ContactCard } from './../utilities/ContactCards'
import { HeaderSection } from './../utilities/HeaderSection'

export const Contact = () => {
    return(
        <div className='contact' id="Contacto">
            <div className="contact__Head">
                <HeaderSection>Contacto</HeaderSection>
            </div>
            <div className='contact__Content'>
                <div className='contact__Items'>
                    <ContactCard icon={'fas fa-home'} title='Dirección' text='Perú, Ica - Chincha'></ContactCard>
                    <ContactCard icon={'fas fa-phone'}  title='Teléfono' text='+51960232657'></ContactCard>
                    <ContactCard icon={'fas fa-envelope'}  title='Email' text='arlesyhazelada98@gmail.com'></ContactCard>
                    <ContactCard icon={'fas fa-hashtag'}  title='Redes Sociales' iconMedia='fa-brands fa-whatsapp'></ContactCard>
                </div>
                <div className='contact__Items contact__Items--Form'>
                    <form className='contact__Form' method="POST" action="https://formsubmit.co/872530d3437ed1a2124907e620ae2545" encType="multipart/form-data">
                        <div className='content__Name'>
                            <input className='input__Name' id='name'  name='name' type="text" placeholder='Name' required/>
                        </div>
                        <div className='content__Email'>
                            <input className='input__Email' id='email' name='email' type="email" placeholder='Email' required/>
                        </div>
                        <div className='content__Text'>
                            <textarea className='input__Text' name="message" id="message" cols="30" rows="10" required></textarea>
                        </div>
                        <Button type='submit'>Enviar</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}