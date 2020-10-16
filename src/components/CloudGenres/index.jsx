import { useMutation } from "@apollo/react-hooks";
import React, { useEffect, useState } from "react";
import addFiltres from "../../mutation/addFiltres";

import { GenresButton } from "./GenresButton";

export const CloudGenres = (props) => {
  const [genresState, setGenresState] = useState([]);
  const genres = genresState.join()
  
  const [addGenres] = useMutation(addFiltres, {
    variables: {
      genres: genres
    },
    onCompleted(addGenres){
      console.log('addGenres: ', addGenres)
    }
  });
  useEffect(() => {
    props.genresList();    
  }, [props]);

  useEffect( () => {
    localStorage.setItem("movieGenres", [genresState])
    props.genresIdArr(genresState)
  }, [props, genresState])

  const handleClick = (genreId, selected) => {
    addGenres()
    !selected
      ? setGenresState([...genresState, genreId])
      : setGenresState(...[genresState.filter((movie) => movie !== genreId)]);
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