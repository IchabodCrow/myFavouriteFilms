import React from "react";
import { useTranslation } from "react-i18next";

export const ShowMoviesBlocks = ({ movies, styleViews }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-row flex-wrap">
      {movies.results.map((movie, index) => {
        return (
          <div className="p-8 w-1/3" key={index}>
            <div className="items-center justify-center shadow-xl rounded-lg">
              <img
                className="bg-gray-200 h-64 m-auto rounded-t-lg "
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt="Block"
              />
              <div className="bg-white m-auto rounded-b-lg px-8">
                <div className="pt-8 pb-8">
                  <p className="text-2xl h-20 font-bold text-center text-gray-700">
                    {movie.title}
                  </p>
                  <p className="text-xl font-bold text-gray-700">
                    {t("movieCard.voteAverage")} {movie.vote_average}
                  </p>
                  <p className="text-sm text-gray-600">{movie.release_date}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
