import { gql } from 'apollo-boost';

export default gql`
  mutation updateFiltres(
    $year: String, 
    $rating: String, 
    $genre: String) {
      updateFiltres( year: $year, rating: $rating, genre: $genre){
        genreId
      }
  }
`;