import { useMutation } from "@apollo/react-hooks";
import React, { useEffect, useState } from "react";
import addFiltres from "../../mutation/addFiltres";
import deleteFiltres from "../../mutation/deleteFiltres";

import { GenresButton } from "./GenresButton";

export const CloudGenres = (props) => {
  const [genresState, setGenresState] = useState([]);
  const [genreFiltresId, setGenreFiltresId] = useState({
    filterId: ""
  })
   const [addGenres] = useMutation(addFiltres, {
    onCompleted(addGenres){
      setGenreFiltresId({
        filterId: addGenres.addFiltres
      })
    }
  });
  const [deleteGenres] = useMutation(deleteFiltres)
  useEffect(() => {
    props.genresList();
  }, [props]);

  useEffect( () => {
    localStorage.setItem("movieGenres", [genresState])
    props.genresIdArr(genresState)
  }, [props, genresState])

  const handleClick = (genreId, selected) => {
  console.log(typeof genreId)
    !selected 
      ? addGenres({ variables: { year: "", rating: "", genres: genreId + ""}})
      : deleteGenres({variables: {id: genreFiltresId.filterId}})
    !selected
      ? setGenresState([...genresState, genreId]) 
      : setGenresState(...[genresState.filter((movie) => movie !== genreId)]) 
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