import CategoryCard from "./categoryCard";


const Main = () => {
  return (
    <div>
    {/* //popular restaurants*/}
    <section className="Advert">
      <div>
        <h2>Promotional banner</h2>
      </div>
    </section>

     {/* //food categoriess*/}
     <section className="FoodCat">

          <div className="Foodcathead">
            <h2>Food categories</h2>
            <button>View All</button>
         </div>

         <div className="Foodcatbt">
            
            {[
           { name: "Pizza", icon: "🍕" },
           { name: "Burger", icon: "🍔" },
           { name: "Indian", icon: "🍛" },
           { name: "Chinese", icon: "🥡" },
           { name: "South Indian", icon: "🥞" },
           { name: "Desserts", icon: "🍰" },
           { name: "Beverages", icon: "🥤" },
           ].map((category) => (
           <CategoryCard
            key={category.name}
            name={category.name}
            icon={category.icon}
             />
            ))}

          </div>

     </section>
     {/* //popular restaurants*/}
     <section className="PRest">
      <div className="Presthead">
        <h2>Popular Restaurants</h2>
         <button>View All</button>
      </div>
     </section>

     {/* //popular food items*/}
     <section className="Pfood">
      <div className="Pfoodhead">
        <h2>Popular Foods</h2>
         <button>View All</button>
      </div>
     </section>

   </div>
  )
}

export default Main
