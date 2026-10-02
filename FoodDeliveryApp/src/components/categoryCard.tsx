interface CategoryCardProps {
  name: string;
  icon: string;
}

function CategoryCard({ name, icon }: CategoryCardProps) {
  return (
    <div className="cursor-pointer rounded-xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="text-3xl">{icon}</div>

      <p className="mt-3 font-medium text-gray-800">
        {name}
      </p>
    </div>
  );
}

export default CategoryCard;