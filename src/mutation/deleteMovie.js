import { gql } from "apollo-boost"

export default gql`
  mutation deleteMovie($movieId: String) {
    deleteMovie(movieId: $movieId)
  }
`;