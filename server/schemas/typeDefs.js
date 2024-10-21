const typeDefs = `
    scalar Date

    # User Type
    type User {
        _id: ID!
        name: String!
    }

    # Project Type
    type Project {
        _id: ID!
        title: String!
        images: [String]
        content: String!
        createdAt: String!
        updatedAt: String!
    }

    # Art Type
    type Art {
        _id: ID!
        name: String!
        image: String!
        description: String
    }

    # Blog Comment Type
    type BlogComment {
        commenterName: String!
        content: String
        date: Date!
    }

    # Post Type
    type Post {
        _id: ID!
        title: String!
        content: String
        comments: [BlogComment]!
        author: User!
        datePublished: Date!
    }

    # Message Type
    type Message {
        _id: ID!
        name: String!
        email: String!
        subject: String!
        message: String!
    }

    type AuthPayload {
        token: String!
        user: User!
    }

    # Input Types
    input UpdateProjectInput {
        title: String
        images: [String]
        content: String
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

    # Query Type
    type Query {

        users: [User!]
        user(userId: ID!): User

        projects: [Project]!
        project(_id: ID!): Project

        arts: [Art!]
        art(artId: ID!): Art

        posts: [Post!]
        post(_id: ID!): Post

        messages: [Message!]
        message(messageId: ID!): Message
    }

    # Mutation Type
    type Mutation {
        login(username: String!, password: String!): AuthPayload!
        addUser(name: String!, password: String!): User
        removeUser(userId: ID!): User

        addProject(title: String!, images: [String], content: String!): Project
        updateProject(id: ID!, input: UpdateProjectInput!): Project!
        removeProject(projectId: ID!): Project

        addArt(input: AddArtInput!): Art
        removeArt(artId: ID!): Art

        addPost(input: AddPostInput!): Post
        removePost(_id: ID!): Post

        addMessage(input: AddMessageInput!): Message
        removeMessage(messageId: ID!): Message
    }
`;

module.exports = typeDefs;