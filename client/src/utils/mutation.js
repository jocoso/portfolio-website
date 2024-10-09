import { gql } from "@apollo/client";

// Define reusable fragments
const USER_FIELDS = gql`
    fragment UserFields on User {
        _id
        name
    }
`;

const PROJECT_FIELDS = gql`
    fragment ProjectFields on Project {
        _id
        title
        images
        content
    }
`;

const ART_FIELDS = gql`
    fragment ArtFields on Art {
        _id
        name
        image
        description
    }
`;

const POST_FIELDS = gql`
    fragment PostFields on Post {
        _id
        title
        content
        comments
        author
        datePublished
    }
`;

const MESSAGE_FIELDS = gql`
    fragment MessageFields on Message {
        _id
        name
        email
        subject
        message
    }
`;

// Use fragments in the mutations

export const ADD_USER = gql`
    mutation addUser($name: String!, $password: String!) {
        addUser(name: $name, password: $password) {
            ...UserFields
        }
    }
    ${USER_FIELDS}
`;

export const ADD_PROJECT = gql`
    mutation addProject(
        $title: String!
        $images: [String!]!
        $content: String
    ) {
        addProject(title: $title, images: $images, content: $content) {
            ...ProjectFields
        }
    }
    ${PROJECT_FIELDS}
`;

export const ADD_ART = gql`
    mutation addArt($name: String, $image: String!, $description: String) {
        addArt(name: $name, image: $image, description: $description) {
            ...ArtFields
        }
    }
    ${ART_FIELDS}
`;

export const ADD_POST = gql`
    mutation addPost(
        $title: String!
        $content: String
        $comments: [CommentInput]
        $author: ID!
        $datePublished: Date!
    ) {
        addPost(
            title: $title
            content: $content
            comments: $comments
            author: $author
            datePublished: $datePublished
        ) {
            ...PostFields
        }
    }
    ${POST_FIELDS}
`;

export const ADD_MESSAGE = gql`
    mutation addMessage(
        $name: String!
        $email: String!
        $subject: String!
        $message: String!
    ) {
        addMessage(
            name: $name
            email: $email
            subject: $subject
            message: $message
        ) {
            ...MessageFields
        }
    }
    ${MESSAGE_FIELDS}
`;
