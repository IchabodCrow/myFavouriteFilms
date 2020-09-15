import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { ShowMoviesList } from "./ShowMoviesList";
import { ShowMoviesBlocks } from "./ShowMoviesBlocks";
import Action from "../UI/Action";

export const MovieList = ({ movies, genresId, moviesList }) => {
  const history = useHistory();
  const [stateView, setStateView] = useState({ view: true });
  const [stateMark, setStateMark] = useState([]);

  useEffect(() => {
    props.moviesList({ genresArr: genresArr });
  }, [genresArr, props]);

  const changeDisplay = () => {
    setStateView({
      view: !stateView.view,
    });
  };
  const handleClick = () => {
    history.push("/favorite");
  };
  const markAsViewed = ({ selected, movieId }) => {
    console.log(selected);
    !selected
      ? setStateMark([...stateMark, movieId])
      : setStateMark(...[stateMark.filter((movie) => movie !== movieId)]);
  };
  
  return (
    <div>
      <div className="flex flex-row justify-end">
        <Action onClick={handleClick} label="Add" />
        <BlocksOrListButtons onClick={changeDisplay} view={stateView.view} />
      </div>
      {stateView.view ? (
        <ShowMoviesList
          movies={movies}
          state={stateMark}
          markAsViewed={markAsViewed}
        />
      ) : (
        <ShowMoviesBlocks
          movies={movies}
          state={stateMark}
          markAsViewed={markAsViewed}
        />
      )}
    </div>
  );
};
