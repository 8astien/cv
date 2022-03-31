import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
        <div className="header__titles">
            <h1 className="header__titles--main">Bastien Cauquil</h1>
            <h2 className="header__titles--sdy"><strong>Développeur Web Front-End</strong></h2>
        </div>
        <article className="header__bio">
            <h4>Qui suis-je ?</h4>
            <p>Actuellement en formation, je suis à la recherche d'un <strong>stage</strong> pour la période du 22 Juillet au 22 Septembre 2022.</p>
        </article>
    </header>
  )
}

export default Header