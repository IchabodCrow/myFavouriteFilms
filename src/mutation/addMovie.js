import { gql } from "apollo-boost";

export default gql`
  mutation addMovie($movieId: String) {
    addMovie(movieId: $movieId) {
      movieId
    }
  }
`;