import React from "react";

import { CheckOrCancelButtons } from "../../UI/CheckOrCancelButtons";
import { BlockTypeCard } from "./BlockTypeCard";

export const ShowMoviesBlocks = ({ movies, state, markAsViewed }) => {
  return (
    <div className="flex flex-row flex-wrap">
      {movies.results.map((movie) => {
        return (
          <div className="flex flex-row w-1/4">
            <BlockTypeCard state={state} movie={movie}/>
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
