import stylesheet from'@/styles/disclaimer.module.scss'


export default function Disclaimer({image, text, reverse}) {

  return (
      <div className={stylesheet.disclaimer}>
        <p>{`La pratique du shiatsu n'a, en aucun cas, de prétention médicale ou paramédicale.`}</p>
        <p>Elle apporte une aide et un accompagnement, et ne se substitue en aucune façon à un quelconque acte médical.</p>
      </div>
  )
}