import { useMutation, useQuery } from "@apollo/react-hooks";
import React, { useEffect, useState } from "react";
import updateFiltres from "../../mutation/updateFiltres";
import deleteFiltres from "../../mutation/deleteFiltres";

import { GenresButton } from "./GenresButton";
import movies from "../../queries/genresList";

export const CloudGenres = (props) => {
  const [genresState, setGenresState] = useState([]);
  const {loading, error, data} = useQuery(movies)
  
  const [addGenres] = useMutation(updateFiltres);
  const [deleteGenres] = useMutation(deleteFiltres);

  useEffect(() => {
    props.genresList();
    console.log(data)
  }, [props]);

  useEffect(() => {
    localStorage.setItem("movieGenres", [genresState]);
    props.genresIdArr(genresState);
    console.log(data)
  }, [props, genresState, data]);

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
            year: "2010",
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