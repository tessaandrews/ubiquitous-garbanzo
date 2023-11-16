import { gql } from '@apollo/client';

export const QUERY_GET_ME = gql`
  query GET_ME(username: String! ) {
    User (username: $username) 
      username
    }
  
`;