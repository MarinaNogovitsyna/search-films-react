import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchFilm({ handleFilm }) {
  const [film, setFilm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctValue = film.trim();
    if (correctValue) {
      handleFilm(correctValue[0].toUpperCase() + correctValue.slice(1));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="nav__form__label">Поиск: </label>
      <input
        type="text"
        className="nav__form__input"
        onChange={(e) => setFilm(e.target.value)}
      />
      <button type="submit" className="nav__form__btn">
        <IoSearchOutline />
      </button>
    </form>
  );
}
