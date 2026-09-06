import Base from "./components/card";

const App = () => {
const Pokimon = [
  {
    id: 1,
    name: "Pikachu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    power: 75,
    height: 40,
    strength: 70,
    flexibility: 90,
    powerGrade: "B",
  },

  {
    id: 2,
    name: "Charizard",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    power: 95,
    height: 85,
    strength: 95,
    flexibility: 70,
    powerGrade: "A",
  },

  {
    id: 3,
    name: "Blastoise",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    power: 90,
    height: 80,
    strength: 92,
    flexibility: 55,
    powerGrade: "A",
  },

  {
    id: 4,
    name: "Venusaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    power: 88,
    height: 78,
    strength: 85,
    flexibility: 60,
    powerGrade: "A",
  },

  {
    id: 5,
    name: "Lucario",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png",
    power: 92,
    height: 65,
    strength: 90,
    flexibility: 95,
    powerGrade: "A",
  },

  {
    id: 6,
    name: "Gengar",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
    power: 86,
    height: 55,
    strength: 75,
    flexibility: 88,
    powerGrade: "B",
  },

  {
    id: 7,
    name: "Snorlax",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
    power: 82,
    height: 98,
    strength: 100,
    flexibility: 20,
    powerGrade: "B",
  },

  {
    id: 8,
    name: "Eevee",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
    power: 60,
    height: 25,
    strength: 50,
    flexibility: 85,
    powerGrade: "C",
  },

  {
    id: 9,
    name: "Mewtwo",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
    power: 100,
    height: 90,
    strength: 98,
    flexibility: 92,
    powerGrade: "S",
  },

  {
    id: 10,
    name: "Greninja",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png",
    power: 94,
    height: 70,
    strength: 88,
    flexibility: 100,
    powerGrade: "A",
  },
];
console.log(Pokimon)

  return (
    <div className="navbar">
           <h1>Your Poke' Collection</h1>
     <div className="Collection">
        {Pokimon.map(function(elem){
          return <Base Pname={elem.name} Ppower={elem.power} Pheight={elem.height} Pstrenth={elem.strength} Pflexibility={elem.flexibility} Ppowergrade={elem.powerGrade}/>
        })}   
     </div>
    </div>
  )
}

export default App
