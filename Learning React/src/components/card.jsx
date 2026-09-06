
const Base = (Props) => {
  return (
    <div>
      <div className="parent">
        <div className="card">
            <div className="head">
                <img src='{Props.PImage}'/>
                <h1>{Props.Pname}</h1>
            </div>
            <div className="profiledata">
                <h2>Powers <span>{Props.Ppower}</span></h2>
                <h2>Height<span> {Props.Pheight}</span></h2>
                <h2>Strenth<span> {Props.Pstrenth}</span></h2>
                <h2>Flexibilty<span> {Props.Pflexibility}</span></h2>
            </div>
            <div className="PowerGrade">
                <h2>Power Grade <span> {Props.Ppowergrade}</span></h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Base
