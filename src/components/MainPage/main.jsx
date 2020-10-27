import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";

import CloudGenresContainer from "containers/CloudGenresContainer";
import PageHeader from "components/PageHeader";
import UserNameBlock from "components/UserNameBlock";
import MovieListContainer from "containers/MovieListContainer";
import Action from "components/UI/Action";
import { BlocksOrListButtons } from "components/UI/BlocksOrListButtons";
import { useMutation } from "@apollo/client";
import updateFiltres from "mutation/updateFiltres";

const Main = () => {
  const [stateView, setStateView] = useState({ view: true });
  const history = useHistory();
  const [addGenres] = useMutation(updateFiltres);
  const [filtresState, setFiltresState] = useState({
    genres: [],
  });

  const changeDisplay = () => {
    setStateView({
      view: !stateView.view,
    });
  };
  const getGenreId = (genreId, selected) => {
    selected
    ?setFiltresState({
      ...filtresState,
      genres: filtresState.genres.filter((genre) => genre !== genreId)
    })
    :setFiltresState({
       ...filtresState,
       genres: [...filtresState.genres, genreId]
     })

     addGenres({
      variables: {
        genre: filtresState.genres.join()
      }
    })
   }
  const handleClick = () => {
    history.push("/favorite");
  };

  return (
    <div className="m-3">
      <PageHeader />
      <UserNameBlock />
      <CloudGenresContainer getGenreId={getGenreId} />
      <div className="flex flex-row justify-end">
        <Action onClick={handleClick} label="Add" />
        <BlocksOrListButtons onClick={changeDisplay} view={stateView.view} />
      </div>
      <MovieListContainer page="main" view={stateView.view}/>
    </div>
  );
};

export default withRouter(Main);