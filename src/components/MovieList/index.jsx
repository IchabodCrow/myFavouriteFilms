import React, { useEffect, useState } from "react";
import { ShowMoviesBlocks } from "./ShowMoviesBlocks";
import { ShowMoviesList } from "./ShowMoviesList";

export const MovieList = (props) => {
  const genreArr = localStorage.getItem("movieGenres").split(",");

  useEffect(() => {
    props.moviesList({genreArr: ['878'], page: '1'});
  }, []);

  return (
    <div>
      {props.movies.results.map( (movie, index) => {
        return (
        <div key={index}>{movie.title}</div>
        )
      })}
      <ShowMoviesBlocks />
      <ShowMoviesList />
    </div>
  );
};
