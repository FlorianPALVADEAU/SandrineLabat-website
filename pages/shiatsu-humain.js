// Images and stylesheets
import Head from 'next/head';
import style from'@/styles/Shiatsuhumain.module.scss'
import home from'@/styles/Home.module.scss'
import photo_massage from '../assets/images_new/photo_massage.jpg'
import illustration_vegetables_photo from '../assets/images_new/illustration_vegetables_photo.jpg'
import illustration_stretching_photo from '../assets/images_new/illustration_stretching_photo.jpg'
import illustration_kid_photo from '../assets/images_new/illustration_kid_photo.jpg'
import illustration_neck_pain_photo from '../assets/images_new/illustration_neck_pain_photo.jpg'
import { NextSeo } from 'next-seo';

// Components
import Title from '../components/title'
import ImageText from '../components/imageText'
import ImageTextCard from '../components/imageTextCard'
import TextFocus from '../components/textFocus'
import Disclaimer from '../components/disclaimer'


export default function Shiatsuhumain() {
    return (
        <>
            <NextSeo
                title="Le Shiatsu humain - Sandrine LABAT ?"
                description="Découvrez le Shiatsu humain, une pratique basée sur les théories de la médecine traditionnelle chinoise pour apporter un équilibre énergétique global du corps et de l'esprit. Harmonisez la circulation de l'énergie et améliorez votre état général pour retrouver un état de bien-être et de relaxation."
                openGraph={{
                title: "Le Shiatsu humain - Sandrine Labat",
                description: "Découvrez le Shiatsu humain, une pratique basée sur les théories de la médecine traditionnelle chinoise pour apporter un équilibre énergétique global du corps et de l'esprit. Harmonisez la circulation de l'énergie et améliorez votre état général pour retrouver un état de bien-être et de relaxation.",
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
                <meta name="keywords" content="Shiatsu humain, médecine traditionnelle chinoise, équilibre énergétique, bien-être, relaxation, thérapie manuelle, méridiens, points d'acupuncture, circulation de l'énergie, état général, lâcher prise, tensions, séance de Shiatsu, protocole précis, 12 méridiens principaux, pressions des pouces, état d'esprit paisible, praticien de Shiatsu, corps et esprit, forme physique et mentale, défenses naturelles de l'organisme, prévention, confiance entre praticien et patient, énergétique du corps et de l'esprit, Shiatsu de saison, séances rapprochées, rééquilibrer l'énergie, séances de détente, médecine alternative, techniques de relaxation, praticien expérimenté, bienfaits du Shiatsu, soulagement du stress, harmonie du corps, médecine holistique, réduction de l'anxiété, amélioration du sommeil, énergie vitale, bien-être émotionnel, libération des blocages, santé globale, détente musculaire, élimination des toxines, équilibre émotionnel, gestion du poids, soulagement des maux de dos, amélioration de la digestion, stimulation du système immunitaire, relaxation profonde, harmonisation énergétique, revitalisation du corps, réduction de la fatigue, épanouissement personnel"/>
            </Head>
        <div className={home.shiatsuPresentation}>
            <Title
            coloredWord={'Le Shiatsu humain,'}
            firstTitle={"c'est quoi ?"}
            />
            <ImageText
            image={photo_massage}
            text={[
                "La pratique du shiatsu est fondée sur les théories de la médecine traditionnelle chinoise. Par pression des pouces sur les méridiens et points d'acupuncture, le Shiatsu permet d'apporter un équilibre énergétique global du corps et de l'esprit. Il harmonise la circulation de l'énergie et améliore l'état général pour retrouver un état de bien-être et de relaxation.",
                "Le shiatsu traditionnel que je vous propose, s'applique selon un protocole précis et systématiquement sur les 12 méridiens principaux. Les pressions se feront soit sur la longueur totale soit sur des portions ainsi que sur les points d'acupuncture.",
                "L'efficacité des soins découle en partie du respect de ce schéma de pratique suffisamment élaboré pour qu'au fil des séances l'équilibre se restaure.",
                "L'attitude du praticien est également capitale, la qualité du soin dépend en grande partie de sa posture physique ainsi que de l'entretien d'un état d'esprit paisible et présent."
            ]}
            reverse={true}
            />
            <div className={home.bottomSentence}>
                <span className={home.span}></span>
            </div>
        </div>
        <div className={home.infoShiatsu}>
            <Title
            coloredWord={'Fréquences'}
            firstTitle={"et durée"}
            />
            <TextFocus
            text={["Il devrait avant tout être pratiqué en prévention afin de stimuler les défenses naturelles de l'organisme et maintenir ainsi l'équilibre énergétique pour une forme physique et mentale toute l'année. Il est conseillé de faire 3 séances rapprochées (à 7 jours d'intervalles) pour commencer ainsi le corps prends pleinement connaissance du protocole. Dès lors une confiance s'installe entre le praticien et le patient, le corps demande à l'esprit de lâcher prise pour libérer les tensions. Par la suite, le shiatsu de saison peut-être proposé, entre 4 à 5 shiatsu par an pour rééquilibré l'énergétique du corps et de l'esprit. Si le patient ressent le besoin de shiatsu intermédiaires alors il sera le bienvenu !"]}
            />
            <div className={style.bottomSentence}>
                <p className={style.sentence}>Une séance dure environ 1h15 et 1h45 (pour la 1ère séance)</p>
                <span className={style.span}></span>
            </div>
        </div>

        <div className={style.bienfaits}>
            <Title
            firstTitle={"Pour Information..."}
            mainWord={"Bienfaits"}
            />
            <div className={style.cardContainer}>
            <ImageTextCard
                image={illustration_vegetables_photo}
                text={"Se réalise au sol, sur un futon"}
            />
            <ImageTextCard
                image={illustration_stretching_photo}
                text={"Peut-être prodigué à tout type de personnes"}
            />
            <ImageTextCard
                image={illustration_kid_photo}
                text={"Demande un travail au corps qui refroidit le patient (venir couvert)"}
            />
            <ImageTextCard
                image={illustration_neck_pain_photo}
                text={"Se pratique au travers des vêtements"}
            />
            </div>
        </div>

      <Disclaimer />
    </>
  );
}