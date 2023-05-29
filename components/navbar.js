import React, { useEffect, useState } from 'react';
import style from'@/styles/navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import humanLogo from '../assets/icons/human_logo_white.png'


export default function navbar() {
  const [pos, setPos] = useState("top")
  const [h1Content, seth1Content] = useState('Vers le chemin du bien être et de l\'équilibre')
  const [h2Content, seth2Content] = useState('Grandir, se préserver et vieillir dans les meileures conditions, c\'est la voie que propose le shiatsu')
  const [burgerActive, setburgerActive] = useState(false)
  const burger = React.useRef(null)
  const nav = React.useRef(null)

  useEffect(() => {
    var lastURLElement = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
    if (lastURLElement === ''){
      seth1Content('Vers le chemin du bien être et de l\'équilibre')
      seth2Content('Grandir, se préserver et vieillir dans les meileures conditions, c\'est la voie que propose le shiatsu')
    } else if (lastURLElement === 'shiatsu-humain'){
      seth1Content('Shiatsu humain')
      seth2Content('Découvrez le shiatsu humain sous tous ses angles')
    } else if (lastURLElement === 'chevaux-anes-poneys'){
      seth1Content('Chevaux, Poneys et Ânes')
      seth2Content('Les soins que je peux apporter à ce type d\'animaux')
    } else if (lastURLElement === 'chiens-chats'){
      seth1Content('Chiens et chats')
      seth2Content('Les soins que je peux apporter à ce type d\'animaux')
    } else if (lastURLElement === 'idealement'){
      seth1Content('Idéalement')
      seth2Content('Découvrez les meilleures pratiques avant, pendant et après chaque séance !')
    } else if (lastURLElement === 'contact'){
      seth1Content('Me contacter')
      seth2Content('Contactez-moi par mail ou téléphone')
    } else if (lastURLElement === 'a-propos-de-moi'){
      seth1Content('Qui suis-je ?')
      seth2Content('Découvrez en plus à propos de moi !')
    }

    document.addEventListener("scroll", e => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 5){
         setPos("moved")
      } else {
         setPos("top")
      }
    })
  }, []);
  
  function handleBurger() {
    if (burger.current.classList.contains('cross')) {
      burger.current.classList.remove('cross')
    } else {
      burger.current.classList.add('cross')
    }
    setburgerActive(!burgerActive)
  }

  return (
    <>
    <header className={style.header}>
      <nav className={style.navBar}>
          <Image src={humanLogo} className={style.logo} alt='logo'/>
          <div className='burger' id={style.burger} ref={burger} onClick={()=>{handleBurger()}}>
            <span></span>
          </div>
          <div className={`${style.links} ${burgerActive ? style.active : ""}`} ref={nav}>
              <Link href="/" className={style.link}>Accueil</Link>
              <Link href="/shiatsu-humain" className={style.link}>Shiatsu Humain</Link>
              <div className={style.dropdown}>
                <p href="#" className={style.link}>Soins Animaux</p>
                <div className={style.dropdownActive}>
                  <Link href="/shiatsu-animaux/chevaux-anes-poneys" className={style.link}>Chevaux, Poneys et Ânes</Link>
                  <Link href="/shiatsu-animaux/chiens-chats" className={style.link}>Chiens et chats</Link>
                  <Link href="/shiatsu-animaux/idealement" className={style.link}>Idéalement</Link>
                </div>
              </div>
              <div className={style.dropdown}>
                <p href="#" className={style.link}>Autres Soins</p>
                <div className={style.dropdownActive}>
                  <Link href="#" className={style.link}>Soin 4D</Link>
                  <Link href="#" className={style.link}>Réflexo Crânio Sacré</Link>
                  <Link href="#" className={style.link}>Communication Animale</Link>
                </div>
              </div>
              <Link href="" className={style.link}>Qui suis-je ?</Link>
              <Link href="#" className={style.link}>Me Contacter</Link>
          </div>
      </nav>
      <div className={style.bottomContent}>
        <div className={style.content}>
          <h1 className={style.h1}>{h1Content}</h1>
          <h2 className={style.h2}>{h2Content}</h2>
        </div>

        <Link href='#' className={style.discoverMore}>En découvrir plus</Link>
        <p className={style.scrollIcon}>↓</p>
      </div>
    </header>
    </>
  )
}