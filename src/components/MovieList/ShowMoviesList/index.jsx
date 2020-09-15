import React from "react";

import { CheckOrCancelButtons } from "UI/CheckOrCancelButtons";
import { ListViewCard } from "./ListViewCard";

export const ShowMoviesList = ({ movies, state, markAsViewed }) => {
  return (
    <div>
      {movies.results.map((movie) => {
        return (
          <div className="flex flex-row">
            <ListViewCard state={state} movie={movie}/>
            <CheckOrCancelButtons
              selected={state.includes(movie.id)}
              movieId={movie.id}
              onClick={markAsViewed}
            />
          </div>
        );
      })}
    </div>
  );
};