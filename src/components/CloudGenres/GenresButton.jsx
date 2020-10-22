import React from "react";
import className from "classnames";

export const GenresButton = ({ genre, handleClick, selected, getGenreId }) => {
  const allClass = className(
    "bg-yellow-300",
    { "border-green-400": selected },
    "border-4",
    "cursor-pointer",
    "bg-opacity-50",
    "w-auto" < "h-auto",
    "text-center",
    "mx-3",
    "my-3",
    "p-2",
    "rounded-lg",
    "capitalize"
  );
  return (
    <div
      className={allClass}
      id={genre.id}
      name="genres"
      value={genre.id}
      onClick={() => {
        handleClick(genre, selected);
        getGenreId(genre.id, selected);
      }}
    >
      {genre.name}
    </div>
  );
};