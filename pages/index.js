import Title from '../components/title'
import ImageText from '../components/imageText'
import style from'@/styles/Home.module.scss'
import shiatsuPresentationImage from '../assets/images/shiatsuPresentation.jpg'

export default function Home() {
  return (
    <>
      <div className={style.shiatsuPresentation}>
        <Title 
          coloredWord={'Le Shiatsu'}
          firstTitle={", c'est quoi ?"} 
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
    </>
  )
}
