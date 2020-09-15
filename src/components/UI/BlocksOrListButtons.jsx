import React from "react";
import classNames from "classnames";

import block from "resources/dial.png";
import list from "resources/equal.png";

export const BlocksOrListButtons = ({ view, onClick }) => {
  const activeBlock = classNames({ "opacity-50": view });
  const activeList = classNames({ "opacity-50": !view });

  return (
    <div className="flex flex-row-reverse m-6">
      <button className={activeBlock} onClick={onClick} disabled={!view}>
        <img src={block} className="w-12 h-12 m-3" alt="Картинка!!!!" />
      </button>
      <button className={activeList} onClick={onClick} disabled={view}>
        <img src={list} className="w-12 h-12 m-3" alt="Картинка!!!!" />
      </button>
    </div>
  );
};
