import React from 'react'
import style from'@/styles/sitemap.module.scss'
import Link from 'next/link'

function sitemap() {
  return (
    <div className={style.content}>
        <Link href='/'>Accueil</Link>
        <Link href='/shiatsu-humain'>Shiatsu Humain</Link>
        <Link href='/shiatsu-animaux/chevaux-anes-poneys'>Chevaux, Ânes et Poneys</Link>
        <Link href='/shiatsu-animaux/chiens-chats'>Chiens et Chats</Link>
        <Link href='/shiatsu-animaux/idealement'>Idéalement</Link>
        <Link href='/autres-soins/soins-4D'>Soins 4D</Link>
        <Link href='/autres-soins/reflexo-cranio-sacre'>Reflexo Crânio Sacré</Link>
        <Link href='/autres-soins/communication-animale'>Communication Animale</Link>
        <Link href='/a-propos-de-moi'>Qui Suis-je ?</Link>
        <Link href='/contact'>Me Contacter</Link>
        <Link href='/copyrights'>{`Droits d'auteurs`}</Link>
        <Link href='/website-policy'>{`Politiques d'utilisation`}</Link>
        <Link href='/mentions-legales'>Mentions Légales</Link>
        <Link href='/sitemap'>Plan du site</Link>
    </div>
  )
}

export default sitemap