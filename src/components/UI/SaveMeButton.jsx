import React from "react";
import { useTranslation } from "react-i18next";

import save from "resources/save-button.png";

export const SaveMeButton = ({ selected, movieId, onClick }) => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center item-center">
      <button className="focus:outline-none" onClick={() => onClick({ selected, movieId })}>
      <img src={save} className="w-12 h-12 m-3" alt={t("UI.checkButton")} />
    </button>
    </div>
    
  );
}