import React from "react";

import {CheckOrCancelButtons} from "components/UI/CheckOrCancelButtons";
import { SaveMeButton } from "components/UI/SaveMeButton";
import { ListViewCard } from "./ListViewCard";

export const ShowMoviesList = ({ page, movies, state, onClick }) => {
  return (
    <div>
      {movies && movies.movieList?.map((movie) => {
        return (
          <div className="flex flex-row justify-center" key={movie.title}>
            <ListViewCard state={state} movie={movie} />
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