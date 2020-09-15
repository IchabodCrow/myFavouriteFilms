import React from "react";
import { useTranslation } from "react-i18next";

export const SelectYear = ({state,onChange}) => {
  const { t } = useTranslation();
 
  const pushYearsInArr = () => {
    const years = [];
    for (let i = 2000; i <= 2020; i++) {
      years.push(i);
    }
    return years;
  };
  return (
    <div className="flex flex-row my-8">
      <div className="flex text-center my-3 mr-3 h-12 justify-center items-center">
        {t('movieCard.year')}
      </div>
      <select
        className="block bg-gray-200 w-14 my-3 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        onChange={onChange}
        name="year"
        value={state}
      >
        {pushYearsInArr().map((year) => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};