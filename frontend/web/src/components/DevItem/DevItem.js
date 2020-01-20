import React, {useState,useEffect} from 'react'
import './devItem.css' 

function DevItem({dev}){

    return(
        <li className="dev-item">
            <header>
            <img src={dev.avatar_url} alt={dev.name}></img>
            <div className='user-info'>
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>

            </div>
            </header>
            <p>
            {dev.bio}
            </p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil do Github</a>
        </li>
    )
}

export default DevItem
