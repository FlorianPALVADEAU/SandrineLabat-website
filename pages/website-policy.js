import React from 'react'
import style from'@/styles/websitePolicy.module.scss'

function websitePolicy() {
  return (
    <>
    <ol className={style.content}>
        <li>
            <h4>Collecte de données</h4>
            <p>{`Nous respectons votre vie privée et nous nous engageons à protéger les informations personnelles que vous pourriez fournir lors de l'utilisation de ce site web. Veuillez consulter notre politique de confidentialité pour en savoir plus sur les informations que nous collectons et comment nous les utilisons.`}</p>
        </li>
        <li>
            <h4>Utilisation des cookies</h4>
            <p>Ce site web utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte placés sur votre appareil lorsque vous visitez un site web. Consultez notre politique en matière de cookies pour obtenir des informations détaillées sur les cookies que nous utilisons et comment vous pouvez les gérer.</p>
        </li>
        <li>
            <h4>Liens vers des sites tiers</h4>
            <p>{`Ce site web peut contenir des liens vers des sites web tiers. Nous ne sommes pas responsables du contenu ou des pratiques de confidentialité de ces sites. L'utilisation de ces sites est soumise aux conditions d'utilisation et politiques de confidentialité propres à chaque site.`}</p>
        </li>
        <li>
            <h4>Propriété intellectuelle</h4>
            <p>Tous les contenus présents sur ce site web, tels que textes, images, graphiques, logos, vidéos, musiques, icônes, sont la propriété exclusive de Sandrine Labat, sauf indication contraire. Toute utilisation non autorisée de ces contenus est strictement interdite.</p>
        </li>
        <li>
            <h4>Modifications</h4>
            <p>Nous nous réservons le droit de modifier cette politique de site web à tout moment. Les modifications seront publiées sur cette page et entreront en vigueur immédiatement. Nous vous encourageons à consulter régulièrement cette politique pour vous tenir informé des éventuelles mises à jour.</p>
        </li>
    </ol>
    <div className={style.content}>
        <p>{`Si vous avez des questions concernant cette page de copyrights ou notre politique de site web, veuillez nous contacter à l'adresse suivante : [adresse e-mail de contact].`}</p>
        <p>Dernière mise à jour : [date de la dernière mise à jour].</p>
    </div>
    </>
  )
}

export default websitePolicy