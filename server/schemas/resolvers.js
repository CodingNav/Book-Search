const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // Access current user's profile
        me: async (parent, args, context) => {
            if (context.user) {
                // excludes password form User object
                const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
                return userData;
            }
            throw new AuthenticationError('Not logged in!');
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, username, password }) => {
            // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
            const user = await User.findOne({ $or: [{ email: email }, { username: username }] });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const checkPassword = await user.checkPassword(password);

            if (!checkPassword) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        saveBook: async (parent, { bookData }, context) => {
            if (context.user) {
                const user = await User.updateOne(
                    { _id: context.user._id },
                    { $push: { savedBooks: { bookData } } },
                    { new: true }
                );
                return user;
            }
            throw new AuthenticationError('User not logged in');
        },
        deleteBook: async (parent, { bookId }, context) => {
            if (context.user) {
                const user = await User.updateOne(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId } } },
                    { new: true }
                );
                return user;
            }
            throw new AuthenticationError('User not logged in');
        }
    }
}

module.exports = resolvers;