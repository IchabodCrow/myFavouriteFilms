import React from "react";

import {CheckOrCancelButtons} from "components/UI/CheckOrCancelButtons";
import { SaveMeButton } from "components/UI/SaveMeButton";
import { BlockTypeCard } from "./BlockTypeCard";

export const ShowMoviesBlocks = ({movies, state, onClick, page}) => {
  return (
    <div className="flex flex-row flex-wrap">
      {movies && movies.results.map((movie) => {
        return (
          <div className="flex flex-row w-1/4" key={movie.title}>
            <BlockTypeCard state={state} movie={movie} />
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