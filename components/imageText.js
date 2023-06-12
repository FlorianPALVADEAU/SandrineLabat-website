import React, { useState } from 'react'
import stylesheet from'@/styles/imageText.module.scss'
import { useEffect } from 'react';


export default function ImageText({image, text, reverse}) {
  const ref = React.useRef()
  const p = React.useRef()
  const [reversed, SetReversed] = useState(reverse)
  const src = image.src
  useEffect(() => {
    text.forEach(element => {
      TextPart(element)
    });
  });


  function TextPart(text){
    var paragraph = document.createElement('p')
    paragraph.innerHTML = text
    p.current.append(paragraph)
  }

  return (
      <div ref={ref} className={`${stylesheet.contentBloc} ${reversed ? stylesheet.reverse : ""}`}>
          <div className={stylesheet.img} style={{backgroundImage: `url(${src})`}} alt="image décorative"></div>
          <div ref={p} className={stylesheet.content}></div>
          <span className={stylesheet.span}></span>
      </div>
  )
}