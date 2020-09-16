import React from "react";
import { useHistory } from "react-router-dom";

import Action from "../UI/Action";
import { logout, currentgUserName } from "../../services/user";
import { useTranslation } from "react-i18next";

const UserNameBlock = () => {
  const { t } = useTranslation()
  const history = useHistory();
  const userName = currentgUserName(t("mainPage.userName"));
  

  const handleClick = () => {
    logout();
    history.push("/");
  };

  return (
    <div className="flex justify-end font-bold  text-purple-500 font-bold py-2 px-4 mx-6 rounded ">
      <div className="text-3xl capitalize">{t("mainPage.greeting")}, {userName} </div>
      <Action onClick={handleClick} label={t("description.logout")} />
    </div>
  );
};

export default UserNameBlock;