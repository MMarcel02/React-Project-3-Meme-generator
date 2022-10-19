import React from 'react'
import Troll from "../assets/Troll.png"

export default function Header () {
    return(
        <div className='header'>
            <img src={Troll} />
            <h1>Meme Generator</h1>
            <p>React Course - Project 3</p>
        </div>
    )
}
