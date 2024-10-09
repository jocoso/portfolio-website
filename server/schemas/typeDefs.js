const typeDefs = `
    scalar Date

    type User {
        _id: ID!
        name: String!
    }

    type Project {
        _id: ID!
        title: String!
        images: [String!]!
        content: String
    }

    type Art {
        _id: ID!
        name: String!
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

    input BlogCommentInput {
        commenterName: String!
        content: String
        date: Date
    }

    input AddProjectInput {
        title: String!
        images: [String!]!
        content: String!
    }

    input AddArtInput {
        name: String!
        image: String!
        description: String
    }

    input AddPostInput {
        title: String!
        content: String
        comments: [BlogCommentInput]
        author: ID!
        datePublished: Date!
    }

    input AddMessageInput {
        name: String!
        email: String!
        subject: String!
        message: String!
    }

    type Query {
        users: [User]!
        user(userId: ID!): User

        projects: [Project]!
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

        addProject(input: AddProjectInput!): Project
        removeProject(projectId: ID!): Project

        addArt(input: AddArtInput!): Art
        removeArt(artId: ID!): Art

        addPost(input: AddPostInput!): Post
        removePost(postId: ID!): Post

        addMessage(input: AddMessageInput!): Message
        removeMessage(messageId: ID!): Message
    }
`;

module.exports = typeDefs;
