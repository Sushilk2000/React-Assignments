import { FaStar, FaStarHalf, FaLocationDot } from "react-icons/fa6";
import { IoMdRestaurant } from "react-icons/io";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="w-full max-w-md mx-auto mb-8 overflow-hidden bg-white rounded-lg shadow-md hover:shadow-2xl">
      <div className="px-6 py-4">
        <div className="flex items-center gap-4 mb-2">
          <h2 className="text-xl font-semibold text-gray-800">
            {restaurant.name}
          </h2>
          <div className="flex ml-2 text-yellow-300">
            {Array.from({ length: restaurant.rating }, (_, i) => (
              <FaStar key={i} />
            ))}
            {restaurant.rating % 1 === 0.5 && <FaStarHalf />}
          </div>
        </div>
        <p className="mb-2 text-sm text-gray-600">
          <FaLocationDot className="inline mr-2" />
          {restaurant.address}, {restaurant["address line 2"]}
        </p>
        <p className="mb-4 text-sm text-gray-600">
          {restaurant.outcode} {restaurant.postcode}
        </p>
      </div>
      <div className="px-6 py-4 bg-gray-100">
        <div className="mb-2 text-green-500">
          <IoMdRestaurant className="inline mr-2" />
          {restaurant.type_of_food}
        </div>
        <a
          href={restaurant.URL}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Menu
        </a>
      </div>
    </div>
  );
};

export default RestaurantCard;
