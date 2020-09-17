import React from "react";
import { withRouter } from "react-router-dom";

import PageHeader from "../PageHeader";
import UserNameBlock from "../UserNameBlock";
import CloudGenresContainer from "../../containers/CloudGenresContainer/indes";

const Main = () => {
  return (
    <div>
      <PageHeader />
      <UserNameBlock />
      <CloudGenresContainer/>
    </div>
  );
};

export default withRouter(Main);
