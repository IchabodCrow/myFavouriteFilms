import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";

import { ShowMoviesList } from "./ShowMoviesList";
import { ShowMoviesBlocks } from "./ShowMoviesBlocks";
import addMovie from "mutation/addMovie";
import deleteMovie from "mutation/deleteMovie";

export const MovieList = ({ page, filtres ,view ,movies, genresId, moviesList }) => {
  
  const [stateMark, setStateMark] = useState([]);
  const [addMovieMutation] = useMutation(addMovie);
  const [deleteMovieMutation] = useMutation(deleteMovie);
  useEffect(() => {
    moviesList({...filtres, genres: genresId});
  }, [filtres ,genresId, moviesList]);
  const markAsViewed = ({ selected, movieId }) => {
    selected
      ? setStateMark(...[stateMark.filter((movie) => movie !== movieId)])
      : setStateMark([...stateMark, movieId]);
    selected
      ? deleteMovieMutation({variables: {movieId: stateMark.filter((movieId) => movieId === movieId).join()}})
      : addMovieMutation({variables: {movieId : movieId + ''}})
  };
  
  return (
    <div>
      {view ? (
        <ShowMoviesList
          movies={movies}
          state={stateMark}
          onClick={markAsViewed}
          page={page}
        />
      ) : (
        <ShowMoviesBlocks
          movies={movies}
          state={stateMark}
          onClick={markAsViewed}
          page={page}
        />
      )}
    </div>
  );
};