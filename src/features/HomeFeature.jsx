import React, { useState } from "react";
import AllFilms from "../components/AllFilms";
import Categories from "../components/Categories";
import SearchFilm from "../components/SearchFilm";
import SliderHeader from "../components/SliderHeader";

export default function HomeFeature() {
  const [film, setFilm] = useState("");
  const [genre, setGenre] = useState("");

  const hendleGenre = (id) => {
    setGenre(id);
  };
//   console.log(genre);

const handleFilm = (value) => {
    setFilm(value)
}
  return (
    <>
    <nav>
        <h2 className="nav__logo">
          All Films
        </h2>
        <SearchFilm handleFilm={handleFilm}/>
      </nav>
      {!film && <SliderHeader />}
      <main>
        {!film && <Categories hendleGenre={hendleGenre} />}
        <AllFilms film={film} genre={genre} />
      </main>
    </>
  );
}
