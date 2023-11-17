import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!, $username: String!) {
    login(email: $email, password: $password, username: $username) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;



export const SAVE_BOOK = gql`

  mutation saveBook($array: String!, $title: String!, $description: String!, $bookId: String!, $image: String!, $link: String!) {
    saveBook (array: $array, title: $title, description: $description, bookId: $bookId, image: $image, link: $link) {
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
