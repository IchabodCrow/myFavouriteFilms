import { gql } from "apollo-boost";

export default gql`
  query {
    genresList {
      name
      genreId
    }
  }
`;