import style from '@/styles/Footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import fullLogo from '../assets/icons/full_logo.png'
import insta from '../assets/icons/instagram.png'
import linkedIn from '../assets/icons/linkedin.png'
import mail from '../assets/icons/mail.png'
import facebook from '../assets/icons/facebook.png'


export default function Footer() {
    return (
      <>
      <footer className={style.footer}>
        <div className={style.topPart}>
          <div className={style.quickContact}>
            <Image className={style.image} src={fullLogo} alt="Sandrine labat full logo"/>
            <div className={style.icons}>
              <a className={style.a} target='_blank' href='https://www.instagram.com/celacloche/'><Image className={style.icon} src={insta} alt="Instagram logo"/></a>
              <a className={style.a} target='_blank' href='https://www.linkedin.com/in/sandrine-labat-55a3156b/'><Image className={style.icon} src={linkedIn} alt="LinkedIn logo"/></a>
              <a className={style.a} href='mailto:sandrinelabat@gmail.com'><Image className={style.icon} src={mail} alt="Mail logo"/></a>
              <a className={style.a} target='_blank' href='#'><Image className={style.icon} src={facebook} alt="Facebook logo"/></a>
            </div>
          </div>
          <div className={style.listContainer}>
            <div className={style.list}>
              <h3 className={style.h3}>Accès Rapide</h3>
              <ul className={style.ul}>
                <Link className={style.li} href='/shiatsu-humain'>Shiatsu Humains</Link>
                <Link className={style.li} href='#'>Soins Animaux</Link>
                <Link className={style.li} href='#'>Autres soins</Link>
                <Link className={style.li} href='/a-propos-de-moi'>Qui suis-je ?</Link>
                <Link className={style.li} href='/contact'>Me contacter</Link>
              </ul>
            </div>
            <div className={style.list}>
              <h3 className={style.h3}>Contact Rapide</h3>
              <ul className={style.ul}>
                <li className={style.li}>Adresse : 21 rue des coteaux de Chatron, Saint-Germain-De-La-Grange, 78640</li>
                <li className={style.li}>E-mail : sandrinelabat@gmail.com</li>
                <li className={style.li}>Mobile : 06.86.44.92.47</li>
              </ul>
            </div>
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1561.943809599678!2d1.9110656155466434!3d48.82262000846439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e69b2a194d62f1%3A0xc6d5c3f7caf2ca79!2s21%20Rue%20des%20Coteaux%20de%20Chatron%2C%2078640%20Saint-Germain-de-la-Grange!5e0!3m2!1sfr!2sfr!4v1679943026704!5m2!1sfr!2sfr" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className={style.iframe}
          >
          </iframe>
        </div>
        <div className={style.bottomPart}>
          <a className={style.a}href='https://florian-palvadeau.com' target='_blank'>Made by Florian PALVADEAU</a>
          <div className={style.a}>
            <a className={style.a} href='/copyrights' target='_blank'>{` Droits d'auteurs`}</a> |
            <a className={style.a} href='/website-policy' target='_blank'>{` Politiques d'utilisation`}</a> |
            <a className={style.a} href='/website-policy' target='_blank'> Plan du site</a> |
            <a className={style.a} href='/mentions-legales' target='_blank'> Mentions Légales</a>
          </div>
        </div>
      </footer>
      </>
    )
}