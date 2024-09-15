const typeDefs = `
    type User {
        _id: ID!
        name: String
    }

    type Project {
        _id: ID!
        title: String!
        images: [String!]!
        content: String
    }

    type Query {
        users: [User]!
        user(userId: ID!): User
        projects: [Project]
        project(projectId: ID!): Project
    }

    type Mutation {
        addUser(name: String!, password: String!): User
        removeUser(userId: ID!): User
        addProject(title: String!, images: [String]!, content: String!): Project
        removeProject(projectId: ID!): Project
    }
`;

module.exports = typeDefs;