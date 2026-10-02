interface RestaurantCardProps {
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  image: string;
}

function RestaurantCard({
  name,
  cuisine,
  rating,
  deliveryTime,
  image,
}: RestaurantCardProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm">
      <img
        src={image}
        alt={name}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900">
          {name}
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          {cuisine}
        </p>

        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <span>⭐ {rating}</span>
          <span>{deliveryTime}</span>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;