import { useMutation } from "@apollo/react-hooks";
import React, { useEffect, useState } from "react";
import updateFiltres from "../../mutation/updateFiltres";
import deleteFiltres from "../../mutation/deleteFiltres";

import { GenresButton } from "./GenresButton";

export const CloudGenres = (props) => {
  const [genresState, setGenresState] = useState([]);

  const [addGenres] = useMutation(updateFiltres);
  const [deleteGenres] = useMutation(deleteFiltres);

  useEffect(() => {
    props.genresList();
  }, [props]);

  useEffect(() => {
    localStorage.setItem("movieGenres", [genresState]);
    props.genresIdArr(genresState);
  }, [props, genresState]);

  const handleClick = (genre, selected) => {
    selected
      ? deleteGenres({
          variables: {
            id: genresState.filter((id) => id === genre.id).join(),
            filter: "cloudGenres",
          },
        })
      : addGenres({
          variables: {
            year: null,
            rating: null,
            genre: { name: genre.name, genreId: genre.id },
          },
        });
    selected
      ? setGenresState(...[genresState.filter((movie) => movie !== genre.id)])
      : setGenresState([...genresState, genre.id]);
  };

  return (
    <div className="flex flex-row flex-wrap justify-center bg-purple-100 my-5">
      {props.genres.map((genre) => (
        <GenresButton
          genre={genre}
          key={genre.name}
          selected={genresState.includes(genre.id)}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};