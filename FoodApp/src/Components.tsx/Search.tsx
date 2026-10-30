
import { useState, useEffect } from "react";
import { restaurants } from "../Data/Fooditems";
import "./Search.css";

const Search = () => {
  const [SearchData, setSearchData] = useState("");
  const [DebouncedSearch, setDebouncedSearch] = useState("");

  // Debouncing: wait 500ms after the user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(SearchData);
    }, 500);

    // Clear the previous timer when the user types again
    return () => {
      clearTimeout(timer);
    };
  }, [SearchData]);

  const getdata = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };

  const filterout = restaurants
    .flatMap((restaurant) =>
      restaurant.categories.flatMap((category) =>
        category.dishes.filter((dish) =>
          dish.name
            .toLowerCase()
            .includes(DebouncedSearch.toLowerCase())
        )
      )
    )
    .slice(0, 6);

  return (
    <div className="searchbar">
      <h2>FoodIt</h2>

      <input
        type="text"
        placeholder="Search your Delights"
        value={SearchData}
        onChange={getdata}
      />

      {SearchData.trim() !== "" && DebouncedSearch === SearchData && (
        <div className="searchresult">
          {filterout.length > 0 ? (
            filterout.map((dish) => (
              <p key={dish.id}>{dish.name}</p>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;