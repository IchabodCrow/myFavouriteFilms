import { useMutation, useQuery } from "@apollo/react-hooks";
import React, { useEffect, useState } from "react";

import deleteFiltres from "mutation/deleteFiltres";
import { GenresButton } from "./GenresButton";
import movies from "queries/genresList";

export const CloudGenres = (props) => {
  const [genresState, setGenresState] = useState([]);
  const [deleteGenres] = useMutation(deleteFiltres);
  const { loading, error, data } = useQuery(movies);

  useEffect(() => {
    props.genresList();
  }, [props]);

  useEffect(() => {
    localStorage.setItem("movieGenres", [genresState]);
    props.genresIdArr(genresState);
  }, [props, genresState, data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleClick = (genre, selected) => {
    selected &&
      deleteGenres({
        variables: {
          id: genresState.filter((id) => id === genre.id).join(),
          filter: "cloudGenres",
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
          onClick={props.getDataFiltres}
          handleClick={handleClick}
          getGenreId={props.getGenreId}
        />
      ))}
    </div>
  );
};