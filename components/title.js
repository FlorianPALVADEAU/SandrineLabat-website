import React from 'react'
import stylesheet from'@/styles/title.module.scss'


export default function title({coloredWord, firstTitle, subTitle, mainWord}) {

    return (
        <div className={stylesheet.title}>
            <h3 className={stylesheet.firstTitle}><p className={stylesheet.coloredWord} >{coloredWord}</p>{firstTitle}</h3>
            <h4 className={stylesheet.subTitle}>{subTitle}</h4>
            <p className={stylesheet.mainWord}>{mainWord}</p>
        </div>
    )
  }