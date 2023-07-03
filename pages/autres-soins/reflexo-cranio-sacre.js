// Images and stylesheets
import Head from 'next/head';
import home from'@/styles/Home.module.scss'
import style from'@/styles/reflexoCranioSacre.module.scss'
import React from 'react';
import { NextSeo } from 'next-seo';

// Components
import Title from '../../components/title'
import ImageText from '../../components/imageText'
import ImageTextCard from '../../components/imageTextCard'
import TextFocus from '../../components/textFocus'
import Disclaimer from '../../components/disclaimer'
import Link from 'next/link'


export default function ReflexoCranioSacre () {
    const button = React.useRef(null)
    const lastPart = React.useRef(null)
    function displayAll() {
        button.current.style = 'display: none'
        lastPart.current.style = 'display: block'
    }

    return (
        <>
            <NextSeo
                title="Réflexologie Crânio-sacrée - Sandrine Labat"
                description="Découvrez les bienfaits du shiatsu pour chevaux, ânes et poneys, une méthode de soins énergétiques douce et naturelle qui améliore la santé et le bien-être des animaux. Apprenez-en plus sur les conditions idéales pour les séances, les réactions possibles des chevaux et la fréquence recommandée."
                openGraph={{
                title: "Réflexologie Crânio-sacrée - Sandrine Labat",
                description: "Découvrez les bienfaits du shiatsu pour chevaux, ânes et poneys, une méthode de soins énergétiques douce et naturelle qui améliore la santé et le bien-être des animaux. Apprenez-en plus sur les conditions idéales pour les séances, les réactions possibles des chevaux et la fréquence recommandée.",
                images: [
                    {
                    url: 'https://zupimages.net/viewer.php?id=23/27/qztj.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'Photo illustrative du site de Sandrine LABAT'
                    }
                ],
                site_name: 'Sandrine LABAT Shiatsu'
                }}
            />
            <Head>
                <meta name="keywords" content="shiatsu pour chevaux, shiatsu pour ânes, shiatsu pour poneys, soins énergétiques pour animaux, bien-être animal, santé animale, médecine alternative pour animaux, médecine douce pour animaux, équilibre énergétique des animaux, circulation sanguine chez les chevaux, drainage lymphatique chez les chevaux, élimination des toxines chez les chevaux, système immunitaire des chevaux, système hormonal des chevaux, système digestif des chevaux, système respiratoire des chevaux, système nerveux des chevaux, souplesse articulaire des chevaux, tonicité musculaire des chevaux, harmonisation énergétique chez les chevaux, maintien en condition des chevaux, détente physique des chevaux, détente mentale des chevaux, réactions des chevaux au shiatsu, fréquence des séances de shiatsu pour chevaux, durée des séances de shiatsu pour chevaux, prévention des problèmes chez les chevaux, stimulation des défenses naturelles des chevaux, équilibre énergétique des chevaux" />
            </Head>
            <div className={style.introduction}>
                <Title 
                coloredWord={'Module'}
                firstTitle={"en cours de développement..."}
                subTitle={'Merci de votre compréhension'}
                />

            </div>

            {/* <Disclaimer/> */}
        </>
    )
}