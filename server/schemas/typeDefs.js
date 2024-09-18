const typeDefs = `
    scalar Date

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

    type Art {
        _id: ID!
        image: String!
        description: String
    }

    type BlogComment {
        commenterName: String!
        content: String
        date: Date!
    }

    type Post {
        _id: ID!
        title: String!
        content: String
        comments: [BlogComment]!
        author: User!
        datePublished: Date!
    }

    type Message {
        _id: ID!
        name: String!
        email: String!
        subject: String!
        message: String!
    }

    input blogCommentInput {
        commenterName: String!
        content: String
        date: Date
    }

    type Query {
        users: [User]!
        user(userId: ID!): User

        projects: [Project]
        project(projectId: ID!): Project

        arts: [Art]!
        art(artId: ID!): Art

        posts: [Post]!
        post(postId: ID!): Post

        messages: [Message]!
        message(messageId: ID!): Message
    }

    type Mutation {
        addUser(name: String!, password: String!): User
        removeUser(userId: ID!): User

        addProject(title: String!, images: [String]!, content: String!): Project
        removeProject(projectId: ID!): Project

        addArt(image: String!, description: String): Art
        removeArt(artId: ID!): Art

        addPost(title: String!, content: String, comments: [blogCommentInput], author: ID!, datePublished: Date!): Post
        removePost(postId: ID!): Post

        addMessage(name: String!, email: String!, subject: String!, message: String!): Message
        removeMessage(messageId: ID!): Message
    }
`;

module.exports = typeDefs;