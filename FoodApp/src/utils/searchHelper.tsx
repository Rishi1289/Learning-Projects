// Converts a restaurant into a single lowercase string
// containing all searchable text. This makes searching simple and fast.
export function buildSearchableText(restaurant) {
  const parts = [];

  // Restaurant-level fields
  parts.push(restaurant.name);
  parts.push(restaurant.specialty);
  parts.push(...restaurant.cuisines);

  // Dig into categories → dishes
  restaurant.categories?.forEach((category) => {
    parts.push(category.name);

    category.dishes?.forEach((dish) => {
      parts.push(dish.name);
      parts.push(dish.description);

      // Also include variant types like "Veg Whopper"
      dish.variants?.forEach((variant) => {
        parts.push(variant.type);
      });
    });
  });

  return parts.filter(Boolean).join(" ").toLowerCase();
}