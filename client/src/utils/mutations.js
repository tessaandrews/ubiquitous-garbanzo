import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser ($username: String!, $password: String!) {
    loginUser(username: $username, $email: email, password: $password) {
      username
      password
      email
  }
}
`;

export const ADD_USER = gql`
  mutation addUser ($username: String!, $email: String!) {
    addUser (username: $username, $email:email)
    username
    email
    password
   
   }
  
`;

export const SAVE_BOOK = gql`

  mutation saveBook ($bookId: String!) {
    saveBook ($bookId: bookId) {
      bookId
    }
  }
`;

export const REMOVE_BOOK = gql`

  mutation removeBook ($bookId: String!) {     
    removeBook ($bookId: bookId) {
      bookId
  
  }
}
`;
