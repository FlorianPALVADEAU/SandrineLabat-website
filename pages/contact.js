// Images and stylesheets
import Head from 'next/head';
import style from'@/styles/Contact.module.scss'
import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { NextSeo } from 'next-seo';


export default function Shiatsuhumain() {
    const form = React.useRef(null);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_43qonam', 'template_ka44otn', form.current, 'LAg0wiCOFY0B9vnzr')
          .then((result) => {
            console.log(result, "Successfully sent !");
            form.current.style = 'display: flex; justify-content: center; align-items: center; background-color: #76C776; color: #fff; font-size: 20px;'
            form.current.innerHTML = ' <p>😊</p><h3 style="margin-top: 2%">Votre message a bien été envoyé !</h3><p style="font-size: 14px; font-style: italic; margin-top: 2%">Merci  &nbsp;</p>'
          }, (error) => {
            console.log(error.text);
            form.current.style = 'display: flex; justify-content: center; align-items: center; background-color: #C93A3B; color: #fff; font-size: 20px;'
            form.current.innerHTML = ' <p>😕</p><h3 style="margin-top: 2%">Oh oh... Une erreur s\'est produite.</h3><p style="font-size: 14px; font-style: italic; margin-top: 2%">Veuillez rééssayer plus tard.</p>'
          });
    
      };


    return (
        <>
            <NextSeo
                title="Contactez-moi ! - Sandrine LABAT"
                description="Besoin d'un rendez-vous ? Contactez-moi pour toutes vos questions et pour prendre rendez-vous. Des réponses à vos questions sur le Shiatsu. Bookez en 3 clics !"
                openGraph={{
                title: "Contactez-moi ! - Sandrine LABAT",
                description: "Besoin d'un rendez-vous ? Contactez-moi pour toutes vos questions et pour prendre rendez-vous. Des réponses à vos questions sur le Shiatsu. Bookez en 3 clics !",
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
                <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
                <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
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

                    <form className={style.formContact} ref={form} onSubmit={sendEmail}>
                        <div className={style.inputContainer}>
                            <label for="user_name">Votre Nom <span className={style.requiredStar}>*</span></label>
                            <input type="text" name="user_name" id='user_name' required autoComplete='true'/>
                        </div>
                        <div className={style.inputContainer}>
                            <label for="user_email">Votre adresse e-mail <span className={style.requiredStar}>*</span></label>
                            <input type="email" name="user_email" id='user_email' required autoComplete='true'/>
                        </div>
                        <div className={style.inputContainer}>
                            <label for="user_message">Votre Message <span className={style.requiredStar}>*</span></label>
                            <textarea name="user_message" id='user_message' required/>
                        </div>
                        <input type="hidden" name="from_name" value='Sandrine'/>
                        <button type="submit" className={style.inputSubmit} value="Send">Envoyer 🚀</button>
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