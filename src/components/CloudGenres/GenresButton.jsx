import React, { useState } from "react";

export const GenresButton = ({ genre, handleClick }) => {
  const [genreSelected, setGenreSelected] = useState({});

  const toggle = () => {
    setGenreSelected({
      selected: !genreSelected.selected,
    });
    handleClick(genre.id, genreSelected.selected);
  };
  return (
    <div
      className={`bg-yellow-300 ${
        genreSelected.selected ? "border-green-400" : ""
      } border-4 cursor-pointer bg-opacity-50 w-auto h-auto text-center mx-3 my-3 p-2 rounded-lg capitalize`}
      id={genre.id}
      onClick={toggle}
    >
      {genre.name}
    </div>
  );
};
