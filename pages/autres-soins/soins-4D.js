// Images and stylesheets
import Head from 'next/head';
import home from'@/styles/Home.module.scss'
import React from 'react';
import idealement from'@/styles/Idealement.module.scss'
import style from'@/styles/Soins4D.module.scss'
import photo_rocks from '../../assets/images/johnson-wang-qG-hPxoAnRE-unsplash.jpg'
import photo_horse from '../../assets/images/photo_horse3.webp'

// Components
import Title from '../../components/title'
import ImageText from '../../components/imageText'
import ImageTextCard from '../../components/imageTextCard'
import Disclaimer from '../../components/disclaimer'
import Link from 'next/link'


export default function Soins4D () {
    const button = React.useRef(null)
    const lastPart = React.useRef(null)
    function displayAll() {
        button.current.style = 'display: none'
        lastPart.current.style = 'display: block'
    }

    return (
        <>
            <Head>
                <title>Soins 4D - Sandrine Labat</title>
                <meta name="description" content="Découvrez les bienfaits du shiatsu pour chevaux, ânes et poneys, une méthode de soins énergétiques douce et naturelle qui améliore la santé et le bien-être des animaux. Apprenez-en plus sur les conditions idéales pour les séances, les réactions possibles des chevaux et la fréquence recommandée." />
                <meta name="keywords" content="shiatsu pour chevaux, shiatsu pour ânes, shiatsu pour poneys, soins énergétiques pour animaux, bien-être animal, santé animale, médecine alternative pour animaux, médecine douce pour animaux, équilibre énergétique des animaux, circulation sanguine chez les chevaux, drainage lymphatique chez les chevaux, élimination des toxines chez les chevaux, système immunitaire des chevaux, système hormonal des chevaux, système digestif des chevaux, système respiratoire des chevaux, système nerveux des chevaux, souplesse articulaire des chevaux, tonicité musculaire des chevaux, harmonisation énergétique chez les chevaux, maintien en condition des chevaux, détente physique des chevaux, détente mentale des chevaux, réactions des chevaux au shiatsu, fréquence des séances de shiatsu pour chevaux, durée des séances de shiatsu pour chevaux, prévention des problèmes chez les chevaux, stimulation des défenses naturelles des chevaux, équilibre énergétique des chevaux" />
            </Head>
            <div className={`${'presentation'} ${style.presentation4D}`}>
                <Title 
                coloredWord={'Mise'}
                firstTitle={"en contexte"} 
                />
                <ImageText
                image={photo_rocks}
                text={
                    [
                       "La méthode 4D a été créée par M. Heinz Büchli (suisse) en 1990. Cette méthode est en constante évolution tout comme les énergies qui sont en nous et nous entourent.",
                       "Cette méthode se pratique à distance sans toucher le patient basé sur la mesure chiffrée à l'aide d'un pendule, d'un cadran et est très protocolaire.",
                       "Elle permet d'évaluer de nombreux éléments, le travail se fait sur un plan intérieur de l'être dans les 4 dimensions : physique, psychique, énergétique et spirituel.",
                       "Ce soin énergétique s'applique aussi bien aux humains qu'aux animaux."
                    ]
                }
                />
            </div>

            <div className={idealement.before}>
                <Title 
                coloredWord={'Déroulement'}
                firstTitle={"d'une séance"} 
                />
                <ul className={idealement.content}>
                    <li>{`La méthode 4D prend en considération l'ensemble de l'être et en supprime les causes comme les déséquilibres, les traumatismes, les blocages, ...`}</li>
                    <li>{`Moyennant des mesures précises grâce au pendule, il est possible d'obtenir une visualisation de la vitalité de l'être, des tissus, des organes, des différents systèmes organiques, structure osseuse, émotionnel, ... et d'autres éléments sur d'autres plans, énergétiques et spirituels.`}</li>
                    <li>{`Le traitement se fait à distance, on peut aussi le faire en présence du client mais comme il y a aucun contact physique, le compte rendu se fera par téléphone.`}</li>
                    <li>{`Les personnes ayant bénéficiés d'un soin ont un ressentit assez rapide et de belles améliorations s'opèrent. Les animaux ayant bénéficiés d'un soin ne peuvent communiquer mais leur propriétaire le voit, les photos avant après peuvent aider.`}</li>
                </ul>
            </div>


            <div className={style.visuel}>
                <Title 
                coloredWord={'Résultats visuel'}
                firstTitle={"sur les animaux"} 
                />
                <div className={style.photoExamples}>
                    <div className={style.example}>
                        <ImageTextCard 
                            image={photo_horse}
                            text={"suite à un accident au niveau du pied"}
                        />
                        <p className={style.p}>→</p>
                        <ImageTextCard 
                            image={photo_horse}
                            text={"quelques jours après le soin 4D"}
                        />
                    </div>
                    <div className={style.example}>
                        <ImageTextCard 
                            image={photo_horse}
                            text={"suite à un syndrome métabolique équin"}
                        />
                        <p className={style.p}>→</p>
                        <ImageTextCard 
                            image={photo_horse}
                            text={"2 jours après le soin 4D"}
                        />
                    </div>
                </div>
            </div>


            <Disclaimer/>
        </>
    )
}