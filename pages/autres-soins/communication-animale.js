// Images and stylesheets
import Head from 'next/head';
import home from'@/styles/Home.module.scss'
import style from'@/styles/CommunicationAnimale.module.scss'
import React from 'react';
import photo_horse from '../../assets/images/photo_horse.webp'
import photo_horses from '../../assets/images/photo_horses.webp'
import photo_horses2 from '../../assets/images/photo_horses2.webp'
import photo_horse2 from '../../assets/images/photo_horse2.webp'
import photo_horse3 from '../../assets/images/photo_horse3.webp'
import photo_horse5 from '../../assets/images/photo_horse5.webp'
import photo_horse6 from '../../assets/images/photo_horse6.jpg'
import photo_horse7 from '../../assets/images/photo_horse7.jpg'
import photo_horse8 from '../../assets/images/photo_header_mobile2.webp'

// Components
import Title from '../../components/title'
import ImageText from '../../components/imageText'
import ImageTextCard from '../../components/imageTextCard'
import TextFocus from '../../components/textFocus'
import Disclaimer from '../../components/disclaimer'
import Link from 'next/link'


export default function CommunicationAnimale () {
    const button = React.useRef(null)
    const lastPart = React.useRef(null)
    function displayAll() {
        button.current.style = 'display: none'
        lastPart.current.style = 'display: block'
    }

    return (
        <>
            <Head>
                <title>Communication Animale - Sandrine Labat</title>
                <meta name="description" content="Découvrez les bienfaits du shiatsu pour chevaux, ânes et poneys, une méthode de soins énergétiques douce et naturelle qui améliore la santé et le bien-être des animaux. Apprenez-en plus sur les conditions idéales pour les séances, les réactions possibles des chevaux et la fréquence recommandée." />
                <meta name="keywords" content="shiatsu pour chevaux, shiatsu pour ânes, shiatsu pour poneys, soins énergétiques pour animaux, bien-être animal, santé animale, médecine alternative pour animaux, médecine douce pour animaux, équilibre énergétique des animaux, circulation sanguine chez les chevaux, drainage lymphatique chez les chevaux, élimination des toxines chez les chevaux, système immunitaire des chevaux, système hormonal des chevaux, système digestif des chevaux, système respiratoire des chevaux, système nerveux des chevaux, souplesse articulaire des chevaux, tonicité musculaire des chevaux, harmonisation énergétique chez les chevaux, maintien en condition des chevaux, détente physique des chevaux, détente mentale des chevaux, réactions des chevaux au shiatsu, fréquence des séances de shiatsu pour chevaux, durée des séances de shiatsu pour chevaux, prévention des problèmes chez les chevaux, stimulation des défenses naturelles des chevaux, équilibre énergétique des chevaux" />
            </Head>
            <div className={home.infoShiatsu}>
                <Title
                coloredWord={'La communication'}
                firstTitle={"animale"}
                mainWord={'Comment être le traducteur ?'}
                />
                <TextFocus 
                    text={["Depuis quelques années maintenant on entend parler de la communication inter-espèces. Les différents reportages et expériences, qui sont aux yeux de l'humain une validation, nous apportent la preuve qu'elle est bien réelle. Il existe un lien entre les consciences des êtres vivant, une interconnexion et un échange d'information comme par exemple le reportage sur des arbres LIENS .... et les différentes espèces animales. Il n'y a pas de notion de temps ni d'espace. Des études scientifiques et sur le comportement ont prouvé que les animaux ont une conscience, qu'ils pensent et ressentent les émotions comme nous, mais aussi ressentent aussi celles de leurs congénères, des humains qui les entourent et de leurs gardiens. Le monde des animaux est un monde assez silencieux, la parole comme on l'entend en tant qu'humain n'a pas de signification pour eux, ils communiquent leurs pensées, leurs émotions et sensations mais de façon non verbale. Ils perçoivent en revanche les intonations dans la voix, les regards et le faciès est très bien pris en compte par l'animal, certaines espèces comprennent et connaissent un nombre de mots. Leur moyen de communiquer varie en fonction de leur espèce. Leur regarde est tellement expressif, les mouvements du corps à esquiver ou éviter le contact, les mouvements plus efficaces pour nous pousser ou nous faire comprendre que nous allons trop loin dans leur limite... Aujourd'hui les limites à ne pas dépasser sont considérés par certains comme un non-respect et pour d'autres un vice de l'animal ...  Pour moi c'est à l'humain de revoir son interprétation, ses croyances et ses habitudes envers les animaux, se remettre en question pour lui. La communication peut vous aidez à créer ou retrouver le lien, la relation, à mieux le comprendre, à l'aider à guérir de ses blessures passées ou présentes pour évoluer au mieux dans son futur et sa relation avec vous. La communication, je dirai même la connexion avec l'animal car on commence par se connecter à l'animal avec son accord et celui de son gardien. Cette connexion nous permet de ressentir dans un premier temps, puis on rentre en communication avec lui. En communication je travaille à 99% du temps à distance sur une photo. J'ai commencé par la communication connecter (COCO), on utilise des baguettes de sourcier ou pendule pour valider les réponses ou demandes de l'animal. Et par télépathie, nos sens se mettent en éveillent et nous permettent d'être dans un espace-temps avec l'animal, dès lors la communication s'établie sous forme d'échange d'image, de ressenti, ..."]}
                />
            </div>

            <div className={style.list}>
                <Title 
                coloredWord={'Idéalement,'}
                firstTitle={"elle a pour but..."} 
                />
                <ul className={style.content}>
                    <li>{`De vérifier l'état physique et psychologique de l'animal.`}</li>
                    <li>{`De mieux comprendre les émotions du moment, car ils vivent dans l'instant présent.`}</li>
                    <li>{`D'aider son gardien à prendre en considération les traumas du passé et évoluer en les prenant en compte.`}</li>
                    <li>{`Améliorer la relationnel, le respect gardien - animal.`}</li>
                    <li>{`Essayer de trouver des compromis pour les conflits entre animaux que ça soit de la même espèce, soit entre plusieurs espèces ... mais pas simple du tout !`}</li>
                </ul>
            </div>


            <Disclaimer/>
        </>
    )
}