import { gql } from "apollo-boost";

export default gql`
  query{
    readFiltres{
      year
      rating
      genre{
        genreId
      }
    }
  }
`