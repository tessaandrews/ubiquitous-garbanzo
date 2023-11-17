const { User} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id }).populate('users');
        }
       
      },
    },

    Mutation: {
      createUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
  
        return { token, user };
      },

      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });  
        const token = signToken(user);
  
        return { token, user };
      },


      // save a book to a user's `savedBooks` field by adding it to the set (to prevent duplicates)
      // user comes from `req.user` created in the auth middleware function
      saveBook: async (parent, { user, body }, res) => {
        console.log(user);
        try {
          const updatedUser = await User.findOneAndUpdate(
            { _id: user._id },
            { $addToSet: { savedBooks: body } },
            { new: true, runValidators: true }
          );
          return res.json(updatedUser);
        } catch (err) {
          console.log(err);
          return res.status(400).json(err);
        }
      },
      // remove a book from `savedBooks`
      removeBook: async (parent, { user, params }, res) => {
        const updatedUser = await User.findOneAndUpdate(
          { _id: user._id },
          { $pull: { savedBooks: { bookId: params.bookId } } },
          { new: true }
        );
        if (!updatedUser) {
          return res.status(404).json({ message: "Couldn't find user with this id!" });
        }
        return res.json(updatedUser);
      }, 
    }

  
}

  
  
  module.exports = resolvers;