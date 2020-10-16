import { gql } from 'apollo-boost';

export default gql`
  mutation addFiltres($year: String, $rating: String, $genres: String) {
    addFiltres( year: $year, rating: $rating, genres: $genres){
      genres{
        genres
        id
      }
    }
  }
`;