import style from'@/styles/clientNote.module.scss'


export default function clientNote({imgUrl, note, name}) {

    return (
        <div className={style.title}>
            <h3 className={style.h3}>{firstTitle}</h3>
            <h4 className={style.h4}>{subtitle}</h4>
            <p className={style.mainWord}>{mainWord}</p>
            <span className={style.span}></span>
        </div>
    )
  }