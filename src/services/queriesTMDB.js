const apiKey = process.env.REACT_APP_API_KEY;
const url = "https://api.themoviedb.org/3/";
const lang = localStorage.getItem("i18nextLng");

export const movieGenres = () => {
  return fetch(`${url}genre/movie/list?api_key=${apiKey}&language=${localStorage.getItem('i18nextLng')}`)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));
};

export const movieListWithFilters = ({
  year = "",
  rating = "",
  genresArr = [],
  page,
}) => {
  const genre = genresArr.join();
  const genreUrl = `with_genres=${genre}`;
  const ratingUrl = `vote_average.gte=${rating}`;
  const yearUrl = `year=${year}`;
  const pageUrl = `page${page}`;
  return fetch(
    `${url}discover/movie?api_key=${apiKey}&${pageUrl}&${yearUrl}&${ratingUrl}&${genreUrl}&language=${lang}`
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
};
