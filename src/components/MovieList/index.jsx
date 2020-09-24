import React, { useEffect, useState } from "react";
import { ShowMoviesBlocks } from "./ShowMoviesBlocks";
import { ShowMoviesList } from "./ShowMoviesList";

export const MovieList = (props) => {
  const genresArr = props.genresId

  useEffect(() => {
    props.moviesList({genresArr: genresArr});
  }, [genresArr]);
  
  return (
    <div>
      {/* <ShowMoviesBlocks movies={props.movies} /> */}
      <ShowMoviesList movies={props.movies} />
    </div>
  );
};
