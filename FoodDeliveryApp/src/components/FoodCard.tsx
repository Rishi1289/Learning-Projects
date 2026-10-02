interface FoodCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

function FoodCard({
  name,
  description,
  price,
  image,
}: FoodCardProps) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm">
      <img
        src={image}
        alt={name}
        className="h-40 w-full rounded-lg object-cover"
      />

      <h3 className="mt-4 font-bold text-gray-900">
        {name}
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        {description}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-bold text-gray-900">
          ₹{price}
        </span>

        <button className="rounded-lg bg-orange-500 px-4 py-2 text-sm text-white hover:bg-orange-600">
          Add
        </button>
      </div>
    </div>
  );
}

export default FoodCard;