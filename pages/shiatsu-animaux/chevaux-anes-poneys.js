// Images and stylesheets
import Head from 'next/head';
import home from'@/styles/Home.module.scss'
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


export default function ChevauxAnesPoneys () {
    const button = React.useRef(null)
    const lastPart = React.useRef(null)
    function displayAll() {
        button.current.style = 'display: none'
        lastPart.current.style = 'display: block'
    }

    return (
        <>
            <Head>
                <title>Chevaux, ânes, poneys - Mise en contexte</title>
                <meta name="description" content="Découvrez les bienfaits du shiatsu pour chevaux, ânes et poneys, une méthode de soins énergétiques douce et naturelle qui améliore la santé et le bien-être des animaux. Apprenez-en plus sur les conditions idéales pour les séances, les réactions possibles des chevaux et la fréquence recommandée." />
                <meta name="keywords" content="shiatsu pour chevaux, shiatsu pour ânes, shiatsu pour poneys, soins énergétiques pour animaux, bien-être animal, santé animale, médecine alternative pour animaux, médecine douce pour animaux, équilibre énergétique des animaux, circulation sanguine chez les chevaux, drainage lymphatique chez les chevaux, élimination des toxines chez les chevaux, système immunitaire des chevaux, système hormonal des chevaux, système digestif des chevaux, système respiratoire des chevaux, système nerveux des chevaux, souplesse articulaire des chevaux, tonicité musculaire des chevaux, harmonisation énergétique chez les chevaux, maintien en condition des chevaux, détente physique des chevaux, détente mentale des chevaux, réactions des chevaux au shiatsu, fréquence des séances de shiatsu pour chevaux, durée des séances de shiatsu pour chevaux, prévention des problèmes chez les chevaux, stimulation des défenses naturelles des chevaux, équilibre énergétique des chevaux" />
            </Head>
            <div className='presentation'>
                <Title 
                coloredWord={'Mise'}
                firstTitle={"en contexte"} 
                />
                <ImageText
                image={photo_horse6}
                text={
                    [
                        "Un soin énergétique peut varier entre 35 minutes et 1 heure 15 en fonction de la taille de l'animal, de son âge et de sa capacité d'attention.",
                        "Avant de commencer un soin, je m'entretiens avec le propriétaire en lui posant quelques questions d'ordre général sur son compagnon (mode vie, travail, alimentation, maladie ou accident possible, état psychologique …)",
                        "Puis, je prends un premier contact avec le cheval à travers un effleurage et la manipulation de certains points d'acupuncture.",
                        "L'objectif est d'offrir à l'animal une méthode de soins douce et naturelle ne présentant pas d'effets secondaires néfastes pour l'organisme."
                    ]
                }
                reverse={false}
                />
            </div>
            <div className='presentation'>
                <ImageText
                image={photo_horse7}
                text={
                    [
                        "Je propose au patient différentes techniques : des vibrations, lissages, palpé roulé et percutions, ainsi que des rotations et étirements des membres, flexion - extensions.",
                        "Le tout apportant une meilleure circulation et harmonisation énergétique sur l'ensemble du corps.",
                        "Le Shiatsu améliore l'état général de tous équidés, de toutes races, à tous âges,",
                        "toutes disciplines et même lors de convalescences.",
                        "NB : certaines de ces techniques ne s'appliquent pas aux vieux chevaux ou chevaux manquant d'état."   
                    ]
                }
                reverse={true}
                />
            </div>


            <div className='discoverConditions'>
                <Title 
                coloredWord={'Avant'}
                firstTitle={"toute chose"} 
                />
                <div className='content'>
                    <Link 
                    href="./idealement" 
                    className='redirectButton'
                    >
                        {`Découvrez les conditions idéales d'un soin énergétique`}
                    </Link>
                </div>
            </div>


            <div className='bienfaits'>
                <Title 
                coloredWord={'Les bienfaits'}
                firstTitle={"sont multiples..."}
                mainWord={"Bienfaits"}
                />
                <div className='cardContainer'>
                    <ImageTextCard 
                        image={photo_horses}
                        text={"Stimulation de la circulation sanguine."}
                    />
                    <ImageTextCard 
                        image={photo_horse2}
                        text={"Aide au drainage lymphatique et élimination des toxines."}
                    />
                    <ImageTextCard 
                        image={photo_horse3}
                        text={"Améliore le système immunitaire, hormonal, digestif, respiratoire et nerveux."}
                    />
                    <ImageTextCard 
                        image={photo_horse}
                        text={"Apporte souplesse et tonicité articulaire, musculaire et tissulaire de la circulation sanguine."}
                    />
                    <ImageTextCard 
                        image={photo_horses2}
                        text={"Harmonise la locomotion."}
                    />
                    <ImageTextCard 
                        image={photo_horse5}
                        text={"Maintient l'animal en meilleure condition"}
                    />
                    <ImageTextCard 
                        image={photo_horse8}
                        text={"Apporte une détente physique et mentale."}
                    />
                </div>
            </div>


            <div className='reactions'>
                <Title 
                coloredWord={'Différentes'}
                firstTitle={"réactions"} 
                />
                <div className='content'>
                    <p className='firstChild'>
                        La plupart des chevaux ne sont pas habitués à ce type de touché ainsi que certaines techniques, il est donc important que le propriétaire soit présent afin que le cheval soit en toute confiance. 
                        <br/>
                        La première séance aura donc toute son importance pour faire comprendre au cheval notre intention.
                        <br/>
                        {`Le cheval est un animal inquiet de part sa nature originelle, les sensations sous la peau, comme des fourmillements ou picotements sont dans un premier temps désagréables alors pour les éviter, il va se décaler, me pousser ou m'éviter, les oreilles vont bouger, un regard vigilant, la queue peut fouailler et si je vais au delà de ses limites, le cheval peut en venir aux dents ou aux coups de pieds.`}
                        <br/>
                        {`La plus part du temps c'est à titre informatif c'est à dire sans réel impact, il est libre de m'avertir et le propriétaire ne doit en aucun cas le sanctionner !`}
                    </p>
                    <button className='button' ref={button} style={{display: 'block'}} onClick={()=>{ displayAll(); }}>
                        Afficher la deuxième partie
                    </button>
                    <p ref={lastPart} className='lastChild' style={{display: 'none'}}>
                    {`Puis dans un second temps la circulation énergétique opère et le cheval se détend alors arrive les bâillements et les mâchouillements, le regard s'apaise, les oreilles dans le sens de l'écoute, certains sont participatif même et me montrent les endroits sur lesquels je dois m'attarder ... alors c'est une douce communication qui s'installe entre le cheval et moi.`} 
                    <br/>
                    {`Il n'est pas question de lui imposer un protocole, d'où l'importance de le respecter et l'écouter tout en adaptant les techniques à l'instant présent.`}
                    <br/>
                    {`Dès la deuxième séance les chevaux s'abandonnent totalement et manifestent dès le début leur intérêt pour la personne qui leur a fait découvrir ce bien-être. Certains même attendent leur tour avec impatience ...`}
                    </p>
                </div>
            </div>


            <div className={home.infoShiatsu}>
                <Title 
                coloredWord={'Fréquences'}
                firstTitle={"et durée"} 
                />
                <TextFocus 
                text={["Je conseillerai des séances à chaque intersaison (4 à 5 par an) pour maintenir un bon réseau énergétique. Le nombre de Shiatsu peut augmenter en fonction du travail fourni ou du rythme de vie du cheval (compétitions - transport fréquent), dès que vous remarquez des signes de mal être ou encore pour anticiper et éviter que les problèmes arrivent ou en cas de déséquilibre manifesté par des symptômes comme : raideurs, tensions, sciatiques, boiteries, perte d'état,  pellicule, poils terne, perte de joie de vivre, problèmes comportemental, ..., vous connaissez votre cheval ! Plusieurs séances (généralement trois) sont nécessaires pour constater une amélioration de l'état général (même si on assiste parfois à un changement spectaculaire dès la première séance)"]}
                />
                <div className={home.bottomSentence}>
                    <p className={home.sentence}>{`Il devrait avant tout être pratiqué en prévention afin de stimuler les défenses naturelles de l'organisme et maintenir ainsi l'équilibre énergétique pour une forme physique et mentale toute l'année.`}</p>
                    <span className={home.span}></span>
                </div>
            </div>


            <Disclaimer/>
        </>
    )
}