import React, { useState } from 'react'
import stylesheet from'@/styles/imageTextCard.module.scss'
import { useEffect } from 'react';
import Image from 'next/image'



export default function ImageTextCard({image, text}) {
  const p = React.useRef()
  const src = image.src
  useEffect(() => {
    TextApply(text)
  });


  function TextApply(text){
    var paragraph = document.createElement('p')
    paragraph.innerHTML = text
    p.current.append(paragraph)
  }

  return (
      <div className={stylesheet.card}>
          <Image className={stylesheet.cardImg} src={src} alt="image explicative" height={"1920"} width={"1080"} />
          <div ref={p} className={stylesheet.cardContent}></div>
      </div>
  )
}