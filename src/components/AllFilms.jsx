import React, { useEffect, useState } from "react";
import Film from "./Film";

export default function AllFilms({ film, genre }) {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const url = film
      ? `https://kinopoiskapiunofficial.tech/api/v2.2/films?keyword=${film}`
      : genre
      ? `https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=${genre}`
      : "https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2024&month=JANUARY";

    fetch(`${url}`, {
      method: "GET",
      headers: {
        "X-API-KEY": "6f748f72-6671-4d38-b2fe-cd018cd69b9f",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setFilms(json.items))
      .catch((err) => console.log(err));
  }, [film, genre]);

  return (
    <div className="films__container">
      {films.length ? (
        films.map((film) => (
          <Film
            poster={film.posterUrlPreview}
            name={film.nameRu}
            year={film.year}
            key={film.kinopoiskId}
          />
        ))
      ) : (
        <h1 className="not-found">Фильм не найден</h1>
      )}
    </div>
  );
}
