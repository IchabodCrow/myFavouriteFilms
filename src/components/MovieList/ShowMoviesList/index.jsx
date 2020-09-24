import React from "react";
import className from "classnames";

export const ShowMoviesList = ({ movies }) => {
  const but = true;

  const containerCardFilm = className(
    { "flex lg:max-w-full max-w-sm w-2/3 m-2": but },
    { "flex-col border-gray-400 border w-1/3 ": !but }
  );

  const borderCard = className(
    {
      "border-r border-b border-l border-gray-400 w-2/3 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r": but,
    },
    { "w-1/3": !but },
    "bg-white  p-4 flex flex-col justify-between leading-normal"
  );

  return (
    <div className={"flex flex-row flex-wrap"}>
      {movies.results.map((movie, index) => {
        return (
          // <div className={containerCardFilm}>
          //   <img className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
          //   <div className={borderCard}>
          //     <div className="mb-8">
          //       <div className="text-gray-900 font-bold text-xl mb-2">
          //         {movie.title}
          //       </div>
          //       {but && <p className="text-gray-700 text-base">
          //         {movie.overview}
          //       </p>}
          //     </div>
          //     <div className="flex items-center">
          //       <div className="text-sm">
          //         <p className="text-gray-900 leading-none">Рэйтинг: {movie.vote_average}</p>
          //         <p className="text-gray-600">{movie.release_date}</p>
          //       </div>
          //     </div>
          //   </div>
          // </div>
          <div className="p-8 w-1/3">
            <div className="items-center justify-center shadow-xl rounded-lg">
            <img
              className="bg-gray-200 h-64 m-auto rounded-t-lg "
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            />
              <div className="bg-white m-auto rounded-b-lg px-8">
                <div className="pt-8 pb-8">
                  <p className="text-2xl h-20 font-bold text-center text-gray-700">
                    {movie.title}
                  </p>
                  <p className="text-xl font-bold text-gray-700">
                    Средняя оценка {movie.vote_average}
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

// <div key={index} className="flex flex-row bg-purple-100">
//   <img className="m-6 rounded-md" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
//   <div className="ml-3  self-center text-2xl font-sans">{movie.title}</div>
//   <div className="m-1 self-center text-2xl font-sans">({movie.original_title})</div>
//   <div className="m-1 self-center text-2xl font-sans">{movie.vote_average}</div>
// </div>
