import React from "react";

import check from "resources/checked.png";
import cancel from "resources/cancel.png";
import { useTranslation } from "react-i18next";

export const CheckOrCancelButtons = ({ selected, movieId, onClick }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-column">
      <div className="flex flex-col m-2">
        <button
          onClick={() => onClick({ selected, movieId })}
          disabled={selected}
        >
          <img src={check} className="w-12 h-12 m-3" alt={t('UI.checkButton')} />
        </button>
        <button
          onClick={() => onClick({ selected, movieId })}
          disabled={!selected}
        >
          <img src={cancel} className="w-12 h-12 m-3" alt={t('UI.cancelButton')} />
        </button>
      </div>
    </div>
  );
};
