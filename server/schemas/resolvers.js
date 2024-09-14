const { User } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },

        user: async (user, { userId }) => {
            return User.findOne({ _id: profileId });
        },
    },

    Mutation: {
        addUser: async (parent, { name, password }) => {
            return User.create({ name, password });
        },
        removeUser: async (parent, { userId }) => {
            return User.findOneAndDelete({ _id: userId });
        },
    },
};

module.exports = resolvers;