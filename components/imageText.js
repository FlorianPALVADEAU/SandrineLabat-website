import React, { useState, useRef, useEffect } from 'react';
import stylesheet from '@/styles/imageText.module.scss';

export default function ImageText({ image, text, reverse }) {
  const ref = useRef();
  const p = useRef();
  const [reversed, setReversed] = useState(reverse);
  const src = image.src;

  useEffect(() => {
    text.forEach(element => {
      TextPart(element);
    });
  }, [text]);

  function TextPart(text) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = text;
    p.current.append(paragraph);
  }

  return (
    <div ref={ref} className={`${stylesheet.contentBloc} ${reversed ? stylesheet.reverse : ""}`}>
      <div className={stylesheet.img} style={{ backgroundImage: `url(${src})` }}></div>
      <div ref={p} className={stylesheet.content}></div>
      <span className={stylesheet.span}></span>
    </div>
  );
}
