import React from "react";

import {CheckOrCancelButtons} from "components/UI/CheckOrCancelButtons";
import { SaveMeButton } from "components/UI/SaveMeButton";
import { BlockTypeCard } from "./BlockTypeCard";

export const ShowMoviesBlocks = ({ movies, state, onClick, page }) => {
  console.log(movies.movieList);
  return (
    <div className="flex flex-row flex-wrap">
      {movies &&
        movies.movieList.map((movie) => {
          return (
            <div className="flex flex-row w-1/4" key={movie.title}>
              <BlockTypeCard state={state} movie={movie} />
              {page === "main" ? (
                <CheckOrCancelButtons
                  selected={state.includes(movie.movieId)}
                  movieId={movie.movieId}
                  onClick={onClick}
                />
              ) : (
                <SaveMeButton
                  selected={state.includes(movie.movieId)}
                  movieId={movie.movieId}
                  onClick={onClick}
                />
              )}
            </div>
          );
        })}
    </div>
  );
};