import React from "react";
import { withRouter } from "react-router-dom";

import CloudGenresContainer from "containers/CloudGenresContainer";
import PageHeader from "components/PageHeader";
import UserNameBlock from "components/UserNameBlock";

const Main = () => {
  return (
    <div>
      <PageHeader />
      <UserNameBlock />
      <CloudGenresContainer />
    </div>
  );
};

export default withRouter(Main);
