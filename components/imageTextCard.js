import React, { useState } from 'react'
import stylesheet from'@/styles/imageTextCard.module.scss'
import { useEffect } from 'react';



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
          <div className={stylesheet.cardImg} style={{backgroundImage: `url(${src})`}}></div>
          <div ref={p} className={stylesheet.cardContent}></div>
      </div>
  )
}