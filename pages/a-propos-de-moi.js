// Images and stylesheets
import style from'@/styles/AProposDeMoi.module.scss'
import home from'@/styles/Home.module.scss'
import photo_massage from '../assets/images/photo_massage.webp'
import profile_picture from '../assets/images/photo_horses.webp'
import Link from 'next/link'
import React from 'react'



// Components
import Title from '../components/title'
import ImageText from '../components/imageText'
import ImageTextCard from '../components/imageTextCard'
import TextFocus from '../components/textFocus'
import Timeline from '../components/timeLine'
import Image from 'next/image'


export default function Aproposdemoi() {
    const numberRef = React.useRef()

    function copyToClipBoard() {
        navigator.clipboard.writeText(numberRef.current.innerHTML);
        alert("Numéro de téléphone copié ! 😊");

    }
    return (
        <>
            <div className={style.presentation}>
                <Title 
                coloredWord={'Sandrine LABAT,'}
                firstTitle={"à votre écoute !"}
                mainWord={"Et si on se présentait ?"}
                />
                <div className={style.content}>
                    <Image className={style.image} src={profile_picture} alt="Sandrine labat photo de profil"/>

                    <div className={style.infoPresentation}>
                        <h2>{`Moi, c'est`} <b>Sandrine LABAT</b>, et je suis practicienne en :</h2>
                        <ul>
                            <li>
                                Soin énergétique Equin, Canin et Félin&nbsp;<br/>
                                <span>{`(Certifiée de l'école Scottish School for Horses - Liz Eddy)`}</span>
                            </li>
                            <li>
                                Shiatsu Humain Thérapeutique et de Relaxation &nbsp;<br/>
                                <span>{`(Certifiée de l'Ecole Nonindo - Isabelle Laading)`}</span>
                            </li>
                            <li>
                                Réflexologie Cranio Sacré&nbsp;<br/>
                                <span>(Certifiée par Max Albert Mio - instructeur en kinésiologie animale, réflexologie cranio sacré)</span>
                            </li>
                        </ul>
                        <p>{`J'officie sur la commune des Yvelines (78) et ses environs (28, 27, 91, 95), mais aussi dans l'Indre, l'Indre-et-Loire, le Loire-et-Cher et l'Ain !`}</p>
                        <div className={style.linkContainer}>
                            <a href='mailto:sandrinelabat@free.fr'>Envoyez-moi un mail</a>
                            <div ref={numberRef} className={style.link} onClick={()=>{copyToClipBoard()}}>06-86-44-92-47</div>
                            <Link className={style.link} href='/contact'>Page Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={home.infoShiatsu}>
                <Title 
                firstTitle={"Mon histoire..."}
                />
                <TextFocus 
                text={["J'ai été élevée et je vie avec des chats, les chiens venaient et viennent encore spontanément vers moi, les chevaux sont une passion depuis l'âge de 2 ans. Lors d'un voyage en Yougoslavie, je rencontre pour la 1ère fois un petit cheval de traie. Subjugué par cet animal, j'arrive à convaincre mes parents et le propriétaire de monter sur son dos. Dès ma première année d'équitation, j'étais déjà déterminée et sûre de mon ressenti pour cet animal, je ne pense qu'à deux choses, vivre auprès des chevaux et avoir mon cheval. Pour moi c'est une chance d'avoir commencé l'équitation à 9 ans sans jamais m'arrêter. Dès lors, ce n'est pas un loisir mais une réelle passion qui commence. Aujourd'hui de les voir en troupeau jouer en liberté, brouter ou se gratouiller me procure encore plus de plaisir que d'être sur leur dos ..."]}
                />
            </div>

            <div className={style.presentation}>
                <Title 
                    coloredWord={"Mon parcours"}
                    firstTitle={"vers le Shiatsu"}
                    mainWord={"Mon parcours"}
                />
                <div className={`${style.content} ${style.reversed}`}>
                    <Image className={style.image} src={profile_picture} alt="Sandrine labat photo de profil"/>

                    <div className={style.infoPresentation}>
                        <p>
                            {`C'est en 2008 que tout se met en place ...`}<br/>
                            {`Après plus de 30 ans d'équitation, (CSO, Dressage, Cross et Horse-ball) j'ai eu quelques accidents. Les différents blocages et douleurs non solutionnés par la médecine traditionnelle, kiné et ostéopathie, ... m'ont poussé personnellement vers le shiatsu. Ma rencontre avec Christelle Pernot a été un réel bouleversement en tout point de vue !!`}<br/><br/>
                            {`J'ai suivi une étudiante en shiatsu équin pendant un an et de voir le bien-être du cheval lors de ces séances, puis mon bien-être après ces séances m'ont permis de me lancer dans la formation équine et de décider alors, d'en faire mon métier.`}<br/><br/>
                            {`A partir de ce moment-là, je vais de belles rencontres en belles rencontres, que ce soit les étudiant(e)s de ma promotion, les formateurs et Liz Eddy, Isabelle Laading ou encore les professionnels qui acceptent de nous accueillir pour les stages.`}<br/><br/>
                            {`Aujourd'hui encore, je poursuis mon chemin et il est parsemé de belles rencontres, que ce soit avec les animaux (chevaux, chiens et chats), leur propriétaire ou ma patientèle humaine.`}<br/>
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.experiences}>
                <Title 
                firstTitle={"Mes experiences"}
                mainWord={"Experiences"}
                />
            </div>
            <Timeline/>
        </>
    )
}