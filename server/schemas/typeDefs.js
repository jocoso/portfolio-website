const typeDefs = `
    type User {
        _id: ID
        name: String
        password: String
    }

    type Query {
        users: [User]!
        user(userId: ID!): User
    }

    type Mutation {
        addUser(name: String!, password: String!): User
        removeUser(userId: ID!): User
    }
`;

module.exports = typeDefs;