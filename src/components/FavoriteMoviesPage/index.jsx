import React, { useState } from "react"
import Slider from '@bit/altima-assurances.altima-ui-test.ui.slider';

import PageHeader from 'components/PageHeader'
import CloudGenresContainer from "containers/CloudGenresContainer"
import { BlocksOrListButtons } from "components/UI/BlocksOrListButtons"
import { SelectYear } from "components/UI/SelectYear";
import MovieListContainer from "containers/MovieListContainer";
import { useTranslation } from "react-i18next";

export const FavoriteMoviesPage = () => {
  const { t } = useTranslation();
  const [stateView, setStateView] = useState({ view: true });
  const [filtresState, setFiltresState] = useState({
    year: "",
    rating: 5,
    genres: [],
  });
  const changeDisplay = () => {
    setStateView({
      view: !stateView.view,
    });
  };
  const getDataFiltres = (e) => {
      const rating = e;
    e.target
      ? setFiltresState({
          ...filtresState,
          [e.target.name]: e.target.value,
        })
      : setFiltresState({
          ...filtresState,
          rating,
        });
  };

  return (
    <div>
      <PageHeader />
      <div className="m-6">
        <CloudGenresContainer />
        <div className="flex flex-row my-3">
          <div className="flex h-12 mr-3 justify-center items-center">
            {t("movieCard.voteAverage")}
          </div>
          <Slider
            className={"w-48"}
            min={0}
            max={10}
            defaultValue={5}
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
      />
    </div>
  );
}