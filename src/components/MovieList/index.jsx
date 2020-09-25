import React, { useEffect, useState } from "react";
import classNames from 'classnames'

import { ShowMoviesList } from "./ShowMoviesList";
import { ShowMoviesBlocks } from './ShowMoviesBlocks'
import block from "resources/dial.png";
import list from "resources/equal.png";

export const MovieList = (props) => {
 
  const genresArr = props.genresId;

  const [state, setState] = useState({
    block: false,
    list: true,
  });

  const activeBlock = classNames(
    {'opacity-50': !state.block }
  )

  const activeList = classNames(
    {'opacity-50': !state.list }
  )

  useEffect(() => {
    props.moviesList({ genresArr: genresArr });
  }, [genresArr, props]);

  const changeDisplay = () => {
    setState({
      block: !state.block,
      list: !state.list,
    });
  };


  return (
    <div>
      <div className="flex flex-row-reverse">
        <button className={activeBlock} onClick={changeDisplay} disabled={state.block}>
          <img src={block} className="w-12 h-12 m-3" alt="Картинка!!!!" />
        </button>
        <button className={activeList} onClick={changeDisplay} disabled={state.list}>
          <img src={list} className="w-12 h-12 m-3" alt="Картинка!!!!" />
        </button>
      </div>
      {state.block ? (
        <ShowMoviesBlocks styleViews={state} movies={props.movies} />
      ) : (
        <ShowMoviesList styleViews={state} movies={props.movies} />
      )}
    </div>
  );
};
