import React, { useEffect, useState, useRef } from 'react';
import style from '@/styles/navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import humanLogo from '../assets/icons/human_logo_white.png'
import humanLogoScrolled from '../assets/icons/human_logo.png'
import { useRouter } from 'next/router';

export default function Navbar() {
  const [pos, setPos] = useState("top");
  const [h1Content, setH1Content] = useState('Vers le chemin du bien être et de l\'équilibre');
  const [h2Content, setH2Content] = useState('Grandir, se préserver et vieillir dans les meilleures conditions, c\'est la voie que propose le shiatsu');
  const [burgerActive, setBurgerActive] = useState(false);
  const burger = useRef(null);
  const nav = useRef(null);
  const router = useRouter();
  const mainChoices = [
    {
      name:'Accueil',
      url:'/'
    },
    {
      name:'Shiatsu Humain',
      url:'/shiatsu-humain'
    },
    {
      name:'Soins Animaux',
      url:null,
      new_choices:1
    },
    {
      name:'Autres Soins',
      url:null,
      new_choices:2
    },
    {
      name:'Qui Suis-je ?',
      url:'/a-propos-de-moi'
    },
    {
      name:'Me Contacter',
      url:'/contact'
    }
  ]
  const secondChoices = [
    [
      {
        name:'Chevaux, Ânes et Poneys',
        url:'/shiatsu-animaux/chevaux-anes-poneys'
      },
      {
        name:'Chiens et Chats',
        url:'/shiatsu-animaux/chiens-chats'
      },
      {
        name:'Idéalement',
        url:'/shiatsu-animaux/idealement'
      }
    ],
    [
      {
        name:'Soins 4D',
        url:'/autres-soins/soins-4D'
      },
      {
        name:'Reflexo Crânio Sacré',
        url:'/autres-soins/reflexo-cranio-sacre'
      },
      {
        name:'Communication Animale',
        url:'/autres-soins/communication-animale'
      }
    ]
  ]
  useEffect(() => {
    const handleScroll = () => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 50) {
        setPos("moved");
      } else {
        setPos("top");
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleBurger() {
    if (burger.current.classList.contains('cross')) {
      burger.current.classList.remove('cross');
    } else {
      burger.current.classList.add('cross');
      handleNavBar()
    }
    setBurgerActive(!burgerActive);
  }

  function handleNavBar() {
    nav.current.innerHTML = '';
    var links = document.createElement('div');
    links.classList.add(style.links);
    mainChoices.forEach(el => {
      var link = document.createElement('a');
      link.classList.add(style.link)
      link.href = el.url !== null ? el.url : '#';
      link.innerHTML = el.name;
      if (el.url === null && el.new_choices) {
        link.addEventListener('click', () => {
          handleNewNavBarContent(el.new_choices);
        });
      }
      nav.current.appendChild(link);
    });
  }
  
  function handleNewNavBarContent(params) {
    nav.current.innerHTML = '';
    var links = document.createElement('div');
    links.classList.add(style.links);
    var returnButton = document.createElement('div');
    returnButton.classList.add(style.returnButton);
    returnButton.innerHTML = '⬅ Retour'
    returnButton.addEventListener('click', () => {
      handleNavBar();
    });
    secondChoices[params-1].forEach(el => {
      var link = document.createElement('a');
      link.classList.add(style.link)
      link.href = el.url !== null ? el.url : '#';
      link.innerHTML = el.name;
      nav.current.appendChild(link);
    });
    nav.current.appendChild(returnButton);
  }

  useEffect(() => {
    const handleURLChange = (url) => {
      const lastURLElement = url.substring(url.lastIndexOf('/') + 1);
      if (lastURLElement === '') {
        setH1Content('Vers le chemin du bien être et de l\'équilibre');
        setH2Content('Grandir, se préserver et vieillir dans les meilleures conditions, c\'est la voie que propose le shiatsu');
      } else if (lastURLElement === 'shiatsu-humain') {
        setH1Content('Shiatsu humain');
        setH2Content('Découvrez le shiatsu humain sous tous ses angles');
      } else if (lastURLElement === 'chevaux-anes-poneys') {
        setH1Content('Chevaux, Poneys et Ânes');
        setH2Content('Les soins que je peux apporter à ce type d\'animaux');
      } else if (lastURLElement === 'chiens-chats') {
        setH1Content('Chiens et chats');
        setH2Content('Les soins que je peux apporter à ce type d\'animaux');
      } else if (lastURLElement === 'idealement') {
        setH1Content('Idéalement');
        setH2Content('Découvrez les meilleures pratiques à réaliser avant, pendant et après chaque séance !');
      } else if (lastURLElement === 'contact') {
        setH1Content('Me contacter');
        setH2Content('Contactez-moi par mail ou téléphone');
      } else if (lastURLElement === 'a-propos-de-moi') {
        setH1Content('Qui suis-je ?');
        setH2Content('Découvrez en plus à propos de moi !');
      } else if (lastURLElement === 'soins-4D') {
        setH1Content('Soins 4D');
        setH2Content('Découvrez en plus sur les soins 4D !');
      } else if (lastURLElement === 'reflexo-cranio-sacre') {
        setH1Content('Réflexologie Crânio-sacrée');
        setH2Content('Découvrez-en plus sur la réflexologie crânio-sacrée !');
      } else if (lastURLElement === 'communication-animale') {
        setH1Content('Communication Animale');
        setH2Content('Découvrez en plus sur la communication animale !');
      }else if (lastURLElement === 'copyrights') {
        setH1Content('Droits d\'auteurs');
        setH2Content('Droits d\'auteur © 2023 Sandrine LABAT. Tous droits réservés.');
      } else if (lastURLElement === 'website-policy') {
        setH1Content('Politiques');
        setH2Content('Découvrez les politiques de ce site');
      } else if (lastURLElement === 'mentions-legales') {
        setH1Content('Mentions légales du site');
        setH2Content('Découvrez les mentions légales de ce site');
      } else if (lastURLElement === 'sitemap') {
        setH1Content('Plan du Site');
        setH2Content('Découvrez le plan de ce site');
      }
    };

    handleURLChange(router.pathname);

    const handleRouteChange = (url) => {
      handleURLChange(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, router.pathname]);

  return (
    <>
      <header className={style.header}>
        <nav className={`${style.navBar} ${pos === 'top' ? '' : style.scrolled}`} >
          <Link href='/'><Image priority src={pos === 'top' ? humanLogo : humanLogoScrolled} className={style.logo} alt='logo'/></Link>
          <div id={`${style.burger}`} className='burger' ref={burger} onClick={handleBurger}>
            <span></span>
          </div>
          <div className={`${style.links} ${burgerActive ? style.active : ''}`} ref={nav}>
            <Link href="/" className={style.link}>Accueil</Link>
            <Link href="/shiatsu-humain" className={style.link}>Shiatsu Humain</Link>
            <div className={style.dropdown}>
              <p className={style.link}>Soins Animaux</p>
              <div className={style.dropdownActive}>
                <Link href="/shiatsu-animaux/chevaux-anes-poneys" className={style.link}>Chevaux, Poneys et Ânes</Link>
                <Link href="/shiatsu-animaux/chiens-chats" className={style.link}>Chiens et chats</Link>
                <Link href="/shiatsu-animaux/idealement" className={style.link}>Idéalement</Link>
              </div>
            </div>
            <div className={style.dropdown}>
              <p className={style.link}>Autres Soins</p>
              <div className={style.dropdownActive}>
                <Link href="/autres-soins/soins-4D" className={style.link}>Soin 4D</Link>
                <Link href="/autres-soins/reflexo-cranio-sacre" className={style.link}>Réflexo Crânio Sacré</Link>
                <Link href="/autres-soins/communication-animale" className={style.link}>Communication Animale</Link>
              </div>
            </div>
            <Link href="/a-propos-de-moi" className={style.link}>Qui suis-je ?</Link>
            <Link href="/contact" className={style.link}>Me Contacter</Link>
          </div>
        </nav>
        <div className={style.bottomContent}>
          <div className={style.content}>
            <h1 className={style.h1}>{h1Content}</h1>
            <h2 className={style.h2}>{h2Content}</h2>
          </div>

          <Link href="#" className={style.discoverMore}>En découvrir plus</Link>
          <p className={style.scrollIcon}>↓</p>
        </div>
      </header>
    </>
  );
}
