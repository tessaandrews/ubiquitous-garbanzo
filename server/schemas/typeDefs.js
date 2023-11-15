const typeDefs = `
  type User {
    _id: Int!
    username: String!
    email: String!
    bookCount: String!
    savedBooks: String!
  }

  type Book {
    bookId: String!
    authors: String!
    description: String!
    title: String!
    image: String!
    link: String!
  }

  type Auth {
    token: Int!
    user: [User]
  }


type Query {
    me: [User]
  }

  type Mutation {
    login(email: String!, pass: String!): [Auth]
    addUser(username: String!, email : String!, password: String!): [Auth]
    saveBook(array: String!, description: String!, title: String!, bookId: Int!): [User]
    removeBook(bookId: Int!): [User]
  }
`;

module.exports = typeDefs;