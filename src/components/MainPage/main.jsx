import React from "react";
import { withRouter } from "react-router-dom";

import CloudGenresContainer from "containers/CloudGenresContainer";
import PageHeader from "components/PageHeader";
import UserNameBlock from "components/UserNameBlock";
import MovieListContainer from "../../containers/MovieListContainer";

const Main = () => {
  return (
    <div className="m-3">
      <PageHeader />
      <UserNameBlock />
      <CloudGenresContainer />
      <MovieListContainer/>
    </div>
  );
};

export default withRouter(Main);
