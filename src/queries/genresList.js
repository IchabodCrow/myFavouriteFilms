import { gql } from "apollo-boost";

export default gql`
  query {
    genresList {
      genreId
      name
    }
  }
`;