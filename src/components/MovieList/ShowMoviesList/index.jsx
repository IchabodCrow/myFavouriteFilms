import React from "react";

import {CheckOrCancelButtons} from "components/UI/CheckOrCancelButtons";
import { SaveMeButton } from "components/UI/SaveMeButton";
import { ListViewCard } from "./ListViewCard";

export const ShowMoviesList = ({ page, movies, state, onClick }) => {
  return (
    <div>
      {movies && movies.results.map((movie) => {
        return (
          <div className="flex flex-row justify-center" key={movie.title}>
            <ListViewCard state={state} movie={movie} />
            {page === "main" ? (
              <CheckOrCancelButtons
                selected={state.includes(movie.id)}
                movieId={movie.id}
                onClick={onClick}
              />
            ) : (
              <SaveMeButton
                selected={state.includes(movie.id)}
                movieId={movie.id}
                onClick={onClick}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};