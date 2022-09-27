import React, { useState } from 'react'
import shortid from 'shortid'
import '../../assets/styles/LoadBar.css'

const LoadContainer = ({children}) => {
    return <div className='load__Bar'>{children}</div>
}

export default function LoadBar ({index}) {
    const porcentage = [
        {
            html : '90',
            css : '90',
            js : '90',
            React: '60'
        },
        {
            figma: '60'
        },
        {
            'php (codeigniter 4)' : '60',
            'Lenguaje SQL' : '50',
            'Erwin' : '60'
        }
    ]
    
    const info = porcentage[index];
    let componentBar = []
    for (const key in info) {
        componentBar.push(
            <LoadContainer key={shortid.generate()}>
                <i className='load__text'>{key}</i>
                <div className={`bar bar--${info[key]}`}></div>
            </LoadContainer>
        )
    }

    return componentBar
}