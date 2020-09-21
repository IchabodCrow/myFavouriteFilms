import React from "react";
import { withRouter } from "react-router-dom";

import PageHeader from "components/PageHeader";
import UserNameBlock from "components/UserNameBlock";

const Main = () => {
  return (
    <div>
      <PageHeader />
      <UserNameBlock />
    </div>
  );
};

export default withRouter(Main);
