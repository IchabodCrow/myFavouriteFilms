const apiKey = process.env.REACT_APP_API_KEY ;
const url = "https://api.themoviedb.org/3/";

export const movieGenres = () => {
  return fetch(`${url}genre/movie/list?api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
};

export const movieListWithFilters = ({ year='', rating='', genreArr=[], page }) => {
  const genre = genreArr.join(",");
  const genreUrl = `with_genres=${genre}`;
  const ratingUrl = `vote_average.gte=${rating}`;
  const yearUrl = `year=${year}`;
  const pageUrl = `page${page}`;
  return fetch(
    `${url}discover/movie?api_key=${apiKey}&${pageUrl}&${yearUrl}&${ratingUrl}&${genreUrl}`
  )
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
};
