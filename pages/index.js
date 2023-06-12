// Images and stylesheets
import Image from 'next/image'
import style from'@/styles/Home.module.scss'
import shiatsuPresentationImage from '../assets/images/shiatsuPresentation.jpg'
import illustration_vegetables_photo from '../assets/images/illustration_vegetables_photo.jpg'
import illustration_stretching_photo from '../assets/images/illustration_stretching_photo.jpg'
import illustration_kid_photo from '../assets/images/illustration_kid_photo.jpg'
import illustration_neck_pain_photo from '../assets/images/illustration_neck_pain_photo.jpg'
import icon_handshake from '../assets/icons/icon_handshake.png'
import icon_heart from '../assets/icons/icon_heart.png'
import icon_mecanism from '../assets/icons/icon_mecanism.png'
import icon_coffee from '../assets/icons/icon_coffee.png'

// Components
import Title from '../components/title'
import ImageText from '../components/imageText'
import ImageTextCard from '../components/imageTextCard'
import TextFocus from '../components/textFocus'

export default function Home() {
  return (
    <>
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
              'Depuis plus de <b>5000 ans</b>, Le shiatsu est un soin japonais basé sur la médecine traditionnelle chinoise qui permet d\'apporter un équilibre énergétique global du corps et de l\' esprit.', 
              'C\'est un soin préventif qui permet de stimuler les défenses <b>naturelles</b> de l\'organisme. Le Shiatsu est une méthode de bien-être naturelle, douce et <b>sans effet secondaire</b> dangereux pour la santé.', 
              'Au cours de la séance, le praticien propose des pressions (avecla pulpe des doigts) sur l\'ensemble des méridiens, des <b>rotations</b> ou <b>étirements</b>.',
              'Ces différentes techniques permettent d\'harmoniser le réseau énergétique de la personne et de favoriser ainsi la libre <b>circulation de l\'énergie</b> sur l\'ensemble du corps.'
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
          text={["Soulagement de douleurs diversesLe praticien, en rééquilibrant le réseau énergétique, aura pour effet de stimuler les défenses naturelles de l'organisme, faire lâcher les tensions physiques mais également mentales,  apporter détente et bien-être intérieur favorisant ainsi le processus d'auto-guérison. Le Shiatsu par son approche et son action globale peut avoir des effets bénéfiques sur de nombreux problèmes.  Ils peuvent être de types structurels, musculaires, ligamentaires, digestifs, de peaux ou psychologiques.  Ils peuvent d'ailleurs être dus au stress ou à la nervosité."]}
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

      <div className={style.infoShiatsu}>
        <Title 
          coloredWord={'Avis '}
          firstTitle={"clients"}
          mainWord={"Clients"}
        />
        <div className={style.clientNoteContainer}>
          {/* <p>Le Shiatsu avant tout utilisé en prévention, est préconisé en entretien à chaque changement de saison. En cas de déséquilibre le praticien effectuera 3 à 5 séances espacées d'une semaine afin d'enlever les symptômes et progressivement aller au cœur du problème pour traiter la cause et obtenir un rééquilibrage en profondeur durable dans le temps. Les bienfaits physiques agiront en global sur l'individu et apporteront détente et bien-être intérieur.</p> */}
        </div>
      </div>
    </>
  )
}
