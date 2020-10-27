import { gql } from "apollo-boost";

export default gql`
  query {
    movieList {
      img
      date
      title
      movieId
      average
      overview
    }
  }
`;