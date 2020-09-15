import React from "react";
import { withRouter } from "react-router-dom";

import PageHeader from "../PageHeader/PageHeader";
import BlockWithUserName from "../BlockWithUserName/BlockWithUserName";

const Main = (props) => {
  return (
    <div>
      <PageHeader />
      <BlockWithUserName />
    </div>
  );

};

export default withRouter(Main);
