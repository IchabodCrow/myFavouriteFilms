import { gql } from 'apollo-boost';

export default gql`
  mutation deleteFiltres($id: String, $filter: String) {
    deleteFiltres(id: $id, filter: $filter)
  }
`;