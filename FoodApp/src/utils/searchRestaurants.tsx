import { buildSearchableText } from "./searchHelpers";

export function searchRestaurants(restaurants, query) {
  const trimmed = query.trim().toLowerCase();

  // If query is empty, return everything (or return [] — your choice)
  if (!trimmed) return [];

  // Split query into words for better matching
  // "paneer burger" → ["paneer", "burger"]
  const terms = trimmed.split(/\s+/).filter(Boolean);

  return restaurants.filter((restaurant) => {
    const searchable = buildSearchableText(restaurant);

    // Every term must be present somewhere (AND logic)
    return terms.every((term) => searchable.includes(term));
  });
}