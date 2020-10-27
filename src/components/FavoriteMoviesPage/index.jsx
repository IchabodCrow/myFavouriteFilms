
import React, { useState } from "react"
import { Slider } from 'react-rainbow-components'
import { useMutation } from "@apollo/client"
import { useTranslation } from "react-i18next";
import { withRouter } from "react-router-dom"

import PageHeader from 'components/PageHeader'
import CloudGenresContainer from "containers/CloudGenresContainer"
import { BlocksOrListButtons } from "components/UI/BlocksOrListButtons"
import { SelectYear } from "components/UI/SelectYear";
import MovieListContainer from "containers/MovieListContainer";
import updateFiltres from "mutation/updateFiltres"

const FavoriteMoviesPage = () => {
  const { t } = useTranslation();
  const [stateView, setStateView] = useState({ view: true });
  const [filtresState, setFiltresState] = useState({
    year: "",
    rating: "",
    genres: [],
  });
  const [addGenres] = useMutation(updateFiltres);
  const changeDisplay = () => {
    setStateView({
      view: !stateView.view,
    });
  };

  const getGenreId = (genreId, selected) => {
    const genresArray = [];
    selected
      ? setFiltresState({
          ...filtresState,
          genres: filtresState.genres.filter((genre) => genre !== genreId),
        })
      : setFiltresState({
          ...filtresState,
          genres: [...filtresState.genres, genreId],
        });

    selected
      ? genresArray.filter((genre) => genre !== genreId)
      : genresArray.push(genreId);

    addGenres({
      variables: {
        genre: genresArray.join(),
      },
    });
  };
  const getDataFiltres = (e) => {
    setFiltresState({
      ...filtresState,
      [e.target.name]: e.target.value,
    });
    addGenres({
      variables: {
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div>
      <PageHeader />
      <div className="m-6">
        <CloudGenresContainer getGenreId={getGenreId} />
        <div className="flex flex-row my-3">
          <div className="flex h-12 mr-3 justify-center items-center">
            {t("movieCard.voteAverage")}
          </div>
          <Slider
            className={"w-48"}
            max={10}
            name="rating"
            value={filtresState.rating}
            onChange={getDataFiltres}
          />
        </div>
        <SelectYear state={filtresState.year} onChange={getDataFiltres} />
      </div>
      <hr />
      <BlocksOrListButtons onClick={changeDisplay} view={stateView.view} />
      <MovieListContainer
        view={stateView.view}
        filtres={filtresState}
        page="favorite"
        addGenres={addGenres}
      />
    </div>
  );
}

export default withRouter(FavoriteMoviesPage)