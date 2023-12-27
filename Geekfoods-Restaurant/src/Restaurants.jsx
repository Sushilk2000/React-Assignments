import RestaurantCard from "./Restaurant";
import restaurantList from "./RestaurantList.json";

import { useState } from "react";

let searchKey = "";
let inputRating = 0;

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);

  const handleSearch = (e) => {
    if (e.target.id === "searchInput") {
      searchKey = e.target.value;
    } else if (e.target.id === "ratingInput") {
      inputRating = e.target.value;
      if (inputRating > 6) {
        e.target.value = 6;
      }
    }

    setRestaurants(
      restaurantList.filter(
        (item) =>
          item.name.toLowerCase().includes(searchKey.toLowerCase()) &&
          item.rating >= inputRating
      )
    );
  };

  return (
    <>
      <div className="flex items-center justify-around  mb-4">
        <div className="mx-8 mt-16 mb-4">
          <input
            type="text"
            placeholder="Search restaurants"
            className="p-2  px-4 pr-12 border w-[20rem] font-bold bg-gray-50 text-xl font-serif  rounded-md"
            onChange={handleSearch}
            id="searchInput"
          />
        </div>
        <div className="mx-8 mt-16 mb-4">
          <label for="minRating" className="mr-2 font-semibold font-serif">
            Minimum Rating:
          </label>
          <input
            type="number"
            min="0"
            max="6"
            step="1"
            className="p-2 border rounded"
            onChange={handleSearch}
            id="ratingInput"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 px-2 lg:px-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))
        ) : (
          <p className="py-12 text-3xl font-bold text-center text-red-600">
            No restaurants found
          </p>
        )}
      </div>
    </>
  );
};

export default Restaurants;
