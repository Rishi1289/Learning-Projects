interface CategoryCardProps {
  name: string;
  icon: string;
}

function CategoryCard({ name, icon }: CategoryCardProps) {
  return (
    <div className="Fcard">
      <div className="Fcardhead">{icon}</div>

      <p className="Fcardname">
        {name}
      </p>
    </div>
  );
}

export default CategoryCard;