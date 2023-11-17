import { gql } from '@apollo/client';

export const QUERY_GETME = gql`
  query me($username: String!) {
    me(username: $username) {
      _id
      username
      email
      books {
        _id
      }
    }
  }
`;