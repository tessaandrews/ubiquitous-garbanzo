const { Book , User} = require('../models');

const resolvers = {
    Query: {
      me: async () => {
        return User.find({});
      },
    },
    Mutation: {
      login: async (parent, {user}) => {
        const users = await User.create(user);
        return users;
      },
      addUser: async (parent, {auth}) => {
        const auths = await Matchup.findOneAndUpdate(
          {username },
          {password },
          {email }
        );
        return auths;
          },
    saveBook: async (parent, {author}) => {
    const authors = await User.findById(
        {array},
        {description},
        {title},
        {id},
    );
    return authors;
      },
      removeBook: async (parent, {bookId}) => {
      const bookIds = await Book.findOneAndDelete(
      );
      return bookIds;
    },
},
}
  
  module.exports = resolvers;