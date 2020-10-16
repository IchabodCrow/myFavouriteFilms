import { gql } from 'apollo-boost';

export default gql`
  mutation addMovie($id: String, $movieId: String) {
    addMovie( id: $id, movieId: $movieId){
      movieId
    } 
  }
`;