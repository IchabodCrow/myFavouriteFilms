import React from "react";
import classNames from "classnames";

import block from "resources/dial.png";
import list from "resources/equal.png";
import { useTranslation } from "react-i18next";

export const BlocksOrListButtons = ({ view, onClick }) => {
  const activeBlock = classNames("focus:outline-none", { "opacity-50": view });
  const activeList = classNames("focus:outline-none", { "opacity-50": !view });
  const { t } = useTranslation()

  return (
    <div className="flex flex-row-reverse m-6">
      <button className={activeBlock} onClick={onClick} disabled={!view}>
        <img src={block} className="w-12 h-12 m-3" alt={t('UI.blockButtonAlt')} />
      </button>
      <button className={activeList} onClick={onClick} disabled={view}>
        <img src={list} className="w-12 h-12 m-3" alt={t('UI.listButtonAlt')} />
      </button>
    </div>
  );
};