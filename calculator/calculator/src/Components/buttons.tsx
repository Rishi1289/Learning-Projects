import { useState } from "react";

const buttons = () => {
 const [first, setfirst] = useState(0)
 
  return (
    <div className="keyboard">
     <div className="number">
       <button onClick={setfirst}> 1</button>
       <button> 2</button>
       <button> 3</button>
       <button> 4</button>
       <button> 5</button>
       <button> 6</button>
       <button> 7</button>
       <button> 8</button>
       <button> 9</button>
       <button> .</button>
       <button> 0</button>
       <button> =</button>     
     </div>
     <div className="calculators"></div>

    </div>
  )
}

export default buttons
