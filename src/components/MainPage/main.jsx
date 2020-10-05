import React, { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";

import CloudGenresContainer from "containers/CloudGenresContainer";
import PageHeader from "components/PageHeader";
import UserNameBlock from "components/UserNameBlock";
import MovieListContainer from "containers/MovieListContainer";
import Action from "components/UI/Action";
import { BlocksOrListButtons } from "components/UI/BlocksOrListButtons";

const Main = () => {
  const [stateView, setStateView] = useState({ view: true });
  const history = useHistory();
  const changeDisplay = () => {
    setStateView({
      view: !stateView.view,
    });
  };
  const handleClick = () => {
    history.push("/favorite");
  };

  return (
    <div className="m-3">
      <PageHeader />
      <UserNameBlock />
      <CloudGenresContainer />
      <div className="flex flex-row justify-end">
        <Action onClick={handleClick} label="Add" />
        <BlocksOrListButtons onClick={changeDisplay} view={stateView.view} />
      </div>
      <MovieListContainer page="main" view={stateView.view}/>
    </div>
  );
};

export default withRouter(Main);