import { useEffect, useState } from "react";
import { songs } from "../data/songs";
import type { Songs } from "../data/songs";

const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<Songs[]>([]);

  useEffect(() => {
    if (search.trim() === "") {
      setResults ([]);
      return;
    }

    const timer = setTimeout(() => {
      const filteredSongs = songs.filter((song) =>
        song.title.toLowerCase().includes(search.toLowerCase())
      );

      setResults(filteredSongs);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <div className="search-container">

      <input
        type="text"
        placeholder="Search for a song..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="results-container">

        {search.trim() !== "" && results.length === 0 && (
          <p className="search-message">Song not found</p>
        )}

        {results.map((song) => (
          <div className="song-card" key={song.id}>
            <h2>{song.title}</h2>

            <p>
              <strong>Artist:</strong> {song.artist}
            </p>

            <p>
              <strong>Genre:</strong> {song.genre}
            </p>

            <p>
              <strong>ID:</strong> {song.id}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default SearchBar;