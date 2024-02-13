import React from "react";
import { IoMdArrowBack } from "react-icons/io";

export default function BtnBack({ handleFilm }) {
  return (
    <div className="btn__back" onClick={() => handleFilm("")}>
      <IoMdArrowBack />
    </div>
  );
}
