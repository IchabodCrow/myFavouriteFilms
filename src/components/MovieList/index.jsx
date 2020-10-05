import React, { useEffect, useState } from "react";

import { ShowMoviesList } from "./ShowMoviesList";
import { ShowMoviesBlocks } from "./ShowMoviesBlocks";

export const MovieList = ({ page, filtres ,view ,movies, genresId, moviesList }) => {
  
  const [stateMark, setStateMark] = useState([]);
  useEffect(() => {
    moviesList({...filtres, genres: genresId});
  }, [filtres ,genresId, moviesList]);
  const markAsViewed = ({ selected, movieId }) => {
    !selected
      ? setStateMark([...stateMark, movieId])
      : setStateMark(...[stateMark.filter((movie) => movie !== movieId)]);
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