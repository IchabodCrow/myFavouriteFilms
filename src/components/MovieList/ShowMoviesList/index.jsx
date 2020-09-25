import React from "react";
import { useTranslation } from "react-i18next";

export const ShowMoviesList = ({ movies, styleViews }) => {
  const { t } = useTranslation()
  return (
    <div>
      {movies.results.map((movie, index) => {
        return (
          <div className={"flex lg:max-w-full max-w-sm w-3/4 m-10 shadow-xl rounded-lg"} key={index}>
            <img className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden " src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="List"/>
            <div className={"w-3/4 rounded-b bg-white  p-4 flex flex-col justify-between leading-normal"}>
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {movie.title}
                </div>
                {styleViews.list && <p className="text-gray-700 text-base">
                  {movie.overview}
                </p>}
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">{t('movieCard.voteAverage')}: {movie.vote_average}</p>
                  <p className="text-gray-600">{movie.release_date}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

