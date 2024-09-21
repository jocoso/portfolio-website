import { gql } from "@apollo/client";

export const ADD_USER = gql`
    mutation addUser($name: String!, $password: String!) {
        addUser(name: $name, password: $password) {
            _id
            name
        }
    }
`;

export const ADD_PROJECT = gql`
    mutation addProject(
        $title: String!
        $images: [String!]!
        $content: String
    ) {
        addProject(title: $title, images: $images, content: $content) {
            _id
            title
            images
            content
        }
    }
`;

export const ADD_ART = gql`
    mutation addArt(
        $name: String
        $image: String!
        $description: String
    ) {
        addArt(name: $name, image: $image, description: $description) {
            _id
            name
            image
            description
        }
    }
`;

export const ADD_POST = gql`
    mutation addPost(
        $title: String!
        $content: String
        $comments: [Object]
        $author: ID!
        $datePublished: Date!
    ) {
        addPost(title: $title, content: $content, comments: $comments, author: $author, datePublished: $datePublished) {
            _id
            title
            content
            comments
            author
            datePublished
        }
    }
`;

export const ADD_MESSAGE = gql`
    mutation addMessage(
        $name: String! 
        $email: String!
        $subject: String!
        $message: String!
    ) {
        addMessage(name: $name, email: $email, subject: $subject, message: $message) {
            _id
            name
            email
            subject
            message
        }
    }
`;