import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import style from'@/styles/slider.module.scss'
import Image from 'next/image'
import image1 from '../assets/images_new/illustration_kid_photo.jpg'
import image2 from '../assets/images_new/microsoft-365-7mBictB_urk-unsplash.jpg'
import image3 from '../assets/images_new/john-fornander-TAZoUmDqzXk-unsplash.jpg'
import image4 from '../assets/images_new/johnson-wang-qG-hPxoAnRE-unsplash.jpg'
import image5 from '../assets/images_new/shashi-chaturvedula-FjYwhowyp6k-unsplash.jpg'
import image6 from '../assets/images_new/photo_header_mobile.jpg'
import quote_icon from '../assets/icons/quote_icon.png'
import arrow from '../assets/icons/arrow.png'

function Slider() {
    const arrowStyles = {
      position: 'absolute',
      zIndex: 2,
      top: 'calc(50% - 15px)',
      width: 30,
      height: 30,
      cursor: 'pointer',
      border: 0,
      backgroundColor: 'transparent',
    }
    const indicatorStyles = {
      background: '#2e8fcf86',
      width: 17,
      height: 17,
      borderRadius: 20,
      display: 'inline-block',
      margin: '0 8px',
      cursor: 'pointer',
      marginTop: -50
    }
    const slides = [
      {
        person1: {
          image: image1,
          content: "Le shiatsu a été pour moi la révellation de l'année 2022 ! Merci Sandrine pour cette découverte et ces soins au top !",
          name: 'Adele Brieux',
        },
        person2: {
          image: image2,
          content: "Le shiatsu a été pour moi la révellation de l'année 2022 ! Merci Sandrine pour cette découverte et ces soins au top !",
          name: 'Nadège Milarta',
        }
      },
      {
        person1: {
          image: image3,
          content: 'Impeccable. Rien à redire',
          name: 'Thomas Beaudard',
        },
        person2: {
          image: image4,
          content: "Au début j'étais sceptique mais j'avoue avoir été surpris par l'éfficacité des soins apportés par Sandrine... Encore bravo ! 🖐️",
          name: 'Bastien Mauraldin',
        }
      },
      {
        person1: {
          image: image5,
          content: 'Très satisfaite de ma première séance. Mon cheval se sent mieux !',
          name: 'Alexandra Buvari',
        },
        person2: {
          image: image6,
          content: 'Sandrine est tellement agéable et profesionnelle, je recommande ses talents !',
          name: 'Jeanne Daponto',
        }
      },
    ]
  
    return (
      <Carousel
        // autoPlay
        interval={5000}
        infiniteLoop
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: 15, transform: 'rotate(90deg)' }}
            >
              <Image src={arrow} alt="précédent" style={{ width: 50 }} />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 15, transform: 'rotate(-90deg)' }}
            >
              <Image src={arrow} alt="suivant" style={{ width: 50 }} />
            </button>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                style={{
                  ...indicatorStyles,
                  background: '#2E8FCF',
                  transform: 'scale(1.3)',
                }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              style={indicatorStyles}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        {slides.map((slide, index) => (
          <div className={style.slide} key={index}>

            <div className={style.rightPart}>
              <Image src={quote_icon} className={style.quote_icon} alt="icône de citation"/>
              <div className={style.content}>
                <div className={style.img} style={{backgroundImage: `url(${slide.person1.image.src})`}}></div>
                <p>{slide.person1.content}</p>
              </div>
              <p className={style.name}>{slide.person1.name}</p>
            </div>

            <span className={style.span}></span>

            <div className={style.leftPart}>
              <Image src={quote_icon} className={style.quote_icon} alt="icône de citation"/>
              <div className={style.content}>
                <div className={style.img} style={{backgroundImage: `url(${slide.person2.image.src})`}}></div>
                <p>{slide.person2.content}</p>
              </div>
              <p className={style.name}>{slide.person2.name}</p>
            </div>

          </div>
        ))}
      </Carousel>
    );
  }
  
  export default Slider;
    
    
    
    
    
    
    