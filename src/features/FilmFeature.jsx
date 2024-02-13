import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function FilmFeature() {
  const { id } = useParams();
  const [film, setFilm] = useState("");

  useEffect(() => {
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
      method: "GET",
      headers: {
        "X-API-KEY": "6f748f72-6671-4d38-b2fe-cd018cd69b9f",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setFilm(json))
      .catch((err) => console.log(err));
  }, [id]);

  function getDuration(min) {
    const hour = Math.floor(min / 60);
    const minutes = min - hour * 60;
    return `${hour}ч. ${minutes}мин.`;
  }

  function getCountries(arr) {
    if (arr.length === 1) {
      return `Страна: ${arr[0].country}`;
    } else {
      const countryNames = arr.map((obj) => obj.country);
      const result = countryNames.join(", ");
      return `Страны: ${result}`;
    }
  }

  return (
    <>
      <nav>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h2 className="nav__logo">All Films</h2>
        </Link>
      </nav>
      {film && (
        <main className="film__page">
          <img
            src={film.posterUrl}
            alt={film.nameRu}
            className="film__page__img"
          />
          <div className="film__information">
            <h1 className="film__name">{film.nameRu}</h1>
            <div className="film__genres">
              {film.genres.map((el, index) => (
                <span className="film__genre" key={index}>
                  {el.genre}
                </span>
              ))}
            </div>
            <span>{getCountries(film.countries)}</span>
            <span>Продолжительность: {getDuration(film.filmLength)}</span>
            <span>Год: {film.year}</span>
            <span>{film.description}</span>
          </div>
          <div className="film__rating">{film.ratingKinopoisk}</div>
        </main>
      )}
    </>
  );
}

export default FilmFeature;
