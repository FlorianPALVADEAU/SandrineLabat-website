// Images and stylesheets
import Head from 'next/head';
import Image from 'next/image'
import style from'@/styles/Home.module.scss'
import shiatsuPresentationImage from '../assets/images_new/shiatsuPresentation.jpg'
import illustration_vegetables_photo from '../assets/images_new/illustration_vegetables_photo.jpg'
import illustration_stretching_photo from '../assets/images_new/illustration_stretching_photo.jpg'
import illustration_kid_photo from '../assets/images_new/illustration_kid_photo.jpg'
import illustration_neck_pain_photo from '../assets/images_new/illustration_neck_pain_photo.jpg'
import icon_handshake from '../assets/icons/icon_handshake.png'
import icon_heart from '../assets/icons/icon_heart.png'
import icon_mecanism from '../assets/icons/icon_mecanism.png'
import icon_coffee from '../assets/icons/icon_coffee.png'
import { NextSeo } from 'next-seo';


// Components
import Title from '../components/title'
import ImageText from '../components/imageText'
import ImageTextCard from '../components/imageTextCard'
import TextFocus from '../components/textFocus'
import Slider from '../components/slider.js'

export default function Home() {


  return (
    <>
      <NextSeo
        title="Le Shiatsu - Sandrine Labat"
        description="Revenons sur les origines du shiatsu pour mieux comprendre son fonctionnement et son utilité. Découvrez les bienfaits du shiatsu, les moments propices pour faire une séance, quelques statistiques intéressantes et les avis des clients."
        openGraph={{
          title: "Le Shiatsu - Sandrine Labat",
          description: "Revenons sur les origines du shiatsu pour mieux comprendre son fonctionnement et son utilité. Découvrez les bienfaits du shiatsu, les moments propices pour faire une séance, quelques statistiques intéressantes et les avis des clients.",
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
        <meta name="keywords" content="Sandrine Labat, sandrine, labat, labat shiatsu, sandrine shiatsu, shiatsu, origines du shiatsu, fonctionnement du shiatsu, utilité du shiatsu, bienfaits du shiatsu, moments propices pour faire une séance de shiatsu, statistiques du shiatsu, avis clients, équilibre énergétique, système immunitaire, souplesse des tissus, systèmes respiratoires, systèmes nerveux, systèmes sanguins, systèmes hormonaux, soulagement de douleurs, détente, bien-être intérieur, auto-guérison, prévention, rééquilibrage, symptômes, problèmes structurels, problèmes musculaires, problèmes ligamentaires, problèmes digestifs, problèmes de peau, problèmes psychologiques."/>
      </Head>
      <main className={style.main}>
        <div className={style.shiatsuPresentation}>
          <Title 
            coloredWord={'Le Shiatsu,'}
            firstTitle={"c'est quoi ?"} 
            subTitle={"Revenons sur les origines du shiatsu pour mieux comprendre son fonctionnement et son utilité"}
          />
          <ImageText
            image={shiatsuPresentationImage}
            text={
              [
                'Depuis plus de <strong>5000 ans</strong>, Le shiatsu est un soin japonais basé sur la médecine traditionnelle chinoise qui permet d\'apporter un équilibre énergétique global du corps et de l\' esprit.', 
                'C\'est un soin préventif qui permet de stimuler les défenses <strong>naturelles</strong> de l\'organisme. Le Shiatsu est une méthode de bien-être naturelle, douce et <strong>sans effet secondaire</strong> dangereux pour la santé.', 
                'Au cours de la séance, le praticien propose des pressions (avecla pulpe des doigts) sur l\'ensemble des méridiens, des <strong>rotations</strong> ou <strong>étirements</strong>.',
                'Ces différentes techniques permettent d\'harmoniser le réseau énergétique de la personne et de favoriser ainsi la libre <strong>circulation de l\'énergie</strong> sur l\'ensemble du corps.'
              ]
            }
            reverse={false}
          />
          <div className={style.bottomSentence}>
            <p className={style.sentence}>Le shiatsu est un véritable moment de détente privilégié qui apporte une merveilleuse sensation de bien-être global.</p>
            <span className={style.span}></span>
          </div>
        </div>
        
        <div className={style.bienfaits}>
          <Title 
            coloredWord={'Les bienfaits '}
            firstTitle={"du shiatsu ?"}
            mainWord={"Bienfaits"}
          />
          <div className={style.cardContainer}>
            <ImageTextCard 
              image={illustration_vegetables_photo}
              text={"Renforcement du système immunitaire"}
            />
            <ImageTextCard 
              image={illustration_stretching_photo}
              text={"Amélioration de la souplesse des tissus"}
            />
            <ImageTextCard 
              image={illustration_kid_photo}
              text={"Renforcement des systèmes respiratoires, nerveux, sanguins, hormonaux"}
            />
            <ImageTextCard 
              image={illustration_neck_pain_photo}
              text={"Soulagement de douleurs diverses"}
            />
          </div>
          <TextFocus 
            text={["Le praticien, en rééquilibrant le réseau énergétique, aura pour effet de stimuler les défenses naturelles de l'organisme, faire lâcher les tensions physiques mais également mentales,  apporter détente et bien-être intérieur favorisant ainsi le processus d'auto-guérison. Le Shiatsu par son approche et son action globale peut avoir des effets bénéfiques sur de nombreux problèmes.  Ils peuvent être de types structurels, musculaires, ligamentaires, digestifs, de peaux ou psychologiques.  Ils peuvent d'ailleurs être dus au stress ou à la nervosité."]}
          />
        </div>

        <div className={style.infoShiatsu}>
          <Title 
            coloredWord={'Quand'}
            firstTitle={"faire une séance ?"}
            mainWord={"Quand ?"}
          />
          <div className={style.infoShiatsuContent}>
            <p>{`Le Shiatsu avant tout utilisé en prévention, est préconisé en entretien à chaque changement de saison. En cas de déséquilibre le praticien effectuera 3 à 5 séances espacées d'une semaine afin d'enlever les symptômes et progressivement aller au cœur du problème pour traiter la cause et obtenir un rééquilibrage en profondeur durable dans le temps. Les bienfaits physiques agiront en global sur l'individu et apporteront détente et bien-être intérieur.`}</p>
          </div>
        </div>

        <div className={style.statistiquesContainer}>
          <Title 
              coloredWord={''}
              firstTitle={"Quelques statistiques..."}
              mainWord={"Statistiques"}
          />
          <div className={style.statistiques}>
            <div className={style.statCard}>
              <Image src={icon_handshake} alt='icone serrage de main'/>
              <p className={style.stat}>1500+</p>
              <p className={style.statName}>Clients enregistrés</p>
            </div>
            <div className={style.statCard}>
              <Image src={icon_heart} alt='icone coeur'/>
              <p className={style.stat}>98%</p>
              <p className={style.statName}>De satisfaction client</p>
            </div>
            <div className={style.statCard}>
              <Image src={icon_mecanism} alt='icone mécanique'/>
              <p className={style.stat}>7000+</p>
              <p className={style.statName}>Heures de pratique</p>
            </div>
            <div className={style.statCard}>
              <Image src={icon_coffee} alt='icon tasse de café'/>
              <p className={style.stat}>800+</p>
              <p className={style.statName}>Tasses de café</p>
            </div>
          </div>
        </div>

        <div className={`${style.clientNote}`}>
          <Title 
            coloredWord={'Avis '}
            firstTitle={"clients"}
            mainWord={"Clients"}
            className={style.title}
          />

        </div>

        <Slider/>


      </main>
    </>
  )
}
