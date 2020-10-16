import { gql } from 'apollo-boost';

export default gql`
  mutation deleteMovie($id: String) {
    deleteMovie( id: $id)
  }
`;