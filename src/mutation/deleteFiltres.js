import { gql } from 'apollo-boost';

export default gql`
  mutation deleteFiltres($id: String) {
    deleteFiltres(id: $id)
  }
`;