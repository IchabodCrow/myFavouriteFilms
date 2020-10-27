import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import deleteFiltres from "mutation/deleteFiltres";
import { GenresButton } from "./GenresButton";

export const CloudGenres = (props) => {
  const [genresState, setGenresState] = useState([]);
  const [deleteGenres] = useMutation(deleteFiltres);
  
  useEffect(() => {
    localStorage.setItem("movieGenres", [genresState]);
    props.genresIdArr(genresState);
  }, [props, genresState]);

  const handleClick = (genre, selected) => {
    selected &&
      deleteGenres({
        variables: {
          id: genresState.filter((id) => id === genre.genreId).join(),
          filter: "cloudGenres",
        },
      });
    selected
      ? setGenresState(...[genresState.filter((movie) => movie !== genre.genreId)])
      : setGenresState([...genresState, genre.genreId]);
  };

  return (
    <div className="flex flex-row flex-wrap justify-center bg-purple-100 my-5">
      {props.data?.genresList?.map((genre) => (
        <GenresButton
          genre={genre}
          key={genre.name}
          selected={genresState.includes(genre.genreId)}
          onClick={props.getDataFiltres}
          handleClick={handleClick}
          getGenreId={props.getGenreId}
        />
      ))}
    </div>
  );
};