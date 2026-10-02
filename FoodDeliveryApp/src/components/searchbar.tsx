function SearchBar() {
  return (
    <div className="flex w-full max-w-xl">
      <input
        type="text"
        placeholder="Search for food or restaurants..."
        className="w-full rounded-l-lg bg-white px-5 py-4 text-gray-800 outline-none"
      />

      <button className="rounded-r-lg bg-gray-900 px-6 font-semibold text-white">
        Search
      </button>
    </div>
  );
}

export default SearchBar;