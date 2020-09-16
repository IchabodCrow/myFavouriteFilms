import React from "react";
import { withRouter } from "react-router-dom";

import PageHeader from "../PageHeader";
import UserNameBlock from "../UserNameBlock";

const Main = () => {
  return (
    <div>
      <PageHeader />
      <UserNameBlock />
    </div>
  );
};

export default withRouter(Main);
