import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;



export const SAVE_BOOK = gql`

  mutation saveBook($title: String!, $description: String!) {
    saveBook (title: $title, description: $description) {
      token
      user {
        bookId 
        title
        description
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`

  mutation removeBook($bookId: String!) {     
    removeBook(bookId: $bookId) {
      token
      user {
        bookId 
        title
        description
        image
        link
      }
  }
}
`;
