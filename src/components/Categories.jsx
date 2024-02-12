import React, { useEffect, useState } from "react";
import Category from "./Category";

export default function Categories({ hendleGenre }) {
  const [genreId, setGenreId] = useState("");
  const [genres, setGenres] = useState([]);

  const categories = [
    "Новинки",
    "Боевик",
    "Комедия",
    "Детектив",
    "Драма",
    "Триллер",
  ];

  const hendleGenreName = (value) => {
    const correctValue = value.toLowerCase();
    let currentValue = '';
    if (correctValue !== "новинки") {
        currentValue = genres.find((el) => el.genre === correctValue).id;
        setGenreId(currentValue);
    }
    hendleGenre(currentValue)
  };

  useEffect(() => {
    fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/filters", {
      method: "GET",
      headers: {
        "X-API-KEY": "6f748f72-6671-4d38-b2fe-cd018cd69b9f",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setGenres(json.genres))
      .catch((err) => console.log(err));
  }, []);
//   console.log(genres);

  return (
    <div className="categories">
      {categories.map((el, index) => (
        <Category name={el} key={index} hendleGenreName={hendleGenreName} />
      ))}
    </div>
  );
}
