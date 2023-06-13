// Images and stylesheets
import Head from 'next/head';
import style from'@/styles/Contact.module.scss'
import React, { useEffect, useState } from 'react';


export default function Shiatsuhumain() {
    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs.sendForm('service_strkf42', 'template_ka44otn', form.current, 'LAg0wiCOFY0B9vnzr')
    //       .then((result) => {
    //         console.log(result, "Successfully sent !");
    //         form.current.style = 'display: flex; justify-content: center; align-items: center; background-color: #76C776; color: #fff; font-size: 20px;'
    //         form.current.innerHTML = ' <p>😊</p><h3 style="margin-top: 2%">Mail Sent Successfully!</h3><p style="font-size: 14px; font-style: italic; margin-top: 2%">Thank you</p>'
    //       }, (error) => {
    //         console.log(error.text);
    //         form.current.style = 'display: flex; justify-content: center; align-items: center; background-color: #C93A3B; color: #fff; font-size: 20px;'
    //         form.current.innerHTML = ' <p>😕</p><h3 style="margin-top: 2%">Uh oh... Something went wrong.</h3><p style="font-size: 14px; font-style: italic; margin-top: 2%">Try again later !</p>'
    //       });
    
    //   };


    return (
        <>
        
            <Head>
                <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
                <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
                <title>Contactez-moi ! - Sandrine Labat</title>
                <meta name="description" content="Besoin d'un rendez-vous ? Contactez-moi pour toutes vos questions et pour prendre rendez-vous. Des réponses à vos questions sur le Shiatsu. Bookez en 3 clics !"/>
                <meta name="keywords" content="contact, rendez-vous, questions, prise de rendez-vous, Shiatsu, tarifs, informations, sms, discuter, pluie et beau temps, bookez en 3 clics"/>
                
            </Head>
            <>
                <div className={style.mainText}>
                    <h4>{`Besoin d'un rendez-vous ?`}</h4>
                    <h1>Contactez-moi</h1>
                    <h3>Je suis ici pour répondre à toutes vos questions.</h3>
                    <h3>{`Pour la prise de rendez-vous, c'est aussi ici ! `}</h3>
                    <p>🙂</p>
                </div>
                <div className={style.formPart}>

                    <form className={style.formContact}>
                        <div className={style.inputContainer}>
                            <label for="name">Votre Nom <span className={style.requiredStar}>*</span></label>
                            <input type="text" name="name" required autoComplete='true'/>
                        </div>
                        <div className={style.inputContainer}>
                            <label for="email">Votre adresse e-mail <span className={style.requiredStar}>*</span></label>
                            <input type="email" name="email" required autoComplete='true'/>
                        </div>
                        <div className={style.inputContainer}>
                            <label for="message">Votre Message <span className={style.requiredStar}>*</span></label>
                            <textarea name="message" required/>
                        </div>
                        <button type="submit" className={style.inputSubmit}>Envoyer 🚀</button>
                        <p className={style.requiredDesc}>* champ requis &nbsp;</p>
                    </form>
                    <aside className={style.asideContent}>
                        <div className={style.content}>
                            <h2>Des question ?</h2>
                            <p>Vous pouvez me contacter en remplissant les informations à votre gauche ou en envoyant un sms</p>
                            <p>Pour connaitre les tarifs, merci de laisser un message.</p>
                            <p>Retrouvez toutes mes informations ci-dessous !</p>
                        </div>
                        <div className={style.content}>
                            <h2>Discutons !</h2>
                            <p>De la pluie et du beau temps...</p>
                            <p>Mais surtout du Shiatsu !</p>
                        </div>
                        
                    </aside>
                </div>

                <div className={style.calendlyButton}>
                    <h2>{`Besoin d'un rendez-vous ?`}</h2>
                    <p className={style.scrollIcon}>↓</p>
                    <a href='https://calendly.com/florian-plvd/rendez-vous-shiatsu' target='_blank'>
                        Bookez en 3 clics !
                    </a>
                </div>

            </>
        </>
    )
}