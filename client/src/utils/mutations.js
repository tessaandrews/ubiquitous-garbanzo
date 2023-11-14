import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser ($name: String!) {
    loginUser(name: $name) {
        _id
        name
        skills
    }
    }
`;

export const ADD_USER = gql`
  mutation addUser ($name: name!) {
    addUser(profileId: $profileId, skill: $skill) {
        _id
        name
        skills
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook ($bookId: bookId!) {
    saveBook()
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook ($bookId: bookId!) {     
    removeBook () 
    }
  }
`;