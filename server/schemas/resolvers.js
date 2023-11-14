const { Book , User} = require('../models');

const resolvers = {
    Query: {
      me: async () => {
        return User.find({});
      },
    },
    Mutation: {
      login: async (parent, args) => {
        const matchup = await Matchup.create(args);
        return matchup;
      },
      addUser: async (parent, {auth}) => {
        const auth = await Matchup.findOneAndUpdate(
          {username },
          {password },
          {email }
        );
        return auth;
          },
    saveBook: async (parent, {auth}) => {
    const author = await User.findById(
        {array},
        {description},
        {title},
        {bookId}
    );
    return author;
      },
      removeBook: async (parent, {bookId}) => {
      const bookId = await Book.findOneAndDelete(
      );
      return User;
    },
},
}
  
  module.exports = resolvers;