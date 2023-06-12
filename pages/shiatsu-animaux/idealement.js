// Images and stylesheetsimport Head from 'next/head';
import Head from 'next/head';
import style from'@/styles/Idealement.module.scss'
import home from'@/styles/Home.module.scss'
import photo_massage from '../../assets/images/photo_massage.webp'
import illustration_vegetables_photo from '../../assets/images/illustration_vegetables_photo.webp'
import illustration_stretching_photo from '../../assets/images/illustration_stretching_photo.webp'
import illustration_kid_photo from '../../assets/images/illustration_kid_photo.webp'
import illustration_neck_pain_photo from '../../assets/images/illustration_neck_pain_photo.webp'

// Components
import Title from '../../components/title'
import ImageText from '../../components/imageText'
import ImageTextCard from '../../components/imageTextCard'
import TextFocus from '../../components/textFocus'
import Disclaimer from '../../components/disclaimer'


export default function Idealement() {
    const keywords = [
        "séance", "animal", "travail intensif", "rythme cardiaque", "transpirations", "brosser", "animal sale",
        "pieds", "pattes", "boue", "doucher", "ration de nourriture", "cheval", "manger", "herbe", "foin",
        "pré", "box", "carrière", "lieu calme", "écurie", "adaptation", "liberté", "expression",
        "libérer", "rouler", "s'ébrouer", "repos", "travail monté", "travail à pied", "promenades intensives",
        "sollicitation", "mouvements libres", "compétition", "transport", "changement", "conscience",
        "soin", "animal de compagnie", "santé animale"
    ];

    return (
        <>
            <Head>
                <title>Idéalement, avant la séance - la séance - Idéalement, pendant la séance - Idéalement, après la séance</title>
                <meta name="description" content="Evitez de travailler votre animal de manière trop intensive, laissez-le tel quel s'il est 'sale', enlevez le maximum de boue des pieds ou pattes, ne pas donner de ration de nourriture 45 mn avant le soin, réalisez le soin dans un endroit calme que votre animal connaît, offrez un soin sans l'imposer, laissez votre animal s'exprimer pendant la séance, libérez votre animal après la séance, recommandez 48 H de repos après un soin, conseillez un minimum de 5 jours entre le soin et une compétition ou un transport." />
                <meta name="keywords" content={keywords.join(", ")} />
            </Head>

            <div className={style.before}>
                <Title 
                coloredWord={'Idéalement, avant'}
                firstTitle={"la séance"} 
                />
                <ul className={style.content}>
                    <li>{`Evitez de travailler votre animal de manière trop intensive, car son rythme cardiaque doit être celui d'un animal au repos et les traces de transpirations doivent être sèches.`}</li>
                    <li>{`Si votre animal est "sale", laissez-le tel quel, il est préférable de ne pas le brosser avant le soin.`}</li>
                    <li>{`Si les pieds ou pattes sont pleins de boue enlevez le maximum en évitant de doucher. S'ils sont mouillés alors douchés en évitant de dépasser les zones déjà mouillées.`}</li>
                    <li>{`45 mn avant le soin, ne pas donner de ration de nourriture à votre animal. Pour un cheval, il peut néanmoins manger de l'herbe et/ou du foin comme à son habitude.`}</li>
                </ul>
            </div>


            <div className={style.during}>
                <Title 
                coloredWord={'Idéalement, pendant'}
                firstTitle={"la séance"} 
                />
                <ul className={style.content}>
                    <li>{`On peut réaliser le soin dans un pré, un box, une carrière... L'important est que le cheval connaisse le lieu et s'y sente bien. Un endroit calme est préférable (par exemple, évitons l'écurie si c'est l'heure de la ration !). Pour les chiens et chats, c'est le lieux où ils se sentent le mieux et pour beaucoup, c'est chez eux.`}</li>
                    <li>{`On offre un soin, on ne l'impose pas, il est primordial de s'adapter à chaque animal.`}</li>
                    <li>{`Le soin peut se dérouler en liberté dans un espace clos ou tenu en main mais il est important de lui laisser le droit de s'exprimer pendant la séance.`}</li>
                </ul>
            </div>


            <div className={style.after}>
                <Title 
                coloredWord={'Idéalement, après'}
                firstTitle={"la séance"} 
                />
                <ul className={style.content}>
                    <li>{`Juste après la séance, l'idéal est de libérer votre animal afin qu'il puisse se rouler, ou s'ébrouer à sa guise.`}</li>
                    <li>{`48 H de repos sont recommandées après un soin c'est-à-dire, pas de séance de travail monté ou à pied pour les chevaux et pas de promenades intensives pour les chiens. Votre animal ne doit pas être sollicité, ce qui ne l'empêche pas d'être libre de ses mouvements comme à son habitude.`}</li>
                    <li>{`Je conseille un minimum de 5 jours entre le soin et une compétition ou un transport afin que l'animal prenne conscience des changements opérés durant la séance.`}</li>
                </ul>
            </div>


            <Disclaimer/>
        </>
    )
}