import React from "react";
import { useTranslation } from "react-i18next";
import className from "classnames";

export const BlockTypeCard = ({ state, movie }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w300";
  const { t } = useTranslation();
  const styleForMarkAsViewed = className("flex flex-row p-8", {
    "opacity-50": state.findIndex((id) => id === movie.movieId) !== -1,
  });
  return (
    <div className={styleForMarkAsViewed} key={movie.title}>
      <div className="items-center p-6 justify-center shadow-xl rounded-lg">
        <img
          className="bg-gray-200 h-68 m-auto rounded-t-lg "
          src={`${imgUrl + movie.img}`}
          alt={movie.title}
        />
        <div className="bg-white m-auto rounded-b-lg px-8">
          <div className="pt-8 pb-8">
            <p className="text-xl h-20 leading-none font-bold text-center text-gray-700">
              {movie.title}
            </p>
            <p className="text-xl font-bold text-gray-700">
              {t("movieCard.voteAverage")} {movie.average}
            </p>
            <p className="text-sm text-gray-600">{movie.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};