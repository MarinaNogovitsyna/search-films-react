import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Film({ poster, name, year, id }) {
  return (
    <div className="film">
      <img src={poster} alt={name} className="film__poster" />
      <div className="film__container-of-span">
        <Link to={`/film/${id}`} style={{ textDecoration: "none" }}>
          <span className="film__name">{name}</span>
        </Link>
        <span className="film__year">{year}</span>
      </div>
    </div>
  );
}
