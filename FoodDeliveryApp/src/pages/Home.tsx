import Header from "../components/Header";
import SearchBar from "../components/searchbar";
import CategoryCard from "../components/categoryCard";
import RestaurantCard from "../components/RestaurantCard";
import Footer from "../components/Footer";



function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <Header />

      <main>
        
        {/* Hero Section */}
        <section className="bg-red-500 px-6 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold md:text-6xl">
                Delicious food,
                <br />
                Delivered to you.
              </h2>

              <p className="mt-6 text-lg text-orange-100">
                Discover the best restaurants and food around you.
              </p>

              <div className="mt-8 flex">
                <SearchBar/>
              </div>

            </div>

          </div>
        </section>

        {/* Categories */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Food Categories
            </h2>

            <button className="text-orange-500">
              View All
            </button>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-7">
            
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

        {/* Popular Restaurants */}
        <section className="mx-auto max-w-7xl px-6 py-12 ">
          <div className="flex items-center justify-between ">
            <h2 className="text-2xl font-bold text-gray-900">
              Popular Restaurants
            </h2>

            <button className="text-orange-500">
              View All
            </button>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
            
            {[
  {
    name: "Spice Garden",
    cuisine: "Indian • Chinese • Fast Food",
    rating: 4.5,
    deliveryTime: "30-40 min",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  },
  {
    name: "Pizza House",
    cuisine: "Pizza • Italian",
    rating: 4.7,
    deliveryTime: "25-35 min",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  },
  {
    name: "Burger Point",
    cuisine: "Burger • Fast Food",
    rating: 4.3,
    deliveryTime: "20-30 min",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
].map((restaurant) => (
  <RestaurantCard
    key={restaurant.name}
    name={restaurant.name}
    cuisine={restaurant.cuisine}
    rating={restaurant.rating}
    deliveryTime={restaurant.deliveryTime}
    image={restaurant.image}
  />
))}

          </div>
        </section>

        {/* Popular Food */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Popular Food
            </h2>

            <button className="text-orange-500">
              View All
            </button>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            
            {[1, 2, 3, 4].map((food) => (
              <div
                key={food}
                className="rounded-xl bg-white p-4 shadow-sm"
              >
                <div className="h-40 rounded-lg bg-gray-200" />

                <h3 className="mt-4 font-bold">
                  Delicious Food
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Fresh and tasty
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold">₹199</span>

                  <button className="rounded-lg bg-orange-500 px-4 py-2 text-sm text-white">
                    Add
                  </button>
                </div>
              </div>
            ))}

          </div>
        </section>

      </main>
      <Footer />
    </div>
    
  );
}

export default Home;