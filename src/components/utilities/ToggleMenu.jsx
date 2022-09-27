import React, {useState} from 'react'
import '../../assets/styles/ToggleMenu.css'
import LoadBar from './LoadBar'

export const ToggleMenu = ({title, index, id}) => {
    const [load, setLoad] = useState(false)

    const showContentToggle = () => {
        const toggle_Menu = document.getElementById(id)
        const toggle_Content = toggle_Menu.children[1]
        
        toggle_Content.classList.toggle('toggle__Content--styles')
        setLoad(!load)
    }

    return (
        <div id={id} className='toggle__Menu'>
            <div className="toggle__Button" onClick={showContentToggle}>
                <h4>{title}</h4>
                <i className='fas fa-sort-down'></i>
            </div>
            <div className='toggle__Content'>
                {
                    load && <LoadBar index={index}></LoadBar>
                }
            </div>
        </div>
    )
}