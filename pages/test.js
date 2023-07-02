import React from 'react'
import Slider from '../components/slider.js'
import Head from 'next/head';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function test() {

  return (
    <>
        <Head>
            <title>TEST PAGE</title>
            <meta name="description" content="Revenons sur les origines du shiatsu pour mieux comprendre son fonctionnement et son utilité. Découvrez les bienfaits du shiatsu, les moments propices pour faire une séance, quelques statistiques intéressantes et les avis des clients."/>
            <meta name="keywords" content="Sandrine Labat, sandrine, labat, labat shiatsu, sandrine shiatsu, shiatsu, origines du shiatsu, fonctionnement du shiatsu, utilité du shiatsu, bienfaits du shiatsu, moments propices pour faire une séance de shiatsu, statistiques du shiatsu, avis clients, équilibre énergétique, système immunitaire, souplesse des tissus, systèmes respiratoires, systèmes nerveux, systèmes sanguins, systèmes hormonaux, soulagement de douleurs, détente, bien-être intérieur, auto-guérison, prévention, rééquilibrage, symptômes, problèmes structurels, problèmes musculaires, problèmes ligamentaires, problèmes digestifs, problèmes de peau, problèmes psychologiques."/>
        </Head>
        <Slider/>
    </>
  )
}

export default test