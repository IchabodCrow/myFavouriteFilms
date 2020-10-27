import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";

import { ShowMoviesList } from "./ShowMoviesList";
import { ShowMoviesBlocks } from "./ShowMoviesBlocks";
import addMovie from "mutation/addMovie";
import deleteMovie from "mutation/deleteMovie";

export const MovieList = ({ page, view, data, moviesIdArr }) => {
  const [stateMark, setStateMark] = useState([]);
  const [addMovieMutation] = useMutation(addMovie);
  const [deleteMovieMutation] = useMutation(deleteMovie);

  useEffect(() => {
    data.refetch();
    moviesIdArr(stateMark)
  }, [data, moviesIdArr, stateMark]);

  const markAsViewed = ({ selected, movieId }) => {

    selected
      ? setStateMark(...[stateMark.filter((movie) => movie !== movieId)])
      : setStateMark([...stateMark, movieId]);
    selected
      ? deleteMovieMutation({
          variables: {
            movieId: stateMark.filter((movieId) => movieId === movieId).join(),
          },
        })
      : addMovieMutation({ variables: { movieId: movieId + "" } });
  };

  return (
    <div>
      {view ? (
        <ShowMoviesList
          movies={data}
          state={stateMark}
          onClick={markAsViewed}
          page={page}
        />
      ) : (
        <ShowMoviesBlocks
          movies={data}
          state={stateMark}
          onClick={markAsViewed}
          page={page}
        />
      )}
    </div>
  );
};