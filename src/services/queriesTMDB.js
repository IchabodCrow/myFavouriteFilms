import axios from "axios";

const apiKey = "api_key=09f30eef2a2368938501ec982e6bd612";

export const movieGenres = () => {
  return axios
    .get(`https://api.themoviedb.org/3/genre/movie/list?${apiKey}`)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

export const movieListWithFilters = (year, rating, genreArr, page) => {
  const genre = genreArr.join(",");
  const genreUrl = `with_genres=${genre}`;
  const ratingUrl = `vote_average.gte=${rating}`;
  const yearUrl = `year=${year}`;
  const pageUrl = `page${page}`;
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?${apiKey}&${pageUrl}&${yearUrl}&${ratingUrl}&${genreUrl}`
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
