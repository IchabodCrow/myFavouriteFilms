import React from "react";
import { useHistory } from "react-router-dom";

import Action from "../UI/Action";
import { user } from "../../services/user";

const BlockWithUserName = () => {
  const history = useHistory();
  const userName = user.userName();

  const handleClick = () => {
    user.logout();
    history.push("/");
  };

  return (
    <div className="flex justify-end font-bold  text-purple-500 font-bold py-2 px-4 mx-6 rounded ">
      <div className="text-3xl capitalize">hello, {userName} </div>
      <Action onClick={handleClick} label={"logout"} />
    </div>
  );
};

export default BlockWithUserName;
