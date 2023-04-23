import React, { useState } from 'react'
import stylesheet from'@/styles/textFocus.module.scss'
import Image from 'next/image'
import { useEffect } from 'react';
import topLeft from '../assets/icons/top_left.png'
import bottomRight from '../assets/icons/bottom_right.png'


export default function textFocus({text}) {
  const p = React.useRef()
  useEffect(() => {
    text.forEach(element => {
        TextApply(element)
    });
  });

  function TextApply(text){
    var paragraph = document.createElement('p')
    paragraph.innerHTML = text
    p.current.append(paragraph)
  }

  return (
        <div className={stylesheet.textFocus}>
            <Image className={stylesheet.textFocustopLeft} src={topLeft} alt='encadré'/>
            <div ref={p} className={stylesheet.textFocusContent}></div>
            <Image className={stylesheet.textFocusBottomRight} src={bottomRight} alt='encadré'/>
        </div>
  )
}