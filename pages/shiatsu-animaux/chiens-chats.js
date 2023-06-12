// Images and stylesheets
import home from'@/styles/Home.module.scss'
import React from 'react';
import photo_cat3 from '../../assets/images/photo_cat3.jpg'
import photo_cat2 from '../../assets/images/photo_cat2.jpg'
import photo_dog from '../../assets/images/photo_dog.png'
import photo_dog2 from '../../assets/images/photo_dog2.png'
import photo_dog3 from '../../assets/images/photo_dog3.jpg' 


// Components
import Title from '../../components/title'
import ImageText from '../../components/imageText'
import ImageTextCard from '../../components/imageTextCard'
import TextFocus from '../../components/textFocus'
import Disclaimer from '../../components/disclaimer'
import Link from 'next/link'


export default function ChiensChats () {
    const button = React.useRef(null)
    const lastPart = React.useRef(null)
    function displayAll() {
        button.current.style = 'display: none'
        lastPart.current.style = 'display: block'
    }

    return (
        <>
            <div className='presentation'> 
                <Title 
                coloredWord={'Mise'}
                firstTitle={"en contexte"} 
                />
                <ImageText
                image={photo_cat2}
                text={
                    [
                        "La séance se déroule sur environ 35 à 45 minutes en fonction de la taille de l'animal, de son âge et de sa capacité d'attention.",
                        "Avant de commencer une séance de shiatsu, je m'entretiens avec le propriétaire en lui posant quelques questions d'ordre général sur son compagnon (mode vie, travail, alimentation, maladie ou accident possible, état psychologique …), puis je prends un premier contact avec l'animal à travers un effleurage.",
                        "Pendant la séance j'exerce des pressions avec la paume des mains et la pulpe des doigts sur le corps de l'animal ainsi que des étirements.",
                        "L'objectif est d'offrir à l'animal une méthode de soins douce et naturelle ne présentant pas d'effets secondaires néfastes pour l'organisme. La séance de Shiatsu étant incontestablement un moment de détente et de bien-être."
                    ]
                }
                reverse={false}
                />
            </div>
            <div className='presentation'>
                <ImageText
                image={photo_dog3}
                text={
                    [
                        "Tous les animaux peuvent bénéficier du soin que ce soit pour améliorer la souplesse générale, le fonctionnement du système digestif, ou pour apaiser les troubles du comportement chez l'animal stressés.",
                        "Le soin permet d'apporter un équilibre énergétique global du corps et de l'esprit.",
                        "Il améliore l'état général de tout animal, toutes races, à tous âges, toutes disciplines et même en convalescence. Il permet de détendre, relaxer, redynamiser, stimuler en redonnant vitalité et joie de vivre.",

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
                        image={photo_dog}
                        text={"Stimule les différents systèmes : immunitaire, digestif, respiratoire, sanguin, nerveux, …"}
                    />
                    <ImageTextCard 
                        image={photo_dog2}
                        text={"Améliore la souplesse articulaire et musculaire donc harmonise la locomotion."}
                    />
                    <ImageTextCard 
                        image={photo_cat3}
                        text={"Apporte une détente physique,mentale et maintient l'animal en meilleure condition."}
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
                    {`La plupart des chiens ne sont pas habitués à ce type de touché, il est donc important que le maître soit présent afin que le chien soit en toute confiance, car nous le rappelons le Shiatsu doit être pratiqué avec l'adhésion de l'individu, donc sans muselière ni attache.`}
                    La première séance aura donc toute son importance pour faire comprendre le chien notre intention. 
                    {`Certains vont vouloir jouer et seront turbulents, d'autres vont être inquiets et vont changer sans cesse de position.`}
                    <br/>
                    {`Ils vont s'assoir, se coucher, se relever, se mettre sur le dos. Il n'est pas question de lui imposer un protocole, d'où l'importance de le respecter et l'écouter tout en adaptant 
                    les techniques à l'instant présent. Parfois, lors de la première séance, cet épisode de relâchement est précédé d'une réaction de surprise comme si la circulation 
                    de l'énergie provoquait fourmillements ou picotements.`}

                    </p>
                    <button className='button' ref={button} style={{display: 'block'}} onClick={()=>{ displayAll(); }}>
                        Découvrir les réactions des chats
                    </button>
                    <p ref={lastPart} className='lastChild' style={{display: 'none'}}>
                    {`Pour les chats c'est un peu plus complexes car ils sont indépendants mais ils ont besoin de se sentir bien et en confiance aussi. la séance se pratiquera dans une pièce qu'ils connaissent mais pas trop grande car ils savent aussi très bien se cloitrer et se cacher ! 
                    les réactions peuvent être plus vives, comme une queue qui s'agite et qui tape pour me prévenir ou encore un coup de patte pour me dire que la zone touchée n'est pas autorisé !
                    Et il peut arriver que je sois mordue mais encore une fois c'est un moyen de me dire non, je dois alors adapter mon shiatsu, ce qui est essentiel !
                    Après une séance, le chat peut soit se poser dans un coin qu'il affectionne, soit là où le shiatsu s'est terminé ou encore souhaite sortir afin de reprendre possessions de ses sensations !`}

                    </p>
                </div>
            </div>


            <div className={home.infoShiatsu}>
                <Title 
                coloredWord={'Fréquences'}
                firstTitle={"et durée"} 
                />
                <TextFocus 
                text={["En entretien pour anticiper et éviter que les problèmes arrivent ou en cas de déséquilibre manifesté par des symptômes comme : raideurs, tensions, sciatiques, boiteries, perte d'état,  pellicule, poils terne, perte de joie de vivre, problèmes comportemental, … Plusieurs séances (généralement trois) sont nécessaires pour constater une amélioration de l'état général (même si on assiste parfois à un changement dès la première séance)."]}
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