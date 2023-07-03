import React from 'react'
import style from'@/styles/mentionsLegales.module.scss'

function mentionsLegales() {
  return (
    <>
    <div className={style.content}>
        <p>Ce site est édité par : Florian PALVADEAU & Sandrine LABAT</p>
        <p>Nom des éditeurs : Florian PALVADEAU & Sandrine Labat</p>
        <p>{`Nom de l'éditeur : Sandrine Labat`}</p>
        <p>Adresse : 21 rue des coteaux de châtrons, 78760, Saint-Germain-De-La-Grange</p>
        <p>Adresse e-mail : florian.plvd@gmail.com & sandrinelabat@gmail.com</p>
        <p>Responsable de la publication : Sandrine Labat</p>
    </div>
    <ol className={style.content}>
        <li>
            <h4>Hébergement :</h4>
            <p>Ce site est hébergé par Vercel.</p>
            <p>Adresse : Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.</p>
        </li>
        <li>
            <h4>Propriété intellectuelle :</h4>
            <p>{`Tous les éléments présents sur ce site (textes, images, graphiques, logos, vidéos, musiques, icônes, etc.) sont la propriété exclusive de Sandrine Labat, sauf indication contraire. Ils sont protégés par les lois nationales et internationales sur le droit d'auteur et la propriété intellectuelle. Toute reproduction, représentation, modification, distribution ou exploitation de tout ou partie de ces éléments sans l'autorisation préalable écrite de Sandrine Labat est strictement interdite.`}</p>
        </li>
        <li>
            <h4>Protection des données personnelles :</h4>
            <p>{`Sandrine Labat s'engage à respecter la confidentialité des informations personnelles collectées sur ce site. Les données personnelles sont traitées conformément à notre politique de confidentialité. Pour en savoir plus sur la collecte, l'utilisation et la protection de vos données personnelles, veuillez consulter notre politique de confidentialité.`}</p>
        </li>
        <li>
            <h4>Liens vers des sites tiers :</h4>
            <p>{`Ce site web peut contenir des liens vers des sites web tiers. Nous ne sommes pas responsables du contenu ou des pratiques de confidentialité de ces sites. L'utilisation de ces sites est soumise aux conditions d'utilisation et politiques de confidentialité propres à chaque site.`}</p>
        </li>
        <li>
            <h4>Limitation de responsabilité :</h4>
            <p>{`Sandrine Labat s'efforce de fournir des informations exactes et à jour sur ce site. Cependant, nous ne pouvons garantir l'exactitude, l'exhaustivité ou la pertinence des informations fournies. En utilisant ce site, vous reconnaissez que vous assumez pleinement les risques liés à son utilisation. Sandrine Labat décline toute responsabilité quant aux éventuels dommages ou préjudices directs ou indirects résultant de l'utilisation de ce site.`}</p>
        </li>
        <li>
            <h4>Modification des mentions légales :</h4>
            <p>{`Sandrine Labat se réserve le droit de modifier les présentes mentions légales à tout moment. Les modifications prendront effet dès leur publication sur ce site. Il est recommandé de consulter régulièrement cette page pour rester informé des éventuelles mises à jour.`}</p>
        </li>
    </ol>

    </>
  )
}

export default mentionsLegales