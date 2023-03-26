import style from'@/styles/navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import fullLogo from '../assets/icons/full_logo_white.png'
import humanLogo from '../assets/icons/human_logo_white.png'
// import animalLogo from '../assets/icons/animal_logo_white.png'
import headerPhoto from '../assets/images/photo_header.png'
import { useState } from 'react'


// const lastURLElement = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
export default function navbar() {

  const [h1Content, seth1Content] = useState('Vers le chemin du bien être et de l\'équilibre')
  const [h2Content, seth2Content] = useState('Grandir, se préserver et vieillir dans les meileures conditions, c\'est la voie que propose le shiatsu')

  return (
    <>
    <header className={style.header}>
      <nav className={style.navBar}>
          <Image src={humanLogo} className={style.logo} alt='logo'/>
          <div className={style.links}>
              <Link href="#" className={style.link}>Accueil</Link>
              <Link href="#" className={style.link}>Shiatsu Humain</Link>
              <Link href="#" className={style.link}>Soins Animaux</Link>
              <Link href="#" className={style.link}>Autres Soins</Link>
              <Link href="#" className={style.link}>Qui suis-je ?</Link>
              <Link href="#" className={style.link}>Me Contacter</Link>
          </div>
      </nav>
      <div className={style.bottomContent}>
        <div className={style.content}>
          <h1 className={style.h1}>{h1Content}</h1>
          <h2 className={style.h2}>{h2Content}</h2>
        </div>

        <Link href='#' className={style.discoverMore}>En découvrir plus</Link>
      </div>
    </header>
    </>
  )
}