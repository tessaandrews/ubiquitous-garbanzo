const typeDefs = `
  type User {
    _id: String!
    username: String!
    email: String!
    bookCount: String!
    savedBooks: String!
    password: String!
  }

  type Book {
    bookId: String!
    authors: String!
    title: String!
    image: String!
    link: String!
  }

  type Auth {
    user: [User]
    token(_id: String): [User]
  }

type Query {
    user: [User]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email : String!, password: String!): Auth
    saveBook(title: String!, bookId: String!): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;