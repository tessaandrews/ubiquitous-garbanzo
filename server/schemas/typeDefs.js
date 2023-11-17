const typeDefs = `
  
type Query {
  me: User
}

type User {
    _id: ID!
    username: String
    email: String
    bookCount: String
    savedBooks: String
  }


  type Book {
    bookId: String
    authors: String
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    user: User
    token : ID!
    }


  type Mutation {
    login(username: String!, email: String!, password: String!): Auth
    addUser(username: String!, email : String!, password: String!): Auth
    saveBook(array: String!, title: String!, description: String!, bookId: String!, image: String!, link: String!): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;