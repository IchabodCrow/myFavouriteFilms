import React from "react";
import { useTranslation } from "react-i18next";

const PageHeader = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <div className="my-8 w-1/3 self-center">
        <h1 className="font-bold text-4xl bg-purple-500 text-center text-white font-bold py-2 px-4 rounded ">
          {t("title")}
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;